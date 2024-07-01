"use client";

import { account } from "@/lib/appwrite";
import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext<any>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const x = await account.get();
        setUser(x);
        console.log("User", x);
      } catch (error) {
        setUser(null);
        console.log(error);
      }
      setLoading(false);
    };
    getUser();
  }, []);

  if (loading) {
    return (
      <div className="min-[100vh] w-full m-auto">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
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
