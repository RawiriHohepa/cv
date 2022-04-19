import React from "react";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { DetailsItem, Text, Bold, SubHeading } from "./components/text";

export const contacts = [
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

export const experience = `# Experience

:::div
## Full Stack Developer | Maverick
####  Nov 2021 — Feb 2022 (4 months)
- Created **React Typescript** webapp from scratch for a digital pilates platform, and integrated with **C#** API
- Created **NextJS Typescript** webapp MVP from scratch for a non-profit food organisation, and integrated with Strapi **Content Management System (CMS)**
:::

:::div
## Software Developer Intern | Pocketful
#### Aug 2020 — Feb 2021 (7 months)
- Overhauled **React Native** user interface using newly created components written in **Typescript**
- Liaised with and integrated external company in **C# & React Native** proof-of-concept to reward users with digital vouchers
:::

:::div
## Software Engineer Intern | ASB Bank
#### Nov 2019 — Feb 2020 (4 months)
- Designed and created **React** webapp and **C#** Web API to store, retrieve, and display international payment updates
:::`

export const projects = `# Projects

:::div
## Online Cards Against Humanity
### [nerdsopposesociety.xyz](https://nerdsopposesociety.xyz/) | GitHub: [nerds-oppose-society](https://github.com/SE750-DART/nerds-oppose-society)
#### May 2021
- Created a responsive, mobile-first webapp of Cards Against Humanity for a university project, earning a **100% mark**
- Integrated **React** frontend system with **SocketJS** & **ExpressJS** backend systems written in **Typescript**
:::

:::div
## Responsible Bar Searcher
### GitHub: [Sloshed](https://github.com/Alxjlv/Sloshed)
#### Aug 2020
- Led backend development on HTML/CSS & Javascript webapp to display nearby bars and liquor stores using **Google Places & Geolocation APIs**
- **Won Best Design** at Summer of Tech's 2020 Create Camp Hackathon
:::

:::div
## Investments Tracker
### GitHub: [Investments-Tracker](https://github.com/RawiriHohepa/Investments-Tracker)
#### Ongoing
- Created **ExpressJS** API written in **Typescript** to automatically retrieve and collate personal investments using **web scraping** & external APIs
- Future plans to automatically call API periodically, store results in a **MongoDB** database, and display helpful statistics in a **React** webapp
:::`

export const skills = [
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

export const education = [
    {
        title: "University of Auckland | BE (Hons) & BA",
        subtitle: "Software Engineering, Psychology, Māori Studies",
        description: "Mar 2018 — Nov 2022",
        gpa: <Text size="small">GPA 8.6/9 (<Bold>A to A+</Bold> average)</Text>,
        awards: [
            "Dean’s Honours List | 2018, 2019, 2021",
            "Māori Academic Excellence Scholarship | 2017",
        ],
    },
];

export const leadership = [
    {
        title: "Secretary",
        subtitle: "Software Engineering Students Association (SESA) | 2022",
        details: [
            <DetailsItem size="small">Overhaul meeting and task tracking system to comply with changing university policy</DetailsItem>,
            <DetailsItem size="small">Uphold and enforce SESA constitution</DetailsItem>,
            <DetailsItem size="small">Organise and record executive commitee meetings</DetailsItem>,
        ],
    },
    {
        title: "Part IV Representative",
        subtitle: "Software Engineering Students Association (SESA) | 2021",
        details: [
            <DetailsItem size="small">{"Organised and MC’d SESA’s inaugural hackathon, with various industry professionals and >100 students"}</DetailsItem>,
            <DetailsItem size="small">Represented SESA at student wellbeing panel for all engineering student associations</DetailsItem>,
            <DetailsItem size="small">Organised and ran various industry & social events for software engineering students</DetailsItem>,
        ],
    },
    {
        title: "Frontend Team Lead",
        subtitle: "20-Person University Project | Apr 2021",
        details: [
            <DetailsItem size="small">Managed frontend team in project to create a digital bullet journal webapp, earning an A grade</DetailsItem>,
            <DetailsItem size="small">Organised and led team meetings, liased with design team, assigned tasks to team members</DetailsItem>,
        ],
    },
    {
        title: "Peer Mentor",
        subtitle: "Software Engineering Students Association (SESA) | 2021",
        details: [
            <DetailsItem size="small">Mentored a Part II (2nd year) software engineering student through SESA’s mentoring program</DetailsItem>,
            <DetailsItem size="small">Provided advice & guidance regarding university courses, internships, recruitment, study/life balance, etc.</DetailsItem>,
        ],
    },
    {
        title: "Tutor",
        subtitle: "UoA Part I & II Assistance Centres | 2019, 2020",
        details: [
            <DetailsItem size="small">Supported & tutored Part I & II (1st & 2nd year) engineering students</DetailsItem>,
            <DetailsItem size="small">Facilitated understanding of lecture notes and preparation for tests, assignments, and exams</DetailsItem>,
        ],
    },
];
