import React from "react";
import Entry from "./Entry";
import { Details, SectionTitle, Text, Bold } from "./text";

type SectionProps = {
    title: string;
    size?: "regular" | "small";
} & (
    | SectionPropsWithDetails
    | SectionPropsWithText
    | SectionPropsWithEducation
);
type SectionPropsWithDetails = {
    type: "details";
    entries: EntryPropsDetails[];
}
type SectionPropsWithText = {
    type: "text";
    entries: EntryPropsText[];
}
type SectionPropsWithEducation = {
    type: "education";
    entries: EntryPropsEducation[];
}

type EntryPropsDetails = {
    title: string;
    subtitle?: string;
    description?: string;
    details: JSX.Element[];
}
type EntryPropsText = {
    title: string;
    subtitle: string;
}
type EntryPropsEducation = {
    title: string;
    subtitle: string;
    description: string;
    gpa: JSX.Element;
    awards: string[];
}

const renderDetails = (entry: EntryPropsDetails, size?: "small" | "regular") => (
    <Entry
        key={entry.title}
        title={entry.title}
        subtitle={entry.subtitle}
        description={entry.description}
        size={size}
    >
        <Details>
            {entry.details.map((detail, index) => (
                <div key={index}>
                    {detail}
                </div>
            ))}
        </Details>
    </Entry>
)

const renderText = (entry: EntryPropsText, size?: "small" | "regular") => (
    <div key={entry.title}>
        <Text><Bold>{entry.title}</Bold>: {entry.subtitle}</Text>
    </div>
)

const renderEducation = (entry: EntryPropsEducation, size?: "small" | "regular") => (
    <Entry
        title={entry.title}
        subtitle={entry.subtitle}
        description={entry.description}
    >
        {entry.gpa}
        <Text>Awards:</Text>
        <div style={{ marginLeft: "1.5rem" }}>
            {entry.awards.map(award => (
                <Text key={award} style={{ color: "#4B4B4B" }}>{award}</Text>
            ))}
        </div>
    </Entry>
)

const Section = (props: SectionProps) => {
    switch (props.type) {
        case "details":
            return (
                <>
                    <SectionTitle>{props.title}</SectionTitle>
                    {props.entries.map(entry => renderDetails(entry, props.size))}
                </>
            );
        case "text":
            return (
                <>
                    <SectionTitle>{props.title}</SectionTitle>
                    {props.entries.map(entry => renderText(entry, props.size))}
                </>
            );
        case "education":
            return (
                <>
                    <SectionTitle>{props.title}</SectionTitle>
                    {props.entries.map(entry => renderEducation(entry, props.size))}
                </>
            );
    }
}

export default Section;
