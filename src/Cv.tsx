import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Entry from "./components/Entry";
import {
    Title,
    SubTitle,
    SectionTitle,
    Text,
    Bold,
} from "./components/text";
import SectionWithDetails from "./components/SectionWithDetails";
import SectionWithText from "./components/SectionWithText";
import {
    contacts,
    experience,
    projects,
    skills,
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
                    <SectionWithDetails
                        title="Experience"
                        entries={experience}
                    />

                    <SectionWithDetails
                        title="Projects"
                        entries={projects}
                    />

                    <SectionWithText
                        title="Ask me about..."
                        entries={skills}
                    />
                </LeftSection>


                <RightSection>
                    <SectionTitle>Education</SectionTitle>

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

                    <SectionWithDetails
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
