import "./App.css";
import "./customBlocks/custom_Blocks";
import React, {useEffect, useState} from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import "blockly/python";
import {toolboxCategories} from "./toolboxCategories";



export default function App() {
  const [xml, setXml] = useState("");
  const [pythonCode, setPythonCode] = useState("");
  useEffect(() =>{

  }, [])
  const initialXml =
      '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  function workspaceDidChange(workspace) {
    const code = Blockly.Python.workspaceToCode(workspace);
    setPythonCode(code);
  }

  return (
      <>
        <div className="BG">
          <div>
            <div className="title">pyscratch</div>
            <div className="Slogan">Scratch For <br/> Adults</div>
            <div className="Subtitle">A cheesy line that's pog</div>
            <div className="GSButton">Get Started</div>
          </div>

        </div>
          <div style={{
              width: "100%",
              height: "200px",
              backgroundColor: "#1e1e1e",
              border: "1px solid #1e1e1e",
          }}>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "row",
          }}>
        <BlocklyWorkspace
            toolboxConfiguration={toolboxCategories}
            initialXml={initialXml}
            className="fill-height"
            workspaceConfiguration={{
              theme: "dark"
            }}
            onWorkspaceChange={workspaceDidChange}
            onXmlChange={setXml}
        />
        <textarea
            id="code"
            style={{ height: "700px", width: "50%", backgroundColor: "#1e1e1e", color: "white"}}
            value={pythonCode}
            readOnly
        ></textarea>
          </div>
      </>
  );
}