import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imgUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imgUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imgUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#ff0000" text={error} />}
    </Container>
  );

TVPresenter.prototype = {
  topRated: Proptypes.array,
  popular: Proptypes.array,
  airingToday: Proptypes.array,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
};

export default TVPresenter;
