import React from "react";
import styled from "styled-components";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
export default function Footer() {

    const WrapperContent = styled.div`
        margin-top: 0.5rem;
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
            <WrapperText style={{display: "block"}}>
                <a>This site was developed by Devollox and is getting regular updates</a>
            </WrapperText>
        </WrapperContent>
    )
}
