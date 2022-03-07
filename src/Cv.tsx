import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Title,
    SubTitle,
    SectionTitle,
    Text,
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
                    <Section
                        type="details"
                        title="Experience"
                        entries={experience}
                    />

                    <Section
                        type="details"
                        title="Projects"
                        entries={projects}
                    />

                    <Section
                        type="text"
                        title="Ask me about..."
                        entries={skills}
                    />
                </LeftSection>

                <RightSection>
                    <Section
                        type="education"
                        title="Education"
                        entries={education}
                    />

                    <Section
                        type="details"
                        title="Leadership & Community"
                        entries={leadership}
                        size="small"
                    />

                    <SectionTitle>References</SectionTitle>

                    <Text>Available upon request</Text>
                </RightSection>
            </Content>
        </Paper>
    );
}

export default Cv;
