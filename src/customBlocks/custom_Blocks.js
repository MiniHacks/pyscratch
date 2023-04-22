import Blockly from "blockly";
import 'blockly/python';

Blockly.Blocks['start_selenium'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Start Selenium");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['go_to_link'] = {
    init: function() {
        this.appendValueInput("url")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Go to URL");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['start_selenium'] = function(block) {
    var code = 'from selenium import webdriver\n';
    code += 'from selenium.webdriver.common.keys import Keys\n';
    code += 'from selenium.webdriver.common.by import By\n';
    code += 'driver = webdriver.Chrome()\n';
    return code;
};

Blockly.Python['go_to_link'] = function(block) {
    var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
    var code = 'driver.get(' + value_url + ')\n';
    return code;
};