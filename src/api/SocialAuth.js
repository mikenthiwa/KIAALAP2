import axios from "axios/index";
import dotenv from "dotenv"
import {resolveBaseUrl} from "./index";

dotenv.config();

const baseUrl = resolveBaseUrl();

export class SocialAuth {
  static async socialSignUp (provider){
    return axios.get(`http://localhost:9001/login/${provider}`, {
      headers: {"Authorization": `Bearer ${process.env.headers_token}`}
    })
  }
}