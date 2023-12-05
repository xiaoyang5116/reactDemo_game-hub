import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d215ce7dd18341c09921bc3bb72c77d5",
  },
});

export { CanceledError };
