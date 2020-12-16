import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";

import Poster from "../../Components/Poster";

const Container = styled.div`
  width: 100%;
  padding: 20px;
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
              <Poster
                key={movie.id}
                id={movie.id}
                imgUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Result">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imgUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#ff0000" text={error} />}
        {movieResults &&
          tvResults &&
          movieResults.length === 0 &&
          tvResults.length === 0 && (
            <Message color="#caccd1" text="Nothing Found"></Message>
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
