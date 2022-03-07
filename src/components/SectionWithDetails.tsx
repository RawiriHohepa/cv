import React from "react";
import Entry from "./Entry";
import { Details, SectionTitle } from "./text";

type SectionProps = {
    title: string;
    entries: EntryProps[];
    size?: "small" | "regular";
}

type EntryProps = {
    title: string;
    subtitle?: string;
    description?: string;
    details: JSX.Element[];
}

const SectionWithDetails = (props: SectionProps) => {
    return (
        <>
            <SectionTitle>{props.title}</SectionTitle>

            {props.entries.map(entry => (
                <Entry
                    key={entry.title}
                    title={entry.title}
                    subtitle={entry.subtitle}
                    description={entry.description}
                    size={props.size}
                >
                    <Details>
                        {entry.details.map((detail, index) => (
                            <div key={index}>
                                {detail}
                            </div>
                        ))}
                    </Details>
                </Entry>
            ))}
        </>
    );
}

export default SectionWithDetails;
