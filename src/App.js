import "./App.css";
import "./customBlocks/custom_Blocks";
import React, {useEffect, useState} from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import pythonGenerator from "blockly/python";
import {toolboxCategories} from "./toolboxCategories";
import SelImage from "./selenium.png";
import GenImage from "./GenImage.png";
import landingPage from "./ImageForLandingPageBG.png";

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
                <div style={{
                    flexDirection: "column",
                }}>
                    <div className="title">pyscratch</div>
                    <div className="Slogan">Scratch For <br/> Adults</div>
                    <div className="Subtitle">Automate, Elevate, and Be Productive</div>
                    <div className="GSButton">Get Started</div>
                </div>
            </div>
            <div style={{
                width: "100%",
                height: "900px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    color: "#000",
                    fontFamily: "Poppins",
                    marginTop: "-100px",
                }}>Tutorial</div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
                     >

                <div className="card" style={{
                    marginRight: "20px",
                }}>
                    <div className="cardTitle">Step 1</div>
                    <div className="cardSubtitle" style={{padding: "25px"}}>Click on the Automation tab of the workspace. Begin with the "Start Selenium" block and start adding blocks to create scripts.</div>
                    <img src={SelImage} style={{width: "100%", height: "43%", borderRadius: "10px"}}/>
                </div>
                <div className="card" style={{
                    marginRight: "20px",}}>
                    <div className="cardTitle">Step 2</div>
                    <div className="cardSubtitle" style={{padding: "25px"}}>Right next to the blockly workspace, there is a python code generator. This is how your blocks are translated for real time applications.</div>
                    <img className="COOL" src={GenImage} style={{width: "90%", height: "16%", marginTop: "30px"
                    }}/>
                </div>
                <div className="card" style={{
                    marginRight: "20px",}}>
                    <div className="cardTitle">Step 3</div>
                    <div className="cardSubtitle" style={{padding: "25px"}}>Once your blockly code is finished, click the download button to get the actual python file that can be run on any text editor. </div>
                    <button className="ButtonPhony" >Download</button>
                </div>
                </div>
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
                    style={{ padding: "10px", height: "678px", maxWidth: "50%", minWidth: "50%", backgroundColor: "#1e1e1e", color: "white",  minHeight: "678px", overflow: "auto"}}
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