/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { movieApi } from "../../api";
import MoviePresent from "./MoviePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();

      const {
        data: { results: upComing },
      } = await movieApi.upComing();

      const {
        data: { results: popular },
      } = await movieApi.popular();

      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movies information!!!",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;

    // Console: API Check
    console.log(this.state);
    return (
      <MoviePresent
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
