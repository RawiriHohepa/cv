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

const experience = [
    {
        title: "Full Stack Developer | Maverick",
        subtitle: "Nov 2021 — Feb 2022 (4 months)",
        details: [
            "Created React Typescript webapp from scratch for a digital pilates platform, and integrated with C# API",
            "Created NextJS Typescript webapp MVP from scratch for a non-profit food organisation, and integrated with Strapi Content Management System (CMS)",
        ],
    },
    {
        title: "Software Developer Intern | Pocketful",
        subtitle: "Aug 2020 — Feb 2021 (7 months)",
        details: [
            "Overhauled React Native user interface using newly created components written in Typescript",
            "Liaised with and integrated external company in C# & React Native proof-of-concept to reward users with digital vouchers",
        ],
    },
    {
        title: "Software Engineer Intern | ASB Bank",
        subtitle: "Nov 2019 — Feb 2020 (4 months)",
        details: [
            "Designed and created React webapp and C# Web API to store, retrieve, and display international payment updates",
        ],
    },
];

const projects = [
    {
        title: "Nerds Oppose Society",
        // |  Online Cards Against Humanity
        // nerdsopposesociety.xyz | GitHub: nerds-oppose-society
        subtitle: "May 2021",
        details: [
            "Created a responsive, mobile-first webapp of Cards Against Humanity for a university project, earning a 100% mark",
            "Integrated React frontend system with SocketJS & ExpressJS backend systems written in Typescript",
        ],
    },
    {
        title: "Sloshed",
        // |  Responsible Bar Searcher
        // slosh.lol | GitHub: Sloshed
        subtitle: "Aug 2020",
        details: [
            "Led backend development on HTML/CSS & Javascript webapp to display nearby bars and liquor stores using Google Places & Geolocation APIs",
            "Won Best Design at Summer of Tech’s 2020 Create Camp Hackathon",
        ],
    },
    {
        title: "Investments Tracker",
        // GitHub: Investments-Tracker
        subtitle: "Ongoing",
        details: [
            "Created ExpressJS API written in Typescript to automatically retrieve and collate personal investments using web scraping & external APIs",
            "Future plans to automatically call API periodically, store results in a MongoDB database, and display helpful statistics in a React webapp",
        ],
    },
];

const skills = [
    {
        title: "Frontend",
        subtitle: "React, React Native, NextJS, TypeScript, JavaScript, HTML/CSS",
    },
    {
        title: "Backend",
        subtitle: "ExpressJS, NodeJS, MongoDB, C# Entity Framework, Java",
    },
    {
        title: "Design",
        subtitle: "Figma",
    },
    {
        title: "Version control",
        subtitle: "Git, GitHub",
    },
    {
        title: "Languages",
        subtitle: "TypeScript, JavaScript, Java, C#, SQL",
    },
    {
        title: "Interests",
        subtitle: "Tabletop roleplaying, Video games, Finances",
    },
];

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

                    {experience.map(entry => (
                        <Entry
                            key={entry.title}
                            title={entry.title}
                            subtitle={entry.subtitle}
                        >
                            <Details>
                                {entry.details.map((detail, index) => (
                                    <DetailsItem key={index}>{detail}</DetailsItem>
                                ))}
                            </Details>
                        </Entry>
                    ))}

                    <Section>Projects</Section>
                    <Spacer height={0.75} />

                    {projects.map(entry => (
                        <Entry
                            key={entry.title}
                            title={entry.title}
                            subtitle={entry.subtitle}
                        >
                            <Details>
                                {entry.details.map((detail, index) => (
                                    <DetailsItem key={index}>{detail}</DetailsItem>
                                ))}
                            </Details>
                        </Entry>
                    ))}

                    <Section>Ask me about...</Section>
                    <Spacer height={0.75} />

                    {skills.map(skill => (
                        <div key={skill.title}>
                            <Text>{skill.title}: {skill.subtitle}</Text>
                            <Spacer height={0.25} />
                        </div>
                    ))}
                </LeftSection>


                <RightSection></RightSection>
            </Content>
        </Paper>
    );
}

export default Cv;
