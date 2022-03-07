import React from "react";
import styled from "styled-components";
import Cv from "./Cv";

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: grey;
  & > * {
    background-color: white;
  }
`

const App = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const cvOnly = params.get("cvonly");
  if (cvOnly) return <Cv />;

  return (
    <Container>
      <Cv />
    </Container>
  );
}

export default App;
