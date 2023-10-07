"use client";
import { CardContent, DetailCard } from "@/model/card";
import React from "react";
import useSWR from "swr";
import { Filter } from "./StudyComponent";
import FilterComponent from "./FilterComponent";
import { useRouter } from "next/navigation";
import StartButton from "./StartButton";
import { BackArrow, Loading } from "./ui/icon";

type Props = {
  modify: (filter: Filter) => void;
  filter: Filter;
  selected: CardContent[];
  handleShowModal: () => void;
  isLoading: boolean;
  card: DetailCard;
  error: any;
};

export default function LearningCardDetail({
  isLoading,
  card,
  error,
  modify,
  filter,
  handleShowModal,
  selected,
}: Props) {
  const router = useRouter();

  return (
    <section className="flex flex-col bg-slate-100 px-5 h-screen pb-[100px]">
      <div onClick={() => router.back()} className="w-full border-b-2">
        <BackArrow />
      </div>
      {isLoading && <Loading />}
      {card && (
        <>
          <h2 className="my-4 text-lg ">{card?.title}</h2>
          <p>{card?.description}</p>
        </>
      )}
      <FilterComponent modify={modify} filter={filter} />
      <StartButton handleShowModal={handleShowModal} selected={selected} />
    </section>
  );
}
