import axios from "axios";

export default axios.create({
  baseURL: "http://10.0.10.13:3001/api/v1/restaurants",
});
