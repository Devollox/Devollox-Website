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



    const WrapperContent = styled.div`
      margin-top: 4rem;
      display: flex;
      justify-content: center;
    `
    const WrapperText = styled.a`
      display: flex;
      justify-content: center;
      font-size: .80rem;
      padding-top: 1rem;
      color: rgb(var(--colorfg));
      font-family: "Roboto";
      text-align: center;
      margin-top: 2rem;
      border-style: solid;
      border-width: 1px 0px 0px 0px;
      border-color: rgb(var(--tw-border-color-opacity));;
    `
    return (
        <WrapperContent>
            <WrapperText>
                <a>This site was developed by Devollox and is getting regular updates</a>
            </WrapperText>
        </WrapperContent>
    )
}