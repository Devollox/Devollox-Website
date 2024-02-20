import Engine from '../../public/engine.png'
import Moon from '../../public/2408610.png'
import React, {useEffect} from "react";
import {useTheme} from "../../hook/use-theme";
import BackGround from "../../public/bg.jpg";
import StemLogo from "../../image/steam.png";
import OpenAI from "../../image/openai.png";
import useSlite from "../../hook/sliteContent";
import handlerClickIsToogle from '../../hook/handlerClickIsToogle'
import {useModalState} from "../../hook/useModalState";
import Modal from "./modal";
import Gridcontent from "./gridcontent";
import Dashboard from "./dashboard";
import styled from "styled-components";
import Footer from "./footer";
import axios from "axios";
import '../../styles/content.css'
import '../../styles/navbar.css'
import '../../styles/global.css'
import '../../styles/modal.css'
import '../../styles/theme/system.css'
import '../news/index.css'
export default function Header() {

    const {isOpen, onToggle} = useModalState();
    const handleClick = () => {
        onToggle();

    };

    const {theme, setTheme} = useTheme()

    const handlerTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")

    }

    function halderTheme() {
        let hideContent = document.getElementById('hiding_content')
        hideContent.hidden = hideContent.hidden === false;
    }
    function sleep(millis) {
        let date = new Date();
        let curDate = null;
        do {
            curDate = new Date();
        }
        while (curDate - date < millis);
    }
    const handleClickOn = () => {
        halderTheme()
        handleClick()
    }

    const GridConteniener = styled.div`
        margin: var(--scale-top) var(--margin-right) 4rem var(--margin-left);
        justify-content: center;
        scale: var(--scale);
    `

    const IntroTitle = styled.div`

    `
    const Content = styled.div`

    `
    const BarContainer = styled.div`
        rotate: 180deg;
        scale: 80%;
        cursor: pointer;
        position: absolute;
        margin-left: 87%;
        margin-top: 23px;
        display: var(--tw-navbar-modal-no-hide);
    `
    const SocialInfo = styled.div`

    `
    const NavbarSocial = styled.div`
        margin-left: 2px;
    `
    const CenterMain = styled.div`
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        padding-bottom: 5px;
        border-style: solid;
        border-width: 0px 0px 1px 0px;
        border-color: rgb(var(--tw-border-color-opacity));;
    `
    const GridContainerSocial = styled.a`
        font-family: poppins, sans-serif;
        font-size: 20px;
    `
    const Background = styled.div`
        padding-top: 80px;
    `

    Promise.all([axios.get(`https://raw.githubusercontent.com/Devollox/Devollox-Website/main/config.json`), axios.get(`https://raw.githubusercontent.com/Devollox/Devollox-Website/main/config.json`)])
        .then(function (result) {
            let JSON = result[0].data, wrapperSocial = document.getElementById('wrapper_social_content')
            setTimeout(() => {
                wrapperSocial.innerHTML = `
                    <a href="${JSON.html_url}">
                        <div class="container_social">
                            <img src='${JSON.logo}' alt={"noo"} width="33"/>
                            <div style="margin-left: 2px">
                                    <div class="first_container_animated">${JSON.name}</div>
                                <div class="second_container">${JSON.description}</div>
                            </div>
                        </div>
                    </a>
                    `
            }, 1000)
        })

    const LoadingElement = () => {
        return (
            <div className="container_social skeletron_loading">
                <div className="logo_details details">
                        <span style={{width: '40px', height: '40px', marginRight: '10px'}}
                              className="logo_name name"></span>
                </div>
                <div className="details">
                    <span className="name"></span>
                    <span className="about"></span>
                </div>
                <div style={{marginLeft: '2px'}}>
                    <div className="first_container_animated"></div>
                    <div className="second_container"></div>
                </div>
            </div>
        )
    }

    return (
        <body id='body_switch_theme'>
            <nav id="navbar_content">
                <p id="navbar_title" title=":D">Devollox</p>
                <div id="ml_left"/>
                <IntroTitle>
                    <a href="https://github.com/Devollox" id="btn_github">GitHub</a>
                </IntroTitle>
                <BarContainer onClick={handleClickOn} id="get_click_navbar">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </BarContainer>
                <div className="halder_hide_content">
                    <img onClick={handlerTheme} src={Engine} alt={"noo"} height={30} className="image_engine"
                         id="get_click_engine"></img>
                    <img onClick={handlerTheme} src={Moon} alt={"noo"} height={30} className="image_engine"
                         id="get_click_moon"></img>
                </div>
            </nav>
            <Modal open={isOpen} handleClick={handleClick}/>
            <div id="hiding_content">
                <Background>
                    <img src={BackGround} alt={"noo"} id="background_image"/>
                </Background>
                <GridConteniener>
                    <Dashboard/>
                    <SocialInfo>
                        <CenterMain>
                            <GridContainerSocial title="">
                                My
                                Social
                            </GridContainerSocial>
                            <div className="hiding_image">
                                <a onClick={useSlite} className="down_arrow">↓</a>
                                <img onClick={handlerTheme} src={Engine} alt={"noo"} height={30}
                                     className="image_engine"
                                     id="get_click_engine"></img>
                                <img onClick={handlerTheme} src={Moon} alt={"noo"} height={30}
                                     className="image_engine"
                                     id="get_click_moon"></img>
                            </div>
                        </CenterMain>
                        <Content style={{marginTop: "1.5rem"}}>
                            <a href="https://steamcommunity.com/id/Cookiemp4/" className="container_social">
                                <div className="steam_logo">
                                    <img src={StemLogo} alt={"noo"} width={33}/>
                                </div>
                                <NavbarSocial>
                                    <div className="first_container">My Steam</div>
                                    <div className="second_container">The best gaming platform</div>
                                </NavbarSocial>
                            </a>
                            <a href='/news'>
                                <div className="container_social">
                                    <img src={OpenAI} alt={"noo"} width={33}/>
                                    <NavbarSocial>
                                        <div className="first_container_animated">News</div>
                                        <div className="second_container">News and site updates.</div>
                                    </NavbarSocial>
                                </div>
                            </a>
                            <div id="wrapper_social_content">
                                <LoadingElement/>
                            </div>
                        </Content>
                    </SocialInfo>
                    <Gridcontent/>
                    <Footer/>
                </GridConteniener>
                <div id="box" className="box"/>
            </div>
        </body>
    );
};


