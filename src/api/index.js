import axios from "axios";

const baseURL = "https://nike-project-backend.vercel.app/api/v1";

const nikeHttp = axios.create({
  baseURL,
});

const getAllProducts = async () => {
  const response = await nikeHttp.get("/products");
  return response.data;
};

const getSingleProduct = async (id) => {
  const response = await nikeHttp.get(`/products/${id}`);
  return response.data;
};

const createUser = async (payload) => {
  const response = await nikeHttp.post("/user", payload);
  return response.data;
};

const bookProducts = async (id, payload) => {
  const response = await nikeHttp.post(`/user/order/${id}`, payload);
  return response.data;
};

const viewCart = async (payload) => {
  const response = await nikeHttp.post("/user/order", payload);
  return response.data;
};

export { getAllProducts, getSingleProduct, createUser, bookProducts, viewCart };
