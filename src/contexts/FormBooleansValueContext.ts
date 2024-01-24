import { createContext } from "react";
import { FormBooleanValueContextTypes } from "../@types/formBooleanValueContextTypes";

export const FormBooleanValueContext =
  createContext<FormBooleanValueContextTypes | null>(null);
