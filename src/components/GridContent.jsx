import ReactLogo from "../image/react.png";
import JSLogo from "../image/JS.png";
import TSLogo from "../image/TS.png";
import GitLogo from "../image/git.png";
import GitHubLogo from "../image/Github.png";
import NuxtLogo from '../image/Nuxt.png'
import NodeLogo from "../image/Node.png";
import TailwindLogo from "../image/tail.png";
import React from "react";
import CLogo from '../image/C.png'


export default function GridContent() {
    return (
        <div className='grid-content'>
            <div className="get-center-main">
                <a className="main-line" title="and tools that I use or have ever learned">My Skill</a>
            </div>
                <div className="line"></div>
            <div className="box-grid-container">
                <div className="skill-containe-grid">
                    <div className="container">
                        <img src={ReactLogo} alt={"noo"} width={15}/>
                        <div className="font-container">React</div>
                    </div>
                    <div className="container">
                        <img src={JSLogo} alt={"noo"} width={15}/>
                        <div className="font-container">JavaScript</div>
                    </div>
                    <div className="container">
                        <img src={GitLogo} alt={"noo"} width={15}/>
                        <div className="font-container">Git</div>
                    </div>
                    <div className="container">
                        <img src={GitHubLogo} alt={"noo"} width={15}/>
                        <div className="font-container">GitHub</div>
                    </div>
                    <div className="container">
                        <img src={NodeLogo} alt={"noo"} width={15}/>
                        <div className="font-container">Node</div>
                    </div>
                    <div className="container">
                        <img src={TailwindLogo} alt={"noo"} width={15}/>
                        <div className="font-container">Tailwind</div>
                    </div>
                    <div className="container" title='++/#'>
                        <img src={CLogo} alt={"noo"} width={15}/>
                        <div className="font-container">С</div>
                    </div>
                    <div className="container">
                        <img src={TSLogo} alt={"noo"} width={15}/>
                        <div className="font-container">TypeScript</div>
                    </div>
                    <div className="container box-end">
                        <img src={NuxtLogo} alt={"noo"} width={15}/>
                        <div className="font-container">Nuxt</div>
                    </div>
                </div>
            </div>
        </div>
    )
}