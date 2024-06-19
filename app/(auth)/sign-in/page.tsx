"use client";
import { useEffect, useState } from "react";
import { account, ID } from "@/lib/appwrite";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [mobile, setMobile] = useState("");
  const [secret, setSecret] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);

  const sendToken = async () => {
    console.log("+91" + mobile);
    try {
      const token = await account.createPhoneToken(ID.unique(), "+91" + mobile);
      setUserId(token.userId);
      console.log("Success");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    const session = await account.createSession(userId, secret);
    setLoggedInUser(await account.get());
    console.log("Logged in");
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  useEffect(() => {
    const getSession = async () => {
      const x = await account.get();
      setLoggedInUser(x);
      console.log(x);
      setLoading(false);
    };
    getSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser.name}</p>
        <button type="button" onClick={logout} className="bg-red-500">
          Logout
        </button>
        <button></button>
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <p>Not logged in</p>
      <div className="flex flex-col gap-3 justify-center items-center p-10 border border-black bg-gray-300 rounded-md">
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="button" onClick={sendToken} className="bg-blue-600">
          Send OTP
        </button>
        <input
          type="text"
          placeholder="OTP"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}

        <button type="button" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
