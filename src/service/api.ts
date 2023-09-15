import axios from "axios";
import { config } from "dotenv";

config();

export const api = axios.create({
  baseURL: process.env.API_BASEURL,
});
