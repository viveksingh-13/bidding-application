"use client";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  // Check if the user's name is "admin"
  const userName = localStorage.getItem("userName");

  // Redirect to authentication page if user is not "admin"
  React.useEffect(() => {
    if (!userName) {
      router.push("/login"); // Redirect to authentication page
    }
  }, [userName, router]);

  // Render children if user is "admin"
  return (
    <>
      {userName && (
        <div className="min-h-screen  flex flex-col">
          <header className="w-full bg-gray-400 p-5 flex justify-between  gap-5 capitalize">
            <button
              className="bg-blue-500 text-white p-2 rounded-lg capitalize"
              onClick={() => {
                router.push("/admin");
              }}
            >
              admin
            </button>
            <div>
              <button
                className="bg-blue-500 text-white p-2 mr-[20px] rounded-lg capitalize"
                onClick={() => {
                  router.push("/");
                }}
              >
                Back
              </button>

              <button
                className="bg-blue-500 text-white p-2 rounded-lg float-end capitalize"
                onClick={() => {
                  localStorage.removeItem("userName");
                  router.push("/login");
                }}
              >
                logout
              </button>
            </div>
          </header>
          {children}
        </div>
      )}
    </>
  );
};

export default PrivateLayout;
