"use client";
import withPrivateLayout from "@/utils/withPrivateLayout";
import { useRouter } from "next/navigation";
import React from "react";

const AdminPage: React.FC = () => {
  const router = useRouter();
  const handleLogOut = () => {
    localStorage.removeItem("userName");
    router.push("/login");
  };
  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={handleLogOut}>logout</button>
      {/* Your admin page content */}
    </div>
  );
};

export default withPrivateLayout(AdminPage);
