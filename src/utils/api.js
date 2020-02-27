import axios from "axios";

export const getJoke = (firstName, lastName) => {
  return axios
    .get(
      "http://api.icndb.com/jokes/random?exclude=[explicit]&&escape=javascript",
      {
        params: { firstName, lastName }
      }
    )
    .then(response => {
      return response.data.value.joke;
    });
};
