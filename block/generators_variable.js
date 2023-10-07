module.exports = function(Blockly) {
  "use strict";
  if (!Blockly.dbNameType) {
    Blockly.dbNameType = {};
  }
  Blockly.JavaScript["variables_get"] = function(block) {
// Variable getter.
    var code = Blockly.JavaScript.variableDB_.getName(block.getField("VAR").getText(), Blockly.Variables.NAME_TYPE);
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  Blockly.JavaScript["variables_set"] = function(block) {
    // Variable setter.
    let argument0 = Blockly.JavaScript.valueToCode(block, "VALUE",
      Blockly.JavaScript.ORDER_ASSIGNMENT) || "0";

    let varName = Blockly.JavaScript.variableDB_.getName(block.getField("VAR").getText(), Blockly.Variables.NAME_TYPE);
    let childType;
    if (block.childBlocks_.length >= 1) {
      let child = block.getInputTargetBlock("VALUE");
      if (child && child.outputConnection.check_ && child.outputConnection.check_[0]) {
        childType = child.outputConnection.check_[0];
        let targetGetVarBlock = Blockly.getMainWorkspace().getAllBlocks().filter(e => e.type === "variables_get" && e.getField("VAR").getText() === varName);
        (targetGetVarBlock.length > 0) && targetGetVarBlock.map(el => el.setOutput(true, child.outputConnection.check_));//el.outputConnection.check_ = child.outputConnection.check_);
      } else { //don't have child or child block not define type
        childType = "int";
        let targetGetVarBlock = Blockly.getMainWorkspace().getAllBlocks().filter(e => e.type === "variables_get" && e.getField("VAR").getText() === varName);
        (targetGetVarBlock.length > 0) && targetGetVarBlock.map(el => el.setOutput(true, null));
      }
    }
    Blockly.dbNameType[varName] = {
      name: varName, type: childType
    };
    return varName + " = " + argument0 + ";\n";
  };

};