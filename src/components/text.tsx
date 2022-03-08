import React from "react";
import styles from "./text.module.css";

type TextProps = {
    children: React.ReactNode;
    size?: "small" | "regular";
    style?: any;
}
const defaultSize = "regular";

export const Title = (props: TextProps) => 
    <h1 className={styles.title} style={props.style}>{props.children}</h1>

export const SubTitle = (props: TextProps) => 
    <h1 className={styles.subTitle} style={props.style}>{props.children}</h1>

export const SectionTitle = (props: TextProps) => 
    <h2 className={`${styles.sectionTitle} ${styles[props.size || defaultSize]}`} style={props.style}>{props.children}</h2>

export const Heading = (props: TextProps) => 
    <h3 className={`${styles.heading} ${styles[props.size || defaultSize]}`} style={props.style}>{props.children}</h3>

export const SubHeading = (props: TextProps) => 
    <h4 className={`${styles.subHeading} ${styles[props.size || defaultSize]}`} style={props.style}>{props.children}</h4>

export const Description = (props: TextProps) => 
    <h4 className={`${styles.description} ${styles[props.size || defaultSize]}`} style={props.style}>{props.children}</h4>

export const Details = (props: TextProps) => 
    <ul className={styles.details} style={props.style}>{props.children}</ul>

export const DetailsItem = (props: TextProps) => 
    <li className={`${styles.detailsItem} ${styles[props.size || defaultSize]}`} style={props.style}>{props.children}</li>

export const Text = (props: TextProps) => 
    <p className={`${styles.text} ${styles[props.size || defaultSize]}`} style={props.style}>{props.children}</p>

export const Bold = (props: TextProps) => 
    <span className={styles.bold} style={props.style}>{props.children}</span>
