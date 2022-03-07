import React from "react";
import { Bold, SectionTitle, Text } from "./text";

type SectionProps = {
    title: string;
    entries: EntryProps[];
}

type EntryProps = {
    title: string;
    subtitle: string;
}

const SectionWithText = (props: SectionProps) => {
    return (
        <>
            <SectionTitle>{props.title}</SectionTitle>

            {props.entries.map(entry => (
                <div key={entry.title}>
                    <Text><Bold>{entry.title}</Bold>: {entry.subtitle}</Text>
                </div>
            ))}
        </>
    );
}

export default SectionWithText;
