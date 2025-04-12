
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type User = {
  name?: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("recipe-gen-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    // This is a mock implementation. In a real app, you would call an API endpoint.
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    
    // For demo purposes, any non-empty values are accepted
    const user = { email };
    localStorage.setItem("recipe-gen-user", JSON.stringify(user));
    setUser(user);
  };

  const signup = async (name: string, email: string, password: string): Promise<void> => {
    // This is a mock implementation. In a real app, you would call an API endpoint.
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (!name || !email || !password) {
      throw new Error("Name, email, and password are required");
    }
    
    // For demo purposes, any non-empty values are accepted
    const user = { name, email };
    localStorage.setItem("recipe-gen-user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("recipe-gen-user");
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
