import axios from "axios";
import  configEnv  from "./config";

const client = axios.create({
  baseURL: configEnv.apiBase ,
  timeout: 8000,
});

export default client;