"use server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { getAuth } from "./auth";
import { GOOGLE_SHEET_ID } from "@/config/env";
import { SheetError } from "@/lib/types/sheets-error";
import { revalidatePath } from "next/cache";

export const getSpreadsheet = async () => {
  if (!GOOGLE_SHEET_ID) {
    throw new Error("GOOGLE_SHEET_ID is not set");
  }

  try {
    const auth = await getAuth();
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, auth);
    await doc.loadInfo();
    return doc;
  } catch (error) {
    console.error(error);

    return;
  }
};

/**
 * Adds an email to the first sheet of the Google Spreadsheet
 * @param email - The email address to add
 * @returns Promise<void>
 * @throws Error if email is invalid, already exists, or operation fails
 */
export const addEmail = async (email: string): Promise<SheetError> => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      code: "INVALID_EMAIL_FORMAT",
      message: "Invalid email format",
    };
  }

  try {
    const doc = await getSpreadsheet();
    if (!doc) {
      return {
        success: false,
        code: "UNKNOWN_ERROR",
        message: "Failed to get spreadsheet",
      };
    }
    const sheet = doc.sheetsByIndex[0];
    if (!sheet) {
      throw new Error("No sheets found in the spreadsheet");
    }

    const rows = await sheet.getRows();
    const existingEmail = rows.find(
      (row) => row.get("email")?.toLowerCase() === email.toLowerCase()
    );

    if (existingEmail) {
      return {
        success: false,
        code: "EMAIL_ALREADY_EXISTS",
        message: "Email already exists in the spreadsheet",
      };
    }

    await sheet.addRow({
      email: email.toLowerCase(),
      timestamp: new Date().toISOString(),
    });
    revalidatePath("/");
    return {
      success: true,
      code: "SUCCESS",
      message: "Email added to spreadsheet",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      code: "UNKNOWN_ERROR",
      message: "Failed to add email to spreadsheet",
    };
  }
};

/**
 * Gets the number of rows in the first sheet of the Google Spreadsheet
 * @returns Promise<number>
 * @throws Error if no sheets are found in the spreadsheet
 */
export const getRowCount = async (): Promise<SheetError> => {
  const doc = await getSpreadsheet();
  if (!doc) {
    return {
      success: false,
      code: "UNKNOWN_ERROR",
      message: "Failed to get spreadsheet",
    };
  }
  const sheet = doc.sheetsByIndex[0];
  if (!sheet) {
    throw new Error("No sheets found in the spreadsheet");
  }
  const rows = await sheet.getRows();
  const rowCount = rows.length;
  if (!rowCount) {
    return {
      success: false,
      code: "UNKNOWN_ERROR",
      message: "Failed to get row count",
    };
  }
  return {
    success: true,
    code: "SUCCESS",
    data: rowCount + 1000,
    message: "Row count retrieved",
  };
};
