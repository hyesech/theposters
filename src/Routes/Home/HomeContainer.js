/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import HomeProsenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;
    return (
      <HomeProsenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
