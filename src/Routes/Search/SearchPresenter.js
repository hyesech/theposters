import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
}) => null;

SearchPresenter.prototype = {
  movieResults: Proptypes.array,
  tvResults: Proptypes.array,
  searchTerm: Proptypes.string,
  error: Proptypes.string,
  loading: Proptypes.bool.isRequired,
  handleSubmit: Proptypes.func.isRequired,
};

export default SearchPresenter;
