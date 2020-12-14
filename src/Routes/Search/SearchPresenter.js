import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
`;

// intercept submit event, block it. (container에서)
const Form = styled.form`
  margin-bottom: 50px;
  width: inherit;
`;

const Input = styled.input`
  all: unset;
  font-size: 2rem;
  font-weight: 600;
  &::placeholder {
    font-size: 1.5rem;
  }
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV shows..."
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Result">
            {movieResults.map((movie) => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Result">
            {tvResults.map((show) => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);

SearchPresenter.prototype = {
  movieResults: Proptypes.array,
  tvResults: Proptypes.array,
  searchTerm: Proptypes.string,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
  handleSubmit: Proptypes.func.isRequired,
  updateTerm: Proptypes.func.isRequired,
};

export default SearchPresenter;
