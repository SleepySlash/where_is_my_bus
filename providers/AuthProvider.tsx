"use client";

import { account } from "@/lib/appwrite";
import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext<any>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const x = await account.get();
        setUser(x);
      } catch (error) {
        setUser(null);
        console.log(error);
      }
    };
    getUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export function useUser() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Use theme must be used within a theme provider");
  }

  return context;
}
