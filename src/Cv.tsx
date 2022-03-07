import React from "react";
import styled from "styled-components";
import Entry from "./components/Entry";
import Spacer from "./components/Spacer";
import {
    Title,
    SubTitle,
    Section,
    // Heading,
    // SubHeading,
    Details,
    DetailsItem,
    Text,
} from "./components/text";

const Paper = styled.div`
    // A4 size paper for 96 PPI
    width: 794px;
    height: 1123px;
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

                    <Entry
                        title="Full Stack Developer | Maverick"
                        subtitle="Nov 2021 — Feb 2022 (4 months)"
                    >
                        <Details>
                            <DetailsItem>Created React Typescript webapp from scratch for a digital pilates platform, and integrated with C# API</DetailsItem>
                            <DetailsItem>Created NextJS Typescript webapp MVP from scratch for a non-profit food organisation, and integrated with Strapi Content Management System (CMS)</DetailsItem>
                        </Details>
                    </Entry>
                    <Entry
                        title="Software Developer Intern | Pocketful"
                        subtitle="Aug 2020 — Feb 2021 (7 months)"
                    >
                        <Details>
                            <DetailsItem>Overhauled React Native user interface using newly created components written in Typescript</DetailsItem>
                            <DetailsItem>Liaised with and integrated external company in C# & React Native proof-of-concept to reward users with digital vouchers</DetailsItem>
                        </Details>
                    </Entry>
                    <Entry
                        title="Software Engineer Intern | ASB Bank"
                        subtitle="Nov 2019 — Feb 2020 (4 months)"
                    >
                        <Details>
                            <DetailsItem>Designed and created React webapp and C# Web API to store, retrieve, and display international payment updates</DetailsItem>
                        </Details>
                    </Entry>

                    <Section>Projects</Section>
                    <Spacer height={0.75} />

                    <Entry
                        title="Nerds Oppose Society"
                        // |  Online Cards Against Humanity
                        // nerdsopposesociety.xyz | GitHub: nerds-oppose-society
                        subtitle="May 2021"
                    >
                        <Details>
                            <DetailsItem>Created a responsive, mobile-first webapp of Cards Against Humanity for a university project, earning a 100% mark</DetailsItem>
                            <DetailsItem>Integrated React frontend system with SocketJS & ExpressJS backend systems written in Typescript</DetailsItem>
                        </Details>
                    </Entry>
                    <Entry
                        title="Sloshed"
                        // |  Responsible Bar Searcher
                        // slosh.lol | GitHub: Sloshed
                        subtitle="Aug 2020"
                    >
                        <Details>
                            <DetailsItem>Led backend development on HTML/CSS & Javascript webapp to display nearby bars and liquor stores using Google Places & Geolocation APIs</DetailsItem>
                            <DetailsItem>Won Best Design at Summer of Tech’s 2020 Create Camp Hackathon</DetailsItem>
                        </Details>
                    </Entry>
                    <Entry
                        title="Investments Tracker"
                        // GitHub: Investments-Tracker
                        subtitle="Ongoing"
                    >
                        <Details>
                            <DetailsItem>Created ExpressJS API written in Typescript to automatically retrieve and collate personal investments using web scraping & external APIs</DetailsItem>
                            <DetailsItem>Future plans to automatically call API periodically, store results in a MongoDB database, and display helpful statistics in a React webapp</DetailsItem>
                        </Details>
                    </Entry>

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
    );
}

export default Cv;
