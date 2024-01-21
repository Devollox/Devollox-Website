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
    const Title = styled.a`
      background-image: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      transition-duration: 0.15s;
      transition-timing-function: linear;
      line-height: 1;
      font-family: poppins, sans-serif;
      margin-top: 2rem;
      text-align: center;
      font-weight: 800;
      font-size: var(--font-size);
    `
    const IntroAlign = styled.div`
      justify-content: center;
      display: flex;
    `
    const Intro = styled.h1`
      font-family: poppins, sans-serif;
      text-align: center;
      margin-top: 1rem;
      font-size: var(--font-size-name);
      color: rgb(var(--color-card));
      font-weight: 400;
    `
    return (
        <IntroGrid>
            <IntroTitle>
                <Title>Welcome to my dashboard</Title>
            </IntroTitle>
            <IntroAlign>
                <Intro>Hello, my name is Devollox, and I am a programmer who values
                    creativity
                    and
                    optimization.
                </Intro>
            </IntroAlign>
        </IntroGrid>
    )
}