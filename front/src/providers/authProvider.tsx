import { ReactNode, createContext, useEffect, useState } from "react";
import { loginData } from "../pages/login/validator";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  signIn: (data: loginData) => void;
  loading: boolean;
}

const AuthContext = createContext<IAuthContextValues>({} as IAuthContextValues);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("contact-list:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: loginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("contact-list:token", token);

      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
