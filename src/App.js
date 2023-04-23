import "./App.css";
import "./customBlocks/custom_Blocks";
import React, {useEffect, useState} from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import pythonGenerator from "blockly/python";
import {toolboxCategories} from "./toolboxCategories";
import Image from "./ImageForLandingPage.png";

export default function App() {
    const [xml, setXml] = useState("");
    const [pythonCode, setPythonCode] = useState("");
    useEffect(() =>{

    }, [])
    const initialXml =
        '<xml xmlns="https://developers.google.com/blockly/xml"><block type="start_selenium" id="6}?:zoYRm3^d??T5//+H" x="73" y="27"><next><block type="import_pd_and_np" id="M%/Zs;4@YZh/-H}~/FP%"><next><block type="go_to_link" id="e~x7NH$WpNRrqKS/o(8V"><value name="url"><block type="text" id="*N}S]fAE:(sWnR66HhtN"><field name="TEXT">https://hoopshype.com/salaries/players/</field></block></value><next><block type="scrape_element_class_name" id="QUJ/j@X.#qMwe9ziH#rz"><value name="name"><block type="text" id="xR$8O2m`0u%N`$TS~v[Z"><field name="TEXT">Name</field></block></value><value name="class_name"><block type="text" id="*s*j[q,a)~LIeYV/qk5y"><field name="TEXT">name</field></block></value><next><block type="scrape_element_class_name" id="snM|Zkdp]G.4%{RSPAkh"><value name="name"><block type="text" id="w~=(2~C^KK;f(jqUKHNu"><field name="TEXT">Salary</field></block></value><value name="class_name"><block type="text" id="76CtNpeaG^dx790mh4{B"><field name="TEXT">hh-salaries-sorted</field></block></value><next><block type="generate_csv" id="7il}[PFMWAhUBXw!5-,#"><value name="name"><block type="text" id="/musb3Z/kU7F$?lPbh^."><field name="TEXT">example.csv</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>';
    function workspaceDidChange(workspace) {
        const code = pythonGenerator.workspaceToCode(workspace);
        setPythonCode(code);
    }


    function DownloadPythonFile({ code }) {
        function handleDownloadClick() {
            // Create a Blob object from the code
            const blob = new Blob([code], { type: 'text/plain' });

            // Create a URL object from the Blob
            const url = URL.createObjectURL(blob);

            // Create a link element and set its href attribute to the URL
            const link = document.createElement('a');
            link.href = url;

            // Set the link's download attribute to the desired file name
            link.download = 'script.py';

            // Programmatically click the link to start the download
            document.body.appendChild(link);
            link.click();

            // Cleanup the URL object
            URL.revokeObjectURL(url);
        }

        return (
            <button className="button" onClick={handleDownloadClick}>
                Download
            </button>
        );
    }

    return (
        <>
            <div className="BG">
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                }
                }>
                    <div className="title">pyscratch</div>
                    <div className="Slogan">Scratch For <br/> Adults</div>
                    <div className="Subtitle">A cheesy line that's pog</div>
                    <div className="GSButton">Get Started</div>
                </div>
                <div className="Image">
                    <img src={Image} alt="Image" width="700px" height="800px"/>
                </div>
            </div>
            <div style={{
                width: "100%",
                height: "800px",
                backgroundColor: "#fff",
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
            <DownloadPythonFile code={pythonCode} />
        </>
    );
}