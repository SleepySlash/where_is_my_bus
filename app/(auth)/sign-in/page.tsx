"use client";
import { useEffect, useState } from "react";
import { account, databases, ID } from "@/lib/appwrite";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { Query } from "appwrite";
import { env } from "process";
import { useUser } from "@/providers/AuthProvider";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [mobile, setMobile] = useState("");
  const [secret, setSecret] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const router = useRouter();
  // const [loading, setLoading] = useState(true);
  const { user, setUser } = useUser();
  useEffect(() => {
    if (user) {
      redirect("/");
    }
  }, [user]);

  const sendOTP = async () => {
    let promise = databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_USERS_COLLECTION_ID!,
      [Query.equal("Phone", "+91" + mobile)]
    );
    promise.then(
      async function (response) {
        if (response.documents.length > 0) {
          setName("User is Authorized");

          sendToken();
        } else {
          setName("User is not Authorized");
        }
      },
      function (error) {
        console.log(error);
      }
    );
  };

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
    await account.createSession(userId, secret);
    try {
      const x = await account.get();
      setUser(x);
      setLoggedInUser(x);
    } catch (error) {
      console.log(error);
    }

    console.log("Logged in");
  };

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser.name}</p>
        <button type="button" className="bg-red-500">
          Logout
        </button>
        <button
          onClick={() => {
            console.log(loggedInUser.labels);
          }}
        >
          get user details
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <p>Not logged in</p>
      <p>{name}</p>
      <div className="flex flex-col gap-3 justify-center items-center p-10 border border-black bg-gray-300 rounded-md">
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="button" onClick={sendOTP} className="bg-blue-600">
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
