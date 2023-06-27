import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  user: any;
  login: (data: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const userLocation = JSON.parse(localStorage.getItem("user") as any);
  console.log("datadata 0");
  const login = async (data: any) => {
    console.log("datadata", data);
    setUser(data);
    if (!userLocation) {
      navigate("/login");
    } else {
      if (data?.status_subscription === 1) {
        console.log("datadata 1", data);
        navigate("/dashboard");
      } else if (data?.status_subscription === 0) {
        console.log("datadata 2", data);
        navigate("/configuracion");
      }
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
