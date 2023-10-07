module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['time_delay'] = function(block) {
  var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = `delay(${value_delay});\n`;
  return code;
};

Blockly.JavaScript['time_delay_microsec'] = function(block) {
    var value_delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `delayMicroseconds(${value_delay});\n`;
    return code;
};


Blockly.JavaScript['time_wait_btn_press'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');  
  var code = `while(!digitalRead(${dropdown_name}));\n`;
  return code;
};

Blockly.JavaScript['time_millis'] = function(block) {
  var code = 'millis()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_micros'] = function(block) {
  var code = 'micros()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

};