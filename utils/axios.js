import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8888/",
  // baseURL: "https://my-portfolio-blog-website.netlify.app/",
  // http://localhost:8888/
});

export default api;
