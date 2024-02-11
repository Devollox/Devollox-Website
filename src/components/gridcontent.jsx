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

import styled from "styled-components";


export default function Gridcontent() {

    const TitleGrid = styled.a`
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        font-family: poppins, sans-serif;
        font-size: 20px;
        padding-bottom: 5px;
        border-style: solid;
        border-width: 0px 0px 1px 0px;
        border-color: rgb(var(--tw-border-color-opacity));;
    `

    const GridContainer = styled.div`
        margin-top: 1.5rem;
    `

    const GridContainerSkills = styled.div`
        display: grid;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        grid-template-columns: var(--grid-template);
    `


    const Container = styled.div`
        opacity: 100%;
        font-family: poppins, sans-serif;
        width: 100%;
        display: flex;
        padding: 0.5rem;
        align-items: center;
        border-radius: 0.375rem;
        height: fit-content;
        font-size: 0.75rem;
        line-height: 1rem;
        background-color: rgb(var(--color-card));
        color: rgb(var(--color-card-skill));
        -webkit-box-shadow: var(--tw-shadow-6);
        -moz-box-shadow: var(--tw-shadow-6);
        box-shadow: var(--tw-shadow-6);

        &:hover {
            scale: 105%;
            transition: 200ms;
            -webkit-box-shadow: var(--tw-shadow-7);
            -moz-box-shadow: var(--tw-shadow-7);
            box-shadow: var(--tw-shadow-7);
        }

        &:active {
            scale: 90%;
        }

    `

    const Grid_Content = styled.div`
    `

    function WrapperContainer(props) {
        return (<Container className={props.class}>
            <img src={props.src} alt={"noo"} width={15}/>
            <div style={{marginLeft: "0.3rem"}}>{props.name}</div>
        </Container>)
    }


    return (<Grid_Content>
        <TitleGrid>
            <a className="grid_text" title="and tools that I use or have ever learned">My Skill</a>
        </TitleGrid>
        <GridContainer>
            <GridContainerSkills>
                <WrapperContainer src={ReactLogo} name="React"/>
                <WrapperContainer src={JSLogo} name="JavaScript"/>
                <WrapperContainer src={GitLogo} name="Git"/>
                <WrapperContainer src={GitHubLogo} name="GitHub"/>
                <WrapperContainer src={NodeLogo} name="Node"/>
                <WrapperContainer src={TailwindLogo} name="Tailwind"/>
                <WrapperContainer src={CLogo} name="С"/>
                <WrapperContainer src={TSLogo} name="TypeScript"/>
                <WrapperContainer src={NuxtLogo} name="Nuxt" class="box_end"/>
            </GridContainerSkills>
        </GridContainer>
    </Grid_Content>)
}