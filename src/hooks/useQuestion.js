import { useState } from "react";
import { questions } from "../lib/questions";
import { wrap } from "popmotion";

function getRandomIndex() {
  const randomIndex = Math.random();
  const multypliedRandomIndex = randomIndex * questions.length;
  return Math.floor(multypliedRandomIndex);
}

export default function useQuestion() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(getRandomIndex());

  const index = wrap(0, questions.length, page);

  function nextQuestion() {
    setPage(getRandomIndex());
    setIsOpen(false);
  }

  function handleOnClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return { isOpen, handleOnClick, nextQuestion, index, page, questions };
}
