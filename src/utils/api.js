import axios from "axios";

export const getJoke = () => {
  return axios
    .get(
      "http://api.icndb.com/jokes/random?exclude=[explicit]&&escape=javascript"
    )
    .then(response => {
      return response.data.value.joke;
    });
};
