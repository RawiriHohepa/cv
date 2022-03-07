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
            <Heading>Full Stack Developer | Maverick</Heading>
            <SubHeading>Nov 2021 — Feb 2022 (4 months)</SubHeading>
            {props.children}
            <Spacer height={0.5} />
        </>
    )
}

export default Entry;
