import dotenv from "dotenv";

dotenv.config();

export const envVariables = {
  backendUrl: process.env.KIALAAP_BACK_END_URL
};
