/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useEffect, useState } from "react";
import { loginData } from "./validator";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { Contact } from "../pages/Dashboard";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValues {
  signIn: (data: loginData) => void;
  loading: boolean;
  userData: IUserData | null;
  contacts: any;
  setContacts: any;
}

export interface IUserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  contacts: Contact[];
}

const AuthContext = createContext<IAuthContextValues>({} as IAuthContextValues);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    if (userData) {
      setContacts(userData.contacts);
    }
  }, [userData]);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("contact-list:token");
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const response = await api.get("/users");
          setUserData(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }

    loadUser();
  }, [navigate]);

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
    <AuthContext.Provider
      value={{
        signIn,
        loading,
        userData,
        contacts,
        setContacts,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
