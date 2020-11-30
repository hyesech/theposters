/* eslint-disable no-undef */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const { isMovie } = this.state;

    const parsedId = parseInt(id);

    // 검색값(주소창 입력값)이 NaN이면 /으로 리턴
    // 3423sljei, lksjekf3939 등 숫자가 끼어 있으면 이것을 3423, 3939 등으로 인식함
    // 그래서 홈으로 push 불가한 오류가 있음.
    if (isNaN(parsedId)) {
      return push("/");
    }

    // Path를 알아야 함: movie인지 tv인지
    let result = null;
    try {
      if (isMovie) {
        // const request = await movieApi.movieDetail(parsedId);
        // result = request.data;
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        // const request = await tvApi.showDetail(parsedId);
        // result = request.data;
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "can't find anything!!" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
