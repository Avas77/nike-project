import axios from "axios";

const baseURL = "http://localhost:3000/api/v1/products";

const getAllProducts = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export default getAllProducts;
