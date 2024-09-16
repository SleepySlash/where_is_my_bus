"use client";
import { useState } from "react";
import { account, ID } from "@/lib/appwrite";
import { register } from "module";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userId, setUserId] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOTP] = useState("");

  const sendOTP = async () => {
    const token = await account.createPhoneToken(ID.unique(), "+91" + phone);
    setUserId(token.userId);
  };

  const login = async () => {
    const session = await account.createSession(userId, otp);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Not logged in</p>
      <form>
        {/* <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <input
          type="text"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="button" onClick={sendOTP}>
          Send OTP
        </button>
        <input
          type="otp"
          placeholder="Name"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
        <button type="button" onClick={() => login()}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
