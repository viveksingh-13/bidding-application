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
          <header className="w-full bg-gray-400 p-5 ">
            <button
              className="bg-blue-500 text-white p-2 rounded-lg float-end"
              onClick={() => {
                localStorage.removeItem("userName");
                router.push("/login");
              }}
            >
              logout
            </button>
          </header>
          {children}
        </div>
      )}
    </>
  );
};

export default PrivateLayout;
