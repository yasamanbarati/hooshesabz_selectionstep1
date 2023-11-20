import { create } from "zustand";
import { LoginFormProps } from "./type";

export const useAuthStore = create<LoginFormProps>((set) => ({
  uname: "",
  pass: "",
  setCredentials: (uname, pass) => set({ uname, pass }),
}));
