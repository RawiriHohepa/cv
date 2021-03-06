import React from "react";
import {
    Heading,
    SubHeading,
    Description,
} from "./text";

type EntryProps = {
    title: string;
    subtitle?: string | JSX.Element;
    description?: string;
    size?: "regular" | "small"
    children: React.ReactNode;
}

const Entry = (props: EntryProps) => {
    return (
        <div style={{ marginBottom: props.size === "small" ? "0.5rem" : "1rem" }}>
            <Heading size={props.size}>{props.title}</Heading>
            {!!props.subtitle && (
                typeof props.subtitle === "string"
                    ? <SubHeading size={props.size}>{props.subtitle}</SubHeading>
                    : props.subtitle
            )}
            {!!props.description && <Description size={props.size}>{props.description}</Description>}
            {props.children}
        </div>
    )
}

export default Entry;
