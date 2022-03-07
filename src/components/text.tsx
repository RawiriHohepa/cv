import styled from "styled-components"

export const Title = styled.h1`
    margin: 0;
    font-weight: bold;
`
export const SubTitle = styled.h1`
    margin: 0;
    font-weight: normal;
    color: #686868;
`
export const SectionTitle = styled.h2`
    margin: 2rem 0 1rem 0;
    font-weight: normal;
    color: #686868;
`
export const Heading = styled.h3`
    margin: 0;
    font-weight: bold;

    ${({ size }: { size?: "regular" | "small" }) => {
        if (size === "small") {
            return `
                font-size: 1rem;
            `
        }
    }}
`
export const SubHeading = styled.h3`
    margin: 0;
    font-weight: normal;

    ${({ size }: { size?: "regular" | "small" }) => {
        if (size === "small") {
            return `
            font-size: 1rem;
            `
        }
    }}
`
export const Description = styled.h4`
    margin: 0;
    font-weight: normal;
    color: #686868;

    ${({ size }: { size?: "regular" | "small" }) => {
        if (size === "small") {
            return `
                font-size: 0.8rem;
            `
        }
    }}
`
export const Details = styled.ul`
    margin: 0;
    font-weight: normal;
`
export const DetailsItem = styled.li`
    margin: 0;
    font-weight: normal;
    color: #4B4B4B;

    ${({ size }: { size?: "regular" | "small" }) => {
        if (size === "small") {
            return `
                font-size: 0.8rem;
            `
        }
    }}
`
export const Text = styled.p`
    margin: 0 0 0.25rem 0;
    font-weight: normal;
`

export const Bold = styled.span`
    font-weight: bold;
`
