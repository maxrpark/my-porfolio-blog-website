import axios from "axios";

const api = axios.create({
  baseURL: "https://my-portfolio-blog-website.netlify.app/"
});

export default api;
