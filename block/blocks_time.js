module.exports = function(Blockly){
    'use strict';

Blockly.Blocks['time_delay'] = {
  init: function() {
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("delay");
    this.appendDummyInput()
        .appendField("millisecond");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("pause running program for awhile");
 this.setHelpUrl("");
  }
};

  Blockly.Blocks['time_delay_microsec'] = {
    init: function() {
      this.appendValueInput("delay")
      .setCheck("Number")
      .appendField("delay");
      this.appendDummyInput()
      .appendField("microseconds");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
      this.setTooltip("pause running program for awhile");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['time_wait_btn_press'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait button")
        .appendField(new Blockly.FieldDropdown([["button_A","14"], ["button_B","27"]]), "NAME")
        .appendField("press");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("waiting for button pressed");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['time_millis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("timestamp millisecond");
    this.setInputsInline(true);
    this.setOutput(true, ["Number","uint32_t"]);
    this.setColour(0);
 this.setTooltip("get time since program start in millisecond");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_micros'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("timestamp microsecond");
    this.setInputsInline(true);
    this.setOutput(true,["Number","uint32_t"]);
    this.setColour(0);
 this.setTooltip("get time since program start in microsecond");
 this.setHelpUrl("");
  }
};

}