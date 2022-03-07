import React from "react";
import styled from "styled-components";

const Paper = styled.div`
    // A4 size paper for 96 PPI
    width: 794px;
    height: 1123px;
`

const Title = styled.h1`
    margin: 0;
    font-weight: bold;
`
const SubTitle = styled.h1`
    margin: 0;
    color: #686868;
`
const Section = styled.h2`
    margin: 0;
    color: #686868;
`
const Heading = styled.h3`
    margin: 0;
    font-weight: bold;
`
const SubHeading = styled.h4`
    margin: 0;
    color: #686868;
`
const Details = styled.ul`
    margin: 0;
`
const DetailsItem = styled.li`
    margin: 0;
    color: #4B4B4B;
`
const Text = styled.p`
    margin: 0;
`


const HeaderSection = styled.div`
    height: 10%;
    width: 100%;
    background: #59BCDB80;
`

const Content = styled.div`
    height: 90%;
    display: flex;
`

const LeftSection = styled.div`
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;
`

const RightSection = styled.div`
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    padding: 2rem;

    background: #B3E3F180;
`

const Spacer = styled.div`
    height: ${(props: { height: number }) => props.height}rem;
`

const Cv = () => {
    return (
        <Paper>
            <HeaderSection>
                <Title>Rawiri Hohepa</Title>
                <SubTitle>Final Year Software Engineering Student</SubTitle>
            </HeaderSection>

            <Content>
                <LeftSection>
                    <Section>Experience</Section>
                    <Spacer height={0.75} />

                    <Heading>Full Stack Developer | Maverick</Heading>
                    <SubHeading>Nov 2021 — Feb 2022 (4 months)</SubHeading>
                    <Details>
                        <DetailsItem>Created React Typescript webapp from scratch for a digital pilates platform, and integrated with C# API</DetailsItem>
                        <DetailsItem>Created NextJS Typescript webapp MVP from scratch for a non-profit food organisation, and integrated with Strapi Content Management System (CMS)</DetailsItem>
                    </Details>
                    <Spacer height={0.5} />

                    <Heading>Software Developer Intern | Pocketful</Heading>
                    <SubHeading>Aug 2020 — Feb 2021 (7 months)</SubHeading>
                    <Details>
                        <DetailsItem>Overhauled React Native user interface using newly created components written in Typescript</DetailsItem>
                        <DetailsItem>Liaised with and integrated external company in C# & React Native proof-of-concept to reward users with digital vouchers</DetailsItem>
                    </Details>
                    <Spacer height={0.5} />

                    <Heading>Software Engineer Intern | ASB Bank</Heading>
                    <SubHeading>Nov 2019 — Feb 2020 (4 months)</SubHeading>
                    <Details>
                        <DetailsItem>Designed and created React webapp and C# Web API to store, retrieve, and display international payment updates</DetailsItem>
                    </Details>
                    <Spacer height={0.5} />

                    <Section>Projects</Section>
                    <Spacer height={0.75} />

                    <Heading>Nerds Oppose Society</Heading>
                    {/* |  Online Cards Against Humanity */}
                    {/* nerdsopposesociety.xyz | GitHub: nerds-oppose-society */}
                    <SubHeading>May 2021</SubHeading>
                    <Details>
                        <DetailsItem>Created a responsive, mobile-first webapp of Cards Against Humanity for a university project, earning a 100% mark</DetailsItem>
                        <DetailsItem>Integrated React frontend system with SocketJS & ExpressJS backend systems written in Typescript</DetailsItem>
                    </Details>
                    <Spacer height={0.5} />

                    <Heading>Sloshed</Heading>
                    {/* |  Responsible Bar Searcher */}
                    {/* slosh.lol | GitHub: Sloshed */}
                    <SubHeading>Aug 2020</SubHeading>
                    <Details>
                        <DetailsItem>Led backend development on HTML/CSS & Javascript webapp to display nearby bars and liquor stores using Google Places & Geolocation APIs</DetailsItem>
                        <DetailsItem>Won Best Design at Summer of Tech’s 2020 Create Camp Hackathon</DetailsItem>
                    </Details>
                    <Spacer height={0.5} />

                    <Heading>Investments Tracker</Heading>
                    {/* |  Responsible Bar Searcher */}
                    {/* GitHub: Investments-Tracker */}
                    <SubHeading>Ongoing</SubHeading>
                    <Details>
                        <DetailsItem>Created ExpressJS API written in Typescript to automatically retrieve and collate personal investments using web scraping & external APIs</DetailsItem>
                        <DetailsItem>Future plans to automatically call API periodically, store results in a MongoDB database, and display helpful statistics in a React webapp</DetailsItem>
                    </Details>
                    <Spacer height={0.5} />

                    <Section>Ask me about...</Section>
                    <Spacer height={0.75} />

                    <Text>Frontend: React, React Native, NextJS, TypeScript, JavaScript, HTML/CSS</Text>
                    <Text>Backend: ExpressJS, NodeJS, MongoDB, C# Entity Framework, Java</Text>
                    <Text>Design: Figma</Text>
                    <Text>Version control: Git, GitHub</Text>
                    <Text>Languages: TypeScript, JavaScript, Java, C#, SQL</Text>
                    <Text>Interests: Tabletop roleplaying, Video games, Finances</Text>
                </LeftSection>


                <RightSection></RightSection>
            </Content>
        </Paper>
    )
}

export default Cv;
