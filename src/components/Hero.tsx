"use client";
import useSWR from "swr";
import React from "react";
import { HomeUser } from "@/model/user";

export default function Hero() {
  const {
    data: user,
    isLoading,
    error,
  } = useSWR<HomeUser>("/api/user/loggedInUser");

  return (
    <>
      {user && (
        <section className="flex items-center gap-5 p-6">
          <img src={user.image} className="w-12 h-12 rounded-full" />
          <div>
            <h4 className="text-lg">{user.name}</h4>
            <p className="text-sm text-gray-400">{user.username}</p>
          </div>
        </section>
      )}
    </>
  );
}
