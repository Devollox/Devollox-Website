"use client"
import '../style/content.css'

import '../style/navbar.css'
import '../style/global.css'
import '../style/grid.css'
import '../style/modal.css'
import '@/style/theme/system.css'
import Engine from '../image/public_html/engine.png'
import Loon from '../image/public_html/2408610.png'
import React from "react";
// @ts-ignore
import {useTheme} from "src/hook/use-theme";
import BackGround from "../image/public_html/bg.jpg";
import StemLogo from "src/image/steam.png";
import OpenAI from "src/image/openai.png";
import useSlite from "../hook/sliteContent";
import handlerClickIsToogle from '../hook/handlerClickIsToogle'
// @ts-ignore
import {useModalState} from "src/hook/useModalState";
import Modal from "./Modal";
import GridContent from "./GridContent";
import Dashboard from "./Dashboard";
import Image from "next/image";
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
        let hideContent : any = document.getElementById('hide-content')
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
                    <Image onClick={handlerDarkClick} src={Engine} alt={"noo"} height={30} className="image-engine"
                         id="get-click-engine"></Image>
                    <Image onClick={handlerLightClick} src={Loon} alt={"noo"} height={30} className="image-engine"
                         id="get-click-loon"></Image>
                </div>
            </nav>
                <Modal open={isOpen} handleClick={handleClick}/>
            <div id="hide-content">
                <div className="content-background">
                    <Image src={BackGround} alt={"noo"} id="get-image-background"/>
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
                                    <Image onClick={handlerDarkClick} src={Engine} alt={"noo"} height={30}
                                         className="image-engine"
                                         id="get-click-engine"></Image>
                                    <Image onClick={handlerLightClick} src={Loon} alt={"noo"} height={30}
                                         className="image-engine"
                                         id="get-click-loon"></Image>
                                </div>
                            </div>
                                <div className="line"/>
                            <div>
                                <div className="box-grid-social-card">
                                    <div className="skill-container-social">
                                        <div onClick={handlerClickSteam} className="container-social">
                                            <div className="steam-logo">
                                                <Image src={StemLogo} alt={"noo"} width={33}/>
                                            </div>
                                            <div className="social-navbar">
                                                <div className="first-container">My Steam</div>
                                                <div className="second-container">The best gaming platform</div>
                                            </div>
                                        </div>
                                        <div className="container-social">
                                            <Image src={OpenAI} alt={"noo"} width={33}/>
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


