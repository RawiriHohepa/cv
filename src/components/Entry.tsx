import React from "react";
import {
    Heading,
    SubHeading,
    Description,
} from "./text";

type EntryProps = {
    title: string;
    subtitle?: string;
    description?: string;
    size?: "regular" | "small"
    children: React.ReactNode;
}

const Entry = (props: EntryProps) => {
    return (
        <div style={{ marginBottom: "0.5rem" }}>
            <Heading size={props.size}>{props.title}</Heading>
            {!!props.subtitle && <SubHeading size={props.size}>{props.subtitle}</SubHeading>}
            {!!props.description && <Description size={props.size}>{props.description}</Description>}
            {props.children}
        </div>
    )
}

export default Entry;
