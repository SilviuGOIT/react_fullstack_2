import axios from "axios";
axios.defaults.baseURL = "https://hn.algolia.com/api/v1";
// https://hn.algolia.com/api/v1/search?query=angular
// Postman -> pentru a testa API-uri, optional curl

async function getArticles() {
  const response = await axios.get("/search?query=react");
  console.log("Response-ul va fii: ", response);

  return response.data.hits;
}

const newsService = {
  getArticles,
};

export default newsService;
