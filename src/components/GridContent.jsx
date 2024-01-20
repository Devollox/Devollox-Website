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

const TitleGrid = styled.a`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`
const GridLine = styled.p`
  opacity: 80%;
  background-color: rgb(var(--tw-border-color-opacity));
  height: 1px;
  width: 100%;
`

const GridContainer = styled.div`
  margin-bottom: 5rem;
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
`


const Grid_Content = styled.div`
  
`
export default function GridContent() {
    return (
        <Grid_Content>
            <TitleGrid>
                <a className="grid_text" title="and tools that I use or have ever learned">My Skill</a>
            </TitleGrid>
                <GridLine/>
            <GridContainer>
                <GridContainerSkills>
                    <Container>
                        <img src={ReactLogo} alt={"noo"} width={15}/>
                        <div className="container_name">React</div>
                    </Container>
                    <Container>
                        <img src={JSLogo} alt={"noo"} width={15}/>
                        <div className="container_name">JavaScript</div>
                    </Container>
                    <Container>
                        <img src={GitLogo} alt={"noo"} width={15}/>
                        <div className="container_name">Git</div>
                    </Container>
                    <Container>
                        <img src={GitHubLogo} alt={"noo"} width={15}/>
                        <div className="container_name">GitHub</div>
                    </Container>
                    <Container>
                        <img src={NodeLogo} alt={"noo"} width={15}/>
                        <div className="container_name">Node</div>
                    </Container>
                    <Container>
                        <img src={TailwindLogo} alt={"noo"} width={15}/>
                        <div className="container_name">Tailwind</div>
                    </Container>
                    <Container>
                        <img src={CLogo} alt={"noo"} width={15}/>
                        <div className="container_name">С</div>
                    </Container>
                    <Container>
                        <img src={TSLogo} alt={"noo"} width={15}/>
                        <div className="container_name">TypeScript</div>
                    </Container>
                    <Container className="box_end">
                        <img src={NuxtLogo} alt={"noo"} width={15}/>
                        <div className="container_name">Nuxt</div>
                    </Container>
                </GridContainerSkills>
            </GridContainer>
        </Grid_Content>
    )
}