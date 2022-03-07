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
    color: #686868;
`
const Section = styled.h2`
    color: #686868;
`
const Heading = styled.h3`
    font-weight: bold;
`
const SubHeading = styled.h4`
    color: #686868;
`
const DetailsItem = styled.li`
    color: #4B4B4B;
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
`

const RightSection = styled.div`
    width: 40%;
    height: 100%;

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

                    <Heading>Full Stack Developer | Maverick</Heading>
                    <SubHeading>Nov 2021 — Feb 2022 (4 months)</SubHeading>
                    <ul>
                        <DetailsItem>Created React Typescript webapp from scratch for a digital pilates platform, and integrated with C# API</DetailsItem>
                        <DetailsItem>Created NextJS Typescript webapp MVP from scratch for a non-profit food organisation, and integrated with Strapi Content Management System (CMS)</DetailsItem>
                    </ul>

                    <Heading>Software Developer Intern | Pocketful</Heading>
                    <SubHeading>Aug 2020 — Feb 2021 (7 months)</SubHeading>
                    <ul>
                        <DetailsItem>Overhauled React Native user interface using newly created components written in Typescript</DetailsItem>
                        <DetailsItem>Liaised with and integrated external company in C# & React Native proof-of-concept to reward users with digital vouchers</DetailsItem>
                    </ul>

                    <Heading>Software Engineer Intern | ASB Bank</Heading>
                    <SubHeading>Nov 2019 — Feb 2020 (4 months)</SubHeading>
                    <ul>
                        <DetailsItem>Designed and created React webapp and C# Web API to store, retrieve, and display international payment updates</DetailsItem>
                    </ul>
                </LeftSection>

                <RightSection></RightSection>
            </Content>
        </Paper>
    )
}

export default Cv;
