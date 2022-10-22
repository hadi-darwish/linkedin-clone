import axios from "axios";

const token = localStorage.getItem("token");

axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.Authorization = `Bearer ${token}`;

const request = async ({ method, url, data }) => {
  const response = await axios.request({
    method,
    url,
    data,
  });

  return response.data;
};

export default request;
