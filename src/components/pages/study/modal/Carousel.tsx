"use client";
import React, { useState } from "react";
import StudyContent from "./StudyContent";
import { ArrowLeft, ArrowRight } from "../../../ui/icon";
import { CardContent } from "@/model/card";
type Props = {
  selected: CardContent[];
  params: string;
};

export default function Carousel({ selected, params }: Readonly<Props>) {
  const [level, setLevel] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const scroolCard = (targetId: string) => {
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: "smooth" });
  };
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    const handle = event.currentTarget.id !== "prev";
    let fakeLevel = level;
    setShowAnswer(false);
    if (handle) {
      fakeLevel++;
      if (fakeLevel > selected.length - 1) setLevel(selected.length - 1);
      setLevel(fakeLevel);
      scroolCard(fakeLevel.toString());
      return;
    }
    fakeLevel--;
    if (fakeLevel < 0) setLevel(0);
    setLevel(fakeLevel);
    scroolCard(fakeLevel.toString());
  };

  return (
    <div className="w-full overflow-x-hidden flex gap-[800px]" id="carousel">
      {selected.map((item, index) => (
        <StudyContent
          key={item._key}
          item={item}
          index={index}
          params={params}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
        />
      ))}
      <button
        onClick={onClick}
        className={`absolute top-1/2 left-32 -translate-y-1/2  ${
          level <= 0 ? "hidden" : ""
        }`}
        id="prev"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={onClick}
        className={`absolute top-1/2 right-32 -translate-y-1/2 ${
          level >= selected.length - 1 ? "hidden" : ""
        }`}
      >
        <ArrowRight />
      </button>
    </div>
  );
}
