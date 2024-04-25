"use client";
import { Login } from "@/services/service";
import React from "react";
import { useRouter } from "next/navigation";

const AuthPage: React.FC = () => {
  const [userName, setUserName] = React.useState<string>("");
  const router = useRouter();

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   localStorage.setItem("userName", userName);

  // };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName !== "") {
      try {
        const response = await Login(userName);
        localStorage.setItem("userName", userName);
        if (response?.data?.success) {
          console.log("userbane", userName);
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Bidding Application
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-1 outline-none"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={userName === ""}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
