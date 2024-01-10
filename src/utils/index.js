export const setToken = (token) => {
  sessionStorage.setItem("token", JSON.stringify(token));
};

export const getToken = () => {
  const token = sessionStorage.getItem("token");
  const userToken = JSON.parse(token);
  return userToken;
};
