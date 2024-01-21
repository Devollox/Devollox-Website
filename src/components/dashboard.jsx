import React from "react";
import styled from "styled-components";


export default function Dashboard() {

    const IntroGrid = styled.div`

    `

    const IntroTitle = styled.div`
      font-weight: 600;
      font-size: 1.25rem;
      margin-top: 1rem;
      text-align: center;
      font-family: poppins, sans-serif;
      transition-duration: 0.15s;
      color: rgb(var(--color-card));
    `

    const IntroAlign = styled.div`
      justify-content: center;
      display: flex;
    `

    return (
        <IntroGrid>
            <IntroTitle>
                <a className="gradient_text">Welcome to my dashboard</a>
            </IntroTitle>
            <IntroAlign>
                <h1 className="intro_subtitle">Hello, my name is Devollox, and I am a programmer who values
                    creativity
                    and
                    optimization.
                </h1>
            </IntroAlign>
        </IntroGrid>
    )
}