import axios from "axios";
import {API_URL, API_TOKEN} from "@env";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    Authorization: API_TOKEN,
  },
});
