import { Component } from "react";
import newsService from "../services/newsService";
import ArticleList from "./ArticleList";
import ErrorAlert from "./common/ErrorAlert/ErrorAlert";
export default class Test extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: "",
  };

  async retriveArticles() {
    try {
      this.setState({ isLoading: true });
      const response = await newsService.getArticles();
      this.setState({ articles: response });
    } catch (error) {
      if (error.code) {
        this.setState({ error: "Nu a fost gasit un rezultat" });
      } else {
        console.error(error);
        this.setState({ error: "A aparut o eroare" });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidMount() {
    this.retriveArticles();
  }

  render() {
    const { articles, isLoading, error } = this.state;

    if (isLoading) {
      return <p> Loading........</p>;
    }

    return (
      <>
        {error?.length > 0 && <ErrorAlert />}
        {articles?.length > 0 ? (
          <ArticleList articles={articles} />
        ) : (
          "Nu exista niciun articol"
        )}
      </>
    );
  }
}
