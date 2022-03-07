import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Entry from "./components/Entry";
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
    box-sizing: border-box;
    padding: 2rem;

    background: #59BCDB80;

    display: flex;
    justify-content: space-between;
`

const ContactsSection = styled.div`
    display: flex;
    flex-direction: column;
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
    & > :first-child {
        margin-top: 0;
    }
`

const RightSection = styled.div`
    width: 40%;
    height: 100%;
    box-sizing: border-box;
    padding: 1.5rem;
    & > :first-child {
        margin-top: 0;
    }

    background: #B3E3F180;
`

const ContactsItem = styled.a`
    color: #000000;
    text-align: right;
    margin-left: 0.5rem;
`

const contacts = [
    {
        icon: faGithub,
        name: "RawiriHohepa",
        link: "https://github.com/rawirihohepa",
    },
    {
        icon: faEnvelope,
        name: "rawirihohepa@gmail.com",
        link: "mailto:rawirihohepa@gmail.com",
    },
    {
        icon: faPhone,
        name: "028 407 9883",
        link: "tel:028 407 9883",
    },
    {
        icon: faLinkedin,
        name: "rawiri-hohepa",
        link: "https://www.linkedin.com/in/rawiri-hohepa/",
    },
];

const experience = [
    {
        title: "Full Stack Developer | Maverick",
        description: "Nov 2021 — Feb 2022 (4 months)",
        details: [
            <DetailsItem>Created <Bold>React Typescript</Bold> webapp from scratch for a digital pilates platform, and integrated with <Bold>C#</Bold> API</DetailsItem>,
            <DetailsItem>Created <Bold>NextJS Typescript</Bold> webapp MVP from scratch for a non-profit food organisation, and integrated with Strapi <Bold>Content Management System (CMS)</Bold></DetailsItem>,
        ],
    },
    {
        title: "Software Developer Intern | Pocketful",
        description: "Aug 2020 — Feb 2021 (7 months)",
        details: [
            <DetailsItem>Overhauled <Bold>React Native</Bold> user interface using newly created components written in <Bold>Typescript</Bold></DetailsItem>,
            <DetailsItem>Liaised with and integrated external company in <Bold>C#</Bold> & <Bold>React Native</Bold> proof-of-concept to reward users with digital vouchers</DetailsItem>,
        ],
    },
    {
        title: "Software Engineer Intern | ASB Bank",
        description: "Nov 2019 — Feb 2020 (4 months)",
        details: [
            <DetailsItem>Designed and created <Bold>React</Bold> webapp and <Bold>C#</Bold> Web API to store, retrieve, and display international payment updates</DetailsItem>,
        ],
    },
];

const projects = [
    {
        title: "Online Cards Against Humanity",
        subtitle: "nerdsopposesociety.xyz | GitHub: nerds-oppose-society",
        description: "May 2021",
        details: [
            <DetailsItem>Created a responsive, mobile-first webapp of Cards Against Humanity for a university project, earning a <Bold>100% mark</Bold></DetailsItem>,
            <DetailsItem>Integrated <Bold>React</Bold> frontend system with <Bold>SocketJS</Bold> & <Bold>ExpressJS</Bold> backend systems written in <Bold>Typescript</Bold></DetailsItem>,
        ],
    },
    {
        title: "Responsible Bar Searcher",
        subtitle: "slosh.lol | GitHub: Sloshed",
        description: "Aug 2020",
        details: [
            <DetailsItem>Led backend development on HTML/CSS & Javascript webapp to display nearby bars and liquor stores using <Bold>Google Places & Geolocation APIs</Bold></DetailsItem>,
            <DetailsItem><Bold>Won Best Design</Bold> at Summer of Tech's 2020 Create Camp Hackathon</DetailsItem>,
        ],
    },
    {
        title: "Investments Tracker",
        subtitle: "GitHub: Investments-Tracker",
        description: "Ongoing",
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

const leadership = [
    {
        title: "Secretary",
        subtitle: "Software Engineering Student’s Association (SESA) | 2022",
        details: [
            "Overhaul meeting and task tracking system to comply with changing university policy",
            "Uphold and enforce SESA constitution",
            "Organise and record executive commitee meetings",
        ],
    },
    {
        title: "Part IV Representative",
        subtitle: "Software Engineering Student’s Association (SESA) | 2021",
        details: [
            "Organised and MC’d SESA’s inaugural hackathon, with various industry professionals and >100 students",
            "Represented SESA at student wellbeing panel for all engineering student associations",
            "Organised and ran various industry & social events for software engineering students",
        ],
    },
    {
        title: "Frontend Team Lead",
        subtitle: "20-Person University Project | Apr 2021",
        details: [
            "Managed frontend team in project to create a digital bullet journal webapp, earning an A grade",
            "Organised and led team meetings, liased with design team, assigned tasks to team members",
        ],
    },
    {
        title: "Peer Mentor",
        subtitle: "Software Engineering Student’s Association (SESA) | 2021",
        details: [
            "Mentored a Part II (2nd year) software engineering student through SESA’s mentoring program",
            "Provided advice & guidance regarding university courses, internships, recruitment, study/life balance, etc.",
        ],
    },
    {
        title: "Tutor",
        subtitle: "UoA Part I & II Assistance Centres | 2019, 2020",
        details: [
            "Supported & tutored Part I & II (1st & 2nd year) engineering students",
            "Facilitated understanding of lecture notes and preparation for tests, assignments, and exams",
        ],
    },
];

const Cv = () => {
    return (
        <Paper>
            <HeaderSection>
                <div>
                    <Title>Rawiri Hohepa</Title>
                    <SubTitle>Final Year Software Engineering Student</SubTitle>
                </div>
                <ContactsSection>
                    {contacts.map(contact => (
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }} key={contact.name}>
                            <FontAwesomeIcon icon={contact.icon} />
                            <ContactsItem href={contact.link}>{contact.name}</ContactsItem>
                        </div>
                    ))}
                </ContactsSection>
            </HeaderSection>

            <Content>
                <LeftSection>
                    <Section>Experience</Section>

                    {experience.map(entry => (
                        <Entry
                            key={entry.title}
                            title={entry.title}
                            description={entry.description}
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

                    {projects.map(entry => (
                        <Entry
                            key={entry.title}
                            title={entry.title}
                            subtitle={entry.subtitle}
                            description={entry.description}
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

                    {skills.map(skill => (
                        <div key={skill.title}>
                            <Text><Bold>{skill.title}</Bold>: {skill.subtitle}</Text>
                        </div>
                    ))}
                </LeftSection>


                <RightSection>
                    <Section>Education</Section>

                    <Entry
                        title="University of Auckland | BE (Hons) & BA"
                        subtitle="Software Engineering, Psychology, Māori Studies"
                        description="Mar 2018 — Nov 2022"
                    >
                        <Text>GPA 8.6/9 (<Bold>A to A+</Bold> average)</Text>
                        <Text>Awards:</Text>
                        <div style={{ marginLeft: "1.5rem" }}>
                            <Text style={{ color: "#4B4B4B" }}>Dean’s Honours List | 2018, 2019, 2021</Text>
                            <Text style={{ color: "#4B4B4B" }}>Māori Academic Excellence Scholarship | 2017</Text>
                        </div>
                    </Entry>

                    <Section>Leadership & Community</Section>

                    {leadership.map(entry => (
                        <Entry
                            key={entry.title}
                            title={entry.title}
                            subtitle={entry.subtitle}
                            size="small"
                        >
                            <Details>
                                {entry.details.map((detail, index) => (
                                    <DetailsItem key={index} size="small">{detail}</DetailsItem>
                                ))}
                            </Details>
                        </Entry>
                    ))}

                    <Section>References</Section>

                    <Text>Available upon request</Text>
                </RightSection>
            </Content>
        </Paper>
    );
}

export default Cv;
