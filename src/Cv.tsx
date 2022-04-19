import React from "react";
import ReactMarkdown from "react-markdown";
import remarkDirective from "remark-directive";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Title,
    SubTitle,
    SectionTitle,
    Text,
    Description,
    Heading,
    SubHeading,
    Details,
    DetailsItem,
} from "./components/text";
import Section from "./components/Section";
import {
    contacts,
    experience,
    projects,
    skills,
    education,
    leadership,
} from "./data";

const Paper = styled.div`
    // A4 size paper for 96 PPI
    width: 794px;
    height: 1123px;
`

const HeaderSection = styled.div`
    height: 10%;
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 3rem;

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
    width: 57.5%;
    height: 100%;
    box-sizing: border-box;
    padding: 2rem 3rem;
    & > :first-child {
        margin-top: 0;
    }
`
const RightSection = styled.div`
    width: 42.5%;
    height: 100%;
    box-sizing: border-box;
    padding: 2rem 3rem 2rem 1.5rem;
    & > :first-child {
        margin-top: 0;
    }

    background: #B3E3F180;
`

const ContactsItem = styled.a`
    color: #000000;
    text-align: right;
    margin-left: 1rem;
`

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
                    <ReactMarkdown children={experience} remarkPlugins={[remarkDirective]} components={{
                        h1: SectionTitle,
                        h2: Heading,
                        h4: Description,
                        ul: Details,
                        li: DetailsItem,
                        div: ({ children }) => <div style={{ marginBottom: "1rem" }}>{children}</div>
                    }} />

                    <ReactMarkdown children={projects} remarkPlugins={[remarkDirective]} components={{
                        h1: SectionTitle,
                        h2: Heading,
                        h3: SubHeading,
                        h4: Description,
                        ul: Details,
                        li: DetailsItem,
                        a: ({ children, href }) => <a href={href} style={{ color: "#000000" }}>{children}</a>,
                        div: ({ children }) => <div style={{ marginBottom: "1rem" }}>{children}</div>
                    }} />
                </LeftSection>

                <RightSection>
                    <Section
                        type="education"
                        title="Education"
                        entries={education}
                        size="small"
                    />

                    <Section
                        type="details"
                        title="Leadership & Community"
                        entries={leadership}
                        size="small"
                    />

                    <Section
                        type="text"
                        title="Ask me about..."
                        entries={skills}
                        size="small"
                    />

                    <SectionTitle size="small">References</SectionTitle>
                    <Text>Available upon request</Text>
                </RightSection>
            </Content>
        </Paper>
    );
}

export default Cv;
