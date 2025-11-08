"use server";

import { JWT } from "google-auth-library";
import {
  SERVICE_ACCOUNT_EMAIL,
  SERVICE_ACCOUNT_PRIVATE_KEY,
} from "@/config/env";

export const getAuth = async () => {
  if (!SERVICE_ACCOUNT_EMAIL || !SERVICE_ACCOUNT_PRIVATE_KEY) {
    throw new Error(
      "SERVICE_ACCOUNT_EMAIL or SERVICE_ACCOUNT_PRIVATE_KEY is not set"
    );
  }
  return new JWT({
    email: SERVICE_ACCOUNT_EMAIL,
    key: SERVICE_ACCOUNT_PRIVATE_KEY as string,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
};
