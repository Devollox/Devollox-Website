import React from "react";
import styled from "styled-components";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter} from 'react-router-dom';
import Update from "./Update/update";
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

    Promise.all([axios.get("https://api.github.com/repos/Devollox/Devollox/commits")])
        .then(function (result ){
            let date  = result[0].data[0].commit.author.date, time = document.getElementById('time'), placeHolder = document.getElementById('place-holder'), year = new Date();
            let optionsTime = {
                optionsDay: {
                    day: 'numeric',
                },
                optionsMonth: {
                    month: 'numeric'
                }
            }
            let getDate = function (str) {
                let date = new Date(str);
                return [date.toLocaleString('ru', optionsTime.optionsMonth), date.toLocaleString('ru', optionsTime.optionsDay)]
            }

            setTimeout(() => {
                placeHolder.style.display = 'none'
                time.innerHTML = `
                <a class="date_container_time">
                    <a title="Month/Day/Year" style="color: var(--colorfg)" class="hiding_text date_footer">
                        ${getDate(date)[0]}/
                        ${getDate(date)[1]}/
                        ${year.getFullYear()}
                    </a>
                 </a>
            `
            }, 2000)
        })

    return (
        <WrapperContent>
            <WrapperText style={{display: "block"}}>
                <a>This site was developed by Devollox and is getting regular updates</a>
                <div className='time_update'>
                    <div>Latest update:
                        <a href='/update' style={{color: "var(--colorfg)"}}>
                             <a className="post">
                                <div style={{marginBottom: '10px'}} id="time" className='place-font'>
                                 </div>
                                    <div id='place-holder' className="place-holder">
                                 </div>
                             </a>
                        </a>
                    </div>
                </div>
            </WrapperText>
        </WrapperContent>
    )
}