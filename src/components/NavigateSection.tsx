"use client";
import React from "react";
import NavListComponent from "./NavListComponent";
import { Brain } from "./ui/icon";
import { useSession } from "next-auth/react";

export type NavList = {
  title: string;
  list: { text: string; url: string }[];
};

export default function NavigateSection() {
  const session = useSession();
  const username = session.data?.user.username;
  const Navigation: NavList = {
    title: "Navigation",
    list: [
      { text: "All cards", url: `/${username}/` },
      { text: "Own cards", url: `/${username}/own` },
      { text: "in study", url: `/${username}/instudy` },
      { text: "준비중...", url: `/${username}/` },
    ],
  };
  //서버에서 북마크 정보 가지고 올 것.
  const Bookmarks: NavList = {
    title: "Bookmarks",
    list: [
      { text: "abcd", url: "/${username}/card/${cardid}" },
      { text: "efghijkl", url: "/${username}/card/${cardid}" },
      { text: "in study", url: "/${username}/card/${cardid}" },
      { text: "준비중...", url: "/${username}/card/${cardid}" },
    ],
  };
  return (
    <section className="w-80 bg-slate-100 flex flex-col justify-betweenv border-r-2">
      <div className="flex w-full gap-7 p-5">
        <Brain />
        <h1>Cache Brain</h1>
      </div>
      <NavListComponent content={Navigation} />
      <NavListComponent content={Bookmarks} />
      <div>user</div>
    </section>
  );
}
