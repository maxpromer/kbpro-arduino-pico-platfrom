const fs = require('fs');
const path = require('path');


//---- setup dir ----//
const engine = Vue.prototype.$engine;
const G = Vue.prototype.$global;
//-------------------//
const resolveCode = function(finds,code,res)
{
    if(!res){
        res = {};
    }
    for(let ind = 0;ind < finds.length;ind ++){
      let node = finds[ind];
      if(!code.includes(node)){
        continue;
      }
      let startPos = code.indexOf(node) + node.length;
      let endPos = code.indexOf("#END",startPos) + 4;
      let subCode = code.substring(startPos,endPos);
      if(new RegExp(finds.join("|")).test(subCode)){ //contain sub
        let r = resolveCode(finds,subCode,res);
        res = r.res;
        subCode = r.code;
        code = code.substring(0,startPos) + subCode + code.substring(endPos);
        ind--;
        continue; //restart again
      }else{
        if(!res[node]){
          res[node] = [];
        }
        let subNode = code.substring(startPos,endPos - 4).trim();
        if(!res[node].includes(subNode)){
          res[node] = res[node].concat(subNode);
        }
        code = code.substring(0,startPos-node.length) + code.substring(endPos);
        if(code.includes(node)){
          ind--; //start again
        }
      }
    }
    return {res : res, code : code};
};
module.exports = {
    createCodeContext : function(rawCode,config,plugins)
    {
        let source_code = rawCode;
        let finds = ["#EXTINC","#VARIABLE","#FUNCTION","#LOOP_EXT_CODE","#SETUP","#BLOCKSETUP"];
        let preinit = {
          "#EXTINC" : [],"#VARIABLE" : [],"#FUNCTION" : [],"#LOOP_EXT_CODE" : [],"#SETUP" : [],"#BLOCKSETUP" : []
        };
        let pluginInfo = G.plugin.pluginInfo;
        let plugins_includes_switch = [];
        let plugins_sources = [];
        let res = resolveCode(finds,source_code,preinit);
        source_code = res.code;
        let incFiles = res.res["#EXTINC"];

        for(let ix in incFiles){
          let incsRex =    /#include\s*(?:\<|\")(.*?\.h)(?:\>|\")/gm;
          let m;
          while (m = incsRex.exec(incFiles[ix])) {
            let incFile = m[1].trim();
            //lookup plugin exist inc file and not added to compiled files.
            let includedPlugin = pluginInfo.categories.find(
              obj=>
                obj.sourceFile.includes(incFile) &&
                !plugins_includes_switch.includes(obj.sourceIncludeDir)
            );
            if(includedPlugin){
              plugins_includes_switch.push(includedPlugin.sourceIncludeDir);
              let cppFiles = includedPlugin.sourceFile
                .filter(el=>el.endsWith(".cpp") || el.endsWith(".c"))
                .map(el=>includedPlugin.sourceIncludeDir + "/" +el);
              plugins_sources.push(...cppFiles);
            }
          }
        }
        let replaceRegex2 = /^\s*[\r\n]/gm;
        source_code = source_code.replace(replaceRegex2,"");
        return {
          EXTINC : incFiles.join('\n'),
          FUNCTION : res.res["#FUNCTION"].join('\n'),
          VARIABLE : res.res["#VARIABLE"].join('\n'),
          SETUP_CODE : res.res["#SETUP"].join('\n'),
          BLOCKSETUP : res.res["#BLOCKSETUP"].join('\n'),
          LOOP_CODE : source_code,
          LOOP_EXT_CODE : res.res["#LOOP_EXT_CODE"].join('\n'),
          plugins_includes_switch : plugins_includes_switch,
          plugins_sources : plugins_sources,
        }
    },
	generate : function(rawCode){
        let platformDir = `${engine.util.platformDir}/${G.board.board_info.platform}`;
        let boardDirectory = `${engine.util.boardDir}/${G.board.board}`;
        let template = null;
        if(fs.existsSync(`${boardDirectory}/template.c`)){
            template = fs.readFileSync(`${boardDirectory}/template.c`,'utf8');
        }else{
            template = fs.readFileSync(`${platformDir}/template.c`,'utf8');
        }
        let codeContext = this.createCodeContext(rawCode,null,null);
        const entries = Object.entries(codeContext);
        const result = entries.reduce( (output, entry) => {
            const [key, value] = entry;
            const regex = new RegExp( `\\$\{${key}\}`, 'g');
            return output.replace( regex, value );
        }, template );
        //let result = template;
        //let codeContext = {};
        return {sourceCode : result, codeContext : codeContext};
    }
};
