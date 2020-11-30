import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Span = styled.span`
  font-size: 1.3em;
  font-weight: 600;
`;

const Loader = () => (
  <Container>
    <Span>Loading...</Span>
  </Container>
);

export default Loader;
