import Engine from '../public/engine.png'
import Loon from '../public/2408610.png'
import React from "react";
import {useTheme} from "../hook/use-theme";
import BackGround from "../public/bg.jpg";
import StemLogo from "../image/steam.png";
import OpenAI from "../image/openai.png";
import ReactLogo from "../image/react.png";
import JSLogo from "../image/JS.png";
import GitLogo from "../image/git.png";
import GitHubLogo from "../image/Github.png";
import NodeLogo from "../image/Node.png";
import TailwindLogo from "../image/tail.png";
import useSlite from "../hook/sliteContent";
import handlerClickIsToogle from '../hook/handlerClickIsToogle'
import {useModalState} from "../hook/useModalState";
import Modal from "./Modal";
import GridContent from "./GridContent";
import Dashboard from "./Dashboard";

export default function Header() {
    const {isOpen, onToggle} = useModalState();
    const handleClick = () => {
        onToggle();

    };

    const {theme, setTheme} = useTheme()

    const handlerLightClick = () => {
        setTheme('light')
    }
    const handlerDarkClick = () => {
        setTheme('dark')

    }

    function handlerClickSteam() {
        window.location.href = 'https://steamcommunity.com/id/Cookiemp4/';
    }

    function halderTheme() {
        let hideContent = document.getElementById('hide-content')
        if (hideContent.hidden === false) {
            hideContent.hidden = true;
        } else {
            hideContent.hidden = false;
        }

    }

    const handleClickOn = () => {
        handlerClickIsToogle()
        halderTheme()
        handleClick()
    }
    return (
        <body id='body-switch-theme'>
            <nav id="content-navbar">
                <p id="my-title" title=":D">Devollo</p>
                <div id="ml-left"/>
                <div>
                    <a href="https://github.com/Devollox" id="btn-github">GitHub</a>
                </div>
                <div onClick={handleClickOn} className="container-bar" id="getClickNavbar">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className={"halder-hide-content"}>
                    <img onClick={handlerDarkClick} src={Engine} alt={"noo"} height={30} className="image-engine"
                         id="get-click-engine"></img>
                    <img onClick={handlerLightClick} src={Loon} alt={"noo"} height={30} className="image-engine"
                         id="get-click-loon"></img>
                </div>
            </nav>
                <Modal open={isOpen} handleClick={handleClick}/>
            <div id="hide-content">
                <div className="content-background">
                    <img src={BackGround} alt={"noo"} id="get-image-background"/>
                </div>
                <div className="main-content">
                    <div className="main-card">
                        <Dashboard/>
                        <div className="my-social-info">
                            <div className="get-center-main">
                                <a className="main-line-social" title="">My
                                    Social</a>
                                <div className="get-hiden-image">
                                    <a onClick={useSlite} className="down-arrow">↓</a>
                                    <img onClick={handlerDarkClick} src={Engine} alt={"noo"} height={30}
                                         className="image-engine"
                                         id="get-click-engine"></img>
                                    <img onClick={handlerLightClick} src={Loon} alt={"noo"} height={30}
                                         className="image-engine"
                                         id="get-click-loon"></img>
                                </div>
                            </div>
                                <div className="line"/>
                            <div>
                                <div className="box-grid-social-card">
                                    <div className="skill-container-social">
                                        <div onClick={handlerClickSteam} className="container-social">
                                            <div className="steam-logo">
                                                <img src={StemLogo} alt={"noo"} width={33}/>
                                            </div>
                                            <div className="social-navbar">
                                                <div className="first-container">My Steam</div>
                                                <div className="second-container">The best gaming platform</div>
                                            </div>
                                        </div>
                                        <div className="container-social">
                                            <img src={OpenAI} alt={"noo"} width={33}/>
                                            <div className="social-navbar">
                                                <div className="first-container-ID">Social Network ID</div>
                                                <div className="second-container-ID">Created a social card interface</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <GridContent/>
                    </div>
                </div>
                <div id="box" className="box"/>
            </div>
        </body>
    );
};


