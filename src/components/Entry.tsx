import React from "react";
import Spacer from "./Spacer";
import {
    Heading,
    SubHeading,
    Description,
} from "./text";

type EntryProps = {
    title: string;
    subtitle?: string;
    description?: string;
    children: React.ReactNode;
}

const Entry = (props: EntryProps) => {
    return (
        <>
            <Heading>{props.title}</Heading>
            {!!props.subtitle && <SubHeading>{props.subtitle}</SubHeading>}
            {!!props.description && <Description>{props.description}</Description>}
            {props.children}
            <Spacer height={0.5} />
        </>
    )
}

export default Entry;
