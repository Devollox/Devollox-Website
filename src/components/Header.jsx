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
import styled from "styled-components";

const GridLine = styled.p`
  opacity: 80%;
  background-color: rgb(var(--tw-border-color-opacity));
  height: 1px;
  width: 100%;
`

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
        let hideContent = document.getElementById('hiding_content')
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


    const GridConteniener = styled.div`
      margin-left: var(--margin-left);
      margin-right: var(--margin-right);
      justify-content: center;
      margin-top: var(--scale-top);
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
    `
    const GridContainerSocial = styled.a`
      font-family: poppins, sans-serif;
      font-size: 20px;
    `
    const Background = styled.div`
      padding-top: 80px;
    `
    return (
        <body id='body_switch_theme'>
        <nav id="navbar_content">
            <p id="navbar_title" title=":D">Devollo</p>
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
                <img onClick={handlerDarkClick} src={Engine} alt={"noo"} height={30} className="image_engine"
                     id="get_click_engine"></img>
                <img onClick={handlerLightClick} src={Loon} alt={"noo"} height={30} className="image_engine"
                     id="get_click_loon"></img>
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
                            <img onClick={handlerDarkClick} src={Engine} alt={"noo"} height={30}
                                 className="image_engine"
                                 id="get_click_engine"></img>
                            <img onClick={handlerLightClick} src={Loon} alt={"noo"} height={30}
                                 className="image_engine"
                                 id="get_click_loon"></img>
                        </div>
                    </CenterMain>
                    <GridLine/>
                    <Content style={{marginTop: "1.5rem"}}>
                        <div onClick={handlerClickSteam} className="container_social">
                            <div className="steam_logo">
                                <img src={StemLogo} alt={"noo"} width={33}/>
                            </div>
                            <NavbarSocial>
                                <div className="first_container">My Steam</div>
                                <div className="second_container">The best gaming platform</div>
                            </NavbarSocial>
                        </div>
                        <div className="container_social">
                            <img src={OpenAI} alt={"noo"} width={33}/>
                            <NavbarSocial>
                                <div className="first_container_animated">Social Network ID</div>
                                <div className="second_container">Created a social card interface</div>
                            </NavbarSocial>
                        </div>
                    </Content>
                </SocialInfo>
                <GridContent/>
            </GridConteniener>
            <div id="box" className="box"/>
        </div>
        </body>
    );
};


