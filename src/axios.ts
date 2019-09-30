import axios from "axios";

const config = {
  baseURL: "https://jsonplaceholder.typicode.com/"
};

export const customAxi = axios.create(config);

export default customAxi;
