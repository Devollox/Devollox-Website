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


export default function Footer() {

    const GridLine = styled.p`
      opacity: 80%;
      background-color: rgb(var(--tw-border-color-opacity));
      height: 1px;
      width: 100%;
      margin-top: 2rem;
    `

    const WrapperContent = styled.div`
        margin-bottom: 5rem;
        
    `
    const WrapperText = styled.a`
      display: flex;
      justify-content: center;
      font-size: .80rem;
      padding-top: 1rem;
      color: rgb(var(--colorfg));
      font-family: "Roboto";
    `
    return (
        <WrapperContent>
            <GridLine/>
            <WrapperText>
                <a>This site supports the developer</a>
            </WrapperText>
        </WrapperContent>
    )
}