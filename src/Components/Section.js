import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 6rem;
  display: grid;
  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(8, 1fr);
  }

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
