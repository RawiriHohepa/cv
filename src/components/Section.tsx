import React from "react";
import Entry from "./Entry";
import { SectionTitle, Text } from "./text";

type SectionProps = {
    title: string;
    size?: "regular" | "small";
} & (
    | SectionPropsWithEducation
);
type SectionPropsWithEducation = {
    type: "education";
    entries: EntryPropsEducation[];
}

type EntryPropsEducation = {
    title: string;
    subtitle: string;
    description: string;
    gpa: JSX.Element;
    awards: string[];
}

const renderEducation = (entry: EntryPropsEducation, size?: "small" | "regular") => (
    <Entry
        title={entry.title}
        subtitle={entry.subtitle}
        description={entry.description}
    >
        {entry.gpa}
        <Text size="small">Awards:</Text>
        <div style={{ marginLeft: "1.5rem" }}>
            {entry.awards.map(award => (
                <Text key={award} size="small" style={{ color: "#4B4B4B" }}>{award}</Text>
            ))}
        </div>
    </Entry>
)

const Section = (props: SectionProps) => {
    switch (props.type) {
        case "education":
            return (
                <>
                    <SectionTitle size={props.size}>{props.title}</SectionTitle>
                    {props.entries.map(entry => renderEducation(entry, props.size))}
                </>
            );
    }
}

export default Section;
