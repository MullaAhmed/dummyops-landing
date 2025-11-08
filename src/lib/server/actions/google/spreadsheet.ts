"use server";
import { SheetError } from "@/lib/types/sheets-error";

export const addEmail = async (email: string): Promise<SheetError> => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      code: "INVALID_EMAIL_FORMAT",
      message: "Invalid email format",
    };
  }

  return {
    success: true,
    code: "SUCCESS",
    message: "Email added to spreadsheet",
  };
};

export const getRowCount = async (): Promise<SheetError> => {
  return {
    success: true,
    code: "SUCCESS",
    data: 1000,
    message: "Row count retrieved",
  };
};
