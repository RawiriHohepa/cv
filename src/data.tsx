import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { DetailsItem, Bold } from "./components/text";

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

export const experience = [
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

export const projects = [
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

export const leadership = [
    {
        title: "Secretary",
        subtitle: "Software Engineering Student’s Association (SESA) | 2022",
        details: [
            <DetailsItem size="small">Overhaul meeting and task tracking system to comply with changing university policy</DetailsItem>,
            <DetailsItem size="small">Uphold and enforce SESA constitution</DetailsItem>,
            <DetailsItem size="small">Organise and record executive commitee meetings</DetailsItem>,
        ],
    },
    {
        title: "Part IV Representative",
        subtitle: "Software Engineering Student’s Association (SESA) | 2021",
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
        subtitle: "Software Engineering Student’s Association (SESA) | 2021",
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