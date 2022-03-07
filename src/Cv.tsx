import React from "react";
import styled from "styled-components";

const Paper = styled.div`
    // A4 size paper for 96 PPI
    width: 794px;
    height: 1123px;
`

const Cv = () => {
    return (
        <Paper>
            <h1 style={{margin:0}}>CV</h1>
        </Paper>
    )
}

export default Cv;
