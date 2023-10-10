"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Create New User</h1>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        CREATE
      </button>
    </div>
  );
};

export default NewUserPage;
