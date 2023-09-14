"use client";
import { Content, LearningCardContent } from "@/model/learningCard";
import React from "react";
import useSWR from "swr";
import ContentList from "./ContentList";
import { Filter } from "./StudyComponent";
import useStudy from "@/hooks/useStudy";

type Props = {
  params: string;
  filter: Filter;
  selected: Content[];
  showModal: boolean;
  selectedModify: (selected: Content, remove?: boolean) => void;
};

export default function LearningCardContent({
  params,
  filter,
  selected,
  showModal,
  selectedModify,
}: Props) {
  const { data, isLoading, error } = useStudy(params);
  const learned = data?.content.filter((item) => {
    if (item.progress == 2) return item;
  });
  const learning = data?.content.filter((item) => {
    if (item.progress == 1) return item;
  });
  const unlearned = data?.content.filter((item) => {
    if (item.progress == 0) return item;
  });

  return (
    <section className="w-full overflow-y-auto h-screen px-10 pt-4 pb-[70px]">
      {data && (
        <ul className="h-full lg:overflow-auto">
          {filter == "all" ? (
            <>
              <ContentList
                title="learned"
                learned={learned}
                selected={selected}
                selectedModify={selectedModify}
                showModal={showModal}
              />
              <ContentList
                title="learning"
                learned={learning}
                selected={selected}
                selectedModify={selectedModify}
                showModal={showModal}
              />
              <ContentList
                title="unlearned"
                learned={unlearned}
                selected={selected}
                selectedModify={selectedModify}
                showModal={showModal}
              />
            </>
          ) : filter == "learned" ? (
            <ContentList
              title="learned"
              learned={learned}
              selected={selected}
              selectedModify={selectedModify}
              showModal={showModal}
            />
          ) : filter == "learning" ? (
            <ContentList
              title="learning"
              learned={learning}
              selected={selected}
              selectedModify={selectedModify}
              showModal={showModal}
            />
          ) : filter == "unlearned" ? (
            <ContentList
              title="unlearned"
              learned={unlearned}
              selected={selected}
              selectedModify={selectedModify}
              showModal={showModal}
            />
          ) : null}
        </ul>
      )}
    </section>
  );
}
