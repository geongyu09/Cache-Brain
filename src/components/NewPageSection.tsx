"use client";
import React, { useState } from "react";
import NewPageForm from "./NewPageForm";
import NewCardContentForm from "./NewCardContentForm";
import { DetailCard } from "@/model/card";

const DEFAULT_CARD: DetailCard = {
  id: "",
  title: "",
  description: "",
  tags: [],
  owner: {
    name: "",
  },
  content: [
    {
      _key: "",
      problem: "",
      answer: "",
    },
  ],
};

export default function NewPageSection() {
  const [card, setCard] = useState<DetailCard>(DEFAULT_CARD);
  return (
    <section className="w-full h-5/6 bg-slate-100 grid grid-cols-[1fr_2fr] p-7 rounded-xl">
      <NewPageForm card={card} setCard={setCard} />
      <NewCardContentForm card={card} setCard={setCard} />
    </section>
  );
}
