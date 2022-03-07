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
    Bold,
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
            <DetailsItem>Created <Bold>React Typescript</Bold> webapp from scratch for a digital pilates platform, and integrated with <Bold>C#</Bold> API</DetailsItem>,
            <DetailsItem>Created <Bold>NextJS Typescript</Bold> webapp MVP from scratch for a non-profit food organisation, and integrated with Strapi <Bold>Content Management System (CMS)</Bold></DetailsItem>,
        ],
    },
    {
        title: "Software Developer Intern | Pocketful",
        subtitle: "Aug 2020 — Feb 2021 (7 months)",
        details: [
            <DetailsItem>Overhauled <Bold>React Native</Bold> user interface using newly created components written in <Bold>Typescript</Bold></DetailsItem>,
            <DetailsItem>Liaised with and integrated external company in <Bold>C#</Bold> & <Bold>React Native</Bold> proof-of-concept to reward users with digital vouchers</DetailsItem>,
        ],
    },
    {
        title: "Software Engineer Intern | ASB Bank",
        subtitle: "Nov 2019 — Feb 2020 (4 months)",
        details: [
            <DetailsItem>Designed and created <Bold>React</Bold> webapp and <Bold>C#</Bold> Web API to store, retrieve, and display international payment updates</DetailsItem>,
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
            <DetailsItem>Created a responsive, mobile-first webapp of Cards Against Humanity for a university project, earning a <Bold>100% mark</Bold></DetailsItem>,
            <DetailsItem>Integrated <Bold>React</Bold> frontend system with <Bold>SocketJS</Bold> & <Bold>ExpressJS</Bold> backend systems written in <Bold>Typescript</Bold></DetailsItem>,
        ],
    },
    {
        title: "Sloshed",
        // |  Responsible Bar Searcher
        // slosh.lol | GitHub: Sloshed
        subtitle: "Aug 2020",
        details: [
            <DetailsItem>Led backend development on HTML/CSS & Javascript webapp to display nearby bars and liquor stores using <Bold>Google Places & Geolocation APIs</Bold></DetailsItem>,
            <DetailsItem><Bold>Won Best Design</Bold> at Summer of Tech's 2020 Create Camp Hackathon</DetailsItem>,
        ],
    },
    {
        title: "Investments Tracker",
        // GitHub: Investments-Tracker
        subtitle: "Ongoing",
        details: [
            <DetailsItem>Created <Bold>ExpressJS</Bold> API written in <Bold>Typescript</Bold> to automatically retrieve and collate personal investments using <Bold>web scraping</Bold> & external APIs</DetailsItem>,
            <DetailsItem>Future plans to automatically call API periodically, store results in a <Bold>MongoDB</Bold> database, and display helpful statistics in a <Bold>React</Bold> webapp</DetailsItem>,
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
                                    <div key={index}>
                                        {detail}
                                    </div>
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
                                    <div key={index}>
                                        {detail}
                                    </div>
                                ))}
                            </Details>
                        </Entry>
                    ))}

                    <Section>Ask me about...</Section>
                    <Spacer height={0.75} />

                    {skills.map(skill => (
                        <div key={skill.title}>
                            <Text><Bold>{skill.title}</Bold>: {skill.subtitle}</Text>
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
