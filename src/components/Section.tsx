import React from "react";
import Entry from "./Entry";
import { Details, SectionTitle, Text, Bold } from "./text";

type SectionProps<EntryProps> = {
    title: string;
    entries: EntryProps[];
    size?: "small" | "regular";
    renderMethod: (entryProps: EntryProps, size?: "small" | "regular") => JSX.Element;
}

export type EntryPropsDetails = {
    title: string;
    subtitle?: string;
    description?: string;
    details: JSX.Element[];
}

export const renderDetails = (entry: EntryPropsDetails, size?: "small" | "regular") => (
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

export type EntryPropsText = {
    title: string;
    subtitle: string;
}

export const renderText = (entry: EntryPropsText, size?: "small" | "regular") => (
    <div key={entry.title}>
        <Text><Bold>{entry.title}</Bold>: {entry.subtitle}</Text>
    </div>
)

const Section = <EntryProps,>(props: SectionProps<EntryProps>) => {
    return (
        <>
            <SectionTitle>{props.title}</SectionTitle>

            {props.entries.map(entry => (
                props.renderMethod(entry, props.size)
            ))}
        </>
    );
}

export default Section;
