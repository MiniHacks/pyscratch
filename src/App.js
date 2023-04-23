import "./App.css";
import "./customBlocks/custom_Blocks";
import React, {useEffect, useState} from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import pythonGenerator from "blockly/python";
import {toolboxCategories} from "./toolboxCategories";

export default function App() {
    const [xml, setXml] = useState("");
    const [pythonCode, setPythonCode] = useState("");
    useEffect(() =>{

    }, [])
    const initialXml =
        '<xml xmlns="https://developers.google.com/blockly/xml"><block type="start_selenium" id="aKUkJCFO_I|nYt1W},No" x="77" y="56"><next><block type="go_to_link" id="Wc1[Q@7gDjjL8BL_e5us"><value name="url"><block type="text" id="9vtGi1i98.}7[,]HAYkG"><field name="TEXT">https://zoom.us/</field></block></value><next><block type="click_button_text" id="oOsG3_,G%=/]PsUERU}-"><value name="Text"><block type="text" id="ww-mT8if%blm^lhR1LA^"><field name="TEXT">Sign Up</field></block></value></block></next></block></next></block><block type="fill_input" id="e:pck@4B.5Sr[.M3o3.L" x="77" y="206"><value name="input"><block type="text" id="|$`TllsDj%.{{k`gEAJC"><field name="TEXT">email</field></block></value><value name="NAME"><block type="text" id="$UT[W=`$$4uA)3+`[Rf3"><field name="TEXT">//*[@id="email"]</field></block></value></block><block type="fill_input" id="W}c_+Jn+4#18~[ec5cyN" x="80" y="334"><value name="input"><block type="text" id="bYH}GnzjT9t#?Gm)sf!}"><field name="TEXT">password</field></block></value><value name="NAME"><block type="text" id="URb-;xk)v+8W__g=zR81"><field name="TEXT">//*[@id="password"]</field></block></value></block></xml>'
    function workspaceDidChange(workspace) {
        const code = pythonGenerator.workspaceToCode(workspace);
        setPythonCode(code);
    }

    const HandleClick = ( event ) => {
        const value = event.target.value;
        setXml(value);
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
            <div style={{ position: "absolute", right: "0px", display: "flex", justifyContent: "end", paddingRight: '10px' }}>
            <button className="button" onClick={handleDownloadClick}>
                Download
            </button>
            </div>
        );
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
                    style={{ height: "695px", width: "50%", backgroundColor: "#1e1e1e", color: "white"}}
                    value={pythonCode}
                    readOnly
                ></textarea>
                <DownloadPythonFile code={pythonCode} />
            </div>
            <div className = "footer">
                <div className = "line1">Made for LA Hacks 2023</div>
                <div className = "line2">Hacked together by
                    <a href = "https://anshpa.tel/">Ansh</a>,&nbsp;
                    <a href = "https://www.iamstuti.com/">Stuti</a>,&nbsp;
                    <a href = "https://www.brandonlam.dev/">Brandon</a>, and&nbsp;
                    <a href = "https://www.linkedin.com/in/smritikhulbe/">Smriti</a>. We all study at the University of Minnesota, Twin Cities.</div>
                <div className = "line3">Star us on
                    <a href = "https://github.com/FernandoVazZ/reactblockly-customblocks">Github</a> and like us on
                    <a href = "https://devpost.com/software/pyscratch">Devpost</a>.</div>
            </div>
        </>
    );
}