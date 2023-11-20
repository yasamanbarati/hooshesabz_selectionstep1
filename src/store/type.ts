export interface LoginFormProps {
  uname: string;
  pass: string;
  setCredentials: (uname?: string, pass?: string) => void;
}
