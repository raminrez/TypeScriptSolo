import axios from "axios";

const getAllPosts = () => {
  return axios
    .get("posts")
    .then(response => {
      return response.data;
    })
    .catch(e => {
      throw new Error(`Fetch Posts FAILED:${e.message}`);
    });
};

export { getAllPosts };
