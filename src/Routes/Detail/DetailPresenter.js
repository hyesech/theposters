import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Loader from "../../Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImg={`https://image.tmdb.org/t/p/original${result.Backdrop_path}`}
      />
    </Container>
  );

DetailPresenter.prototype = {
  result: propTypes.object,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
};

export default DetailPresenter;
