import React from "react";
import Spacer from "./Spacer";
import {
    Heading,
    SubHeading,
} from "./text";

type EntryProps = {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const Entry = (props: EntryProps) => {
    return (
        <>
            <Heading>{props.title}</Heading>
            <SubHeading>{props.subtitle}</SubHeading>
            {props.children}
            <Spacer height={0.5} />
        </>
    )
}

export default Entry;
