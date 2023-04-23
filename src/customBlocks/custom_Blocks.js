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

Blockly.Blocks['click_button_xpath'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Click Button");
        this.appendValueInput("XPATH")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Button XPath");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['fill_input'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Enter Input");
        this.appendValueInput("input")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Input");
        this.appendValueInput("NAME")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("XPath");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['click_button_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Click Button");
        this.appendValueInput("Text")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Button Text");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['click_button_class_name'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Click Button");
        this.appendValueInput("Class Name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Class Name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['import_pd_and_np'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Import pandas");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Import NumPy");
        this.appendDummyInput()
            .appendField("Create Dataframe");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['scrape_element_class_name'] = {
    init: function() {
        this.appendValueInput("name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Name");
        this.appendValueInput("class_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Class Name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['scrape_element_xpath'] = {
    init: function() {
        this.appendValueInput("Name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Name");
        this.appendValueInput("XPATH")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("XPATH");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['generate_csv'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Generate CSV");
        this.appendValueInput("name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CSV Name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(15);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['start_selenium'] = function(block) {
    var code = 'from selenium import webdriver\n';
    code += 'from selenium.webdriver.common.keys import Keys\n';
    code += 'from selenium.webdriver.common.by import By\n';
    code += 'driver = webdriver.Chrome()\n' + "\n";
    return code;
};

Blockly.Python['go_to_link'] = function(block) {
    var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
    var code = 'driver.get(' + value_url + ')\n' + "\n";
    return code;
};

Blockly.Python['click_button_xpath'] = function(block) {
    var value_xpath = Blockly.Python.valueToCode(block, 'XPATH', Blockly.Python.ORDER_ATOMIC);
    var code = "click_button = driver.find_element(By.XPATH," + value_xpath + ")\n";
    code += "click_button.click()\n" + "\n";
    return code;
};

Blockly.Python['fill_input'] = function(block) {
    var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var code = 'driver.find_element(By.XPATH,' + value_name + ').send_keys(' + value_input + ')\n' + "\n";
    return code;
};

Blockly.Python['click_button_text'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'Text', Blockly.Python.ORDER_ATOMIC);
    var code = "click_button = driver.find_element(By.LINK_TEXT," + value_text + ")\n";
    code += "click_button.click()\n" + "\n"
    return code;
};

Blockly.Python['click_button_class_name'] = function(block) {
    var value_class_name = Blockly.Python.valueToCode(block, 'Class Name', Blockly.Python.ORDER_ATOMIC);
    var code = "click_button = driver.find_element(By.CLASS_NAME," + value_class_name + ")\n";
    code += "click_button.click()\n" + "\n"
    return code;
};

Blockly.Python['import_pd_and_np'] = function(block) {
    var code = 'import pandas as pd\n';
    code += 'import numpy as np\n';
    code += 'df = pd.DataFrame()\n' + "\n";
    return code;
};

Blockly.Python['scrape_element_class_name'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
    var value_class_name = Blockly.Python.valueToCode(block, 'class_name', Blockly.Python.ORDER_ATOMIC);
    var code = 'scraped_elements = driver.find_elements(By.CLASS_NAME,' + value_class_name + ')\n';
    code += 'df[' + value_name + '] = [element.text for element in scraped_elements]\n' + "\n";
    return code;
};

Blockly.Python['scrape_element_xpath'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'Name', Blockly.Python.ORDER_ATOMIC);
    var value_xpath = Blockly.Python.valueToCode(block, 'XPATH', Blockly.Python.ORDER_ATOMIC);
    var code = 'scraped_elements = driver.find_elements(By.XPATH,' + value_xpath + ')\n';
    code += 'df[' + value_name + '] = [element.text for element in scraped_elements]\n' + "\n";
    return code;
};

Blockly.Python['generate_csv'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
    var code = 'df.to_csv(' + value_name + ')\n' + "\n";
    return code;
};