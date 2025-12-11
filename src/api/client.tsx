import axios from "axios";
import { API_URL } from "../config/config.ts";

export const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});
