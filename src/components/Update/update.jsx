import react from 'react'
import styled from "styled-components";
import axios from "axios";
import './index.css'

export default function Update() {

    Promise.all([axios.get("https://api.github.com/repos/Devollox/Devollox-Website/commits")])
        .then(function (result) {
            let update = document.getElementById('update_info')

            for (let a = 0; a < result[0].data.length; a++) {
                let date = result[0].data[a].commit.author.date, year = new Date();

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
                const dateMonths = {
                    1: 'Jan',
                    2: 'Feb',
                    3: 'Mar',
                    4: 'Apr',
                    5: 'May',
                    6: 'Jun',
                    7: 'Jul',
                    8: 'Aug',
                    9: 'Sep',
                    10: 'Oct',
                    11: 'Nov',
                    12: 'Dec'
                }

                update.insertAdjacentHTML('beforebegin', `
                <div class="update_information">
                    <div style="margin-bottom: 20px" class="wrapper_update_date">
                        <div class="line_text">${dateMonths[getDate(date)[0]]}&nbsp;&nbsp;${getDate(date)[1]}, ${year.getFullYear()}</div>
                        <a style="color: var(--colorfg);" href="${result[0].data[a].html_url}">
                         <div>${result[0].data[a].commit.message}</div>
                        </a>
                    </div>
                </div>
                `)
            }

        })


    return (
        <div>
            <div className="intro_title">Update</div>
            <div id='update_info'>

            </div>
        </div>
    )
};