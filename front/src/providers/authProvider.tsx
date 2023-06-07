import { ReactNode, createContext } from "react";
import { loginData } from "../pages/login/validator";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  signIn: (data: loginData) => void;
}

const AuthContext = createContext<IAuthContextValues>({} as IAuthContextValues);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const signIn = async (data: loginData) => {};

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
