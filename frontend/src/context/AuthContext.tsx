"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "@/lib/api";

interface AuthUser {
  username: string;
}

interface AuthResponse {
  token: string;
  username: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Reading localStorage must happen post-mount: the server render has no
  // window, so setting this synchronously during render would mismatch hydration.
  useEffect(() => {
    const storedUser = window.localStorage.getItem("japao_user");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  function persistSession(data: AuthResponse) {
    const authUser: AuthUser = { username: data.username };
    window.localStorage.setItem("japao_token", data.token);
    window.localStorage.setItem("japao_user", JSON.stringify(authUser));
    setUser(authUser);
  }

  async function login(username: string, password: string) {
    const { data } = await api.post<AuthResponse>("/api/auth/login", { username, password });
    persistSession(data);
  }

  async function register(username: string, password: string) {
    const { data } = await api.post<AuthResponse>("/api/auth/register", { username, password });
    persistSession(data);
  }

  function logout() {
    window.localStorage.removeItem("japao_token");
    window.localStorage.removeItem("japao_user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
