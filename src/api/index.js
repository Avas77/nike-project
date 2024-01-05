import axios from "axios";

const baseURL = "https://nike-practice.onrender.com/api/v1";

const nikeHttp = axios.create({
  baseURL,
});

const getAllProducts = async () => {
  const response = await nikeHttp.get("/products");
  return response.data;
};

export default getAllProducts;
