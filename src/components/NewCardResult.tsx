import { DetailCard } from "@/model/card";
import React from "react";
import DetailSection from "./DetailSection";
import CreateCardButton from "./CreateCardButton";

type Props = {
  card: DetailCard;
};

export default function NewCardResult({ card }: Props) {
  return <DetailSection card={card} btn={<CreateCardButton card={card} />} />;
}
