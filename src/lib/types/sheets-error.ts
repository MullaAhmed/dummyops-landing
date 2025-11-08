export type SheetErrors = "EMAIL_ALREADY_EXISTS" | "INVALID_EMAIL_FORMAT" | "UNKNOWN_ERROR" | "SUCCESS";

export type SheetError = {
  success: boolean;
  code: SheetErrors;
  message: string;
  data?: string | number;
};

