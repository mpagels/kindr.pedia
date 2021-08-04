import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function Card({ isOpen, questions, direction, index, page }) {
  return (
    <AnimatePresence initial={false} custom={-1}>
      <motion.div
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        style={{
          position: "relative",
          margin: 8,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            background: "#FFD675",
            height: 200,
            width: "80vw",
            borderRadius: 25,
            position: "absolute",
            WebkitBackfaceVisibility: "hidden",
          }}
          animate={{ rotateY: isOpen ? -180 : 0 }}
          transition={{ duration: 1 }}
          initial={false}
        >
          <Question>{questions[index].question}</Question>
        </motion.div>
        <motion.div
          style={{
            background: "#19D2A7",
            height: 200,
            width: "80vw",
            borderRadius: 25,
            position: "absolute",
            WebkitBackfaceVisibility: "hidden",
          }}
          animate={{ rotateY: isOpen ? 0 : -180 }}
          transition={{ duration: 1 }}
          initial={false}
        >
          <Answer>{questions[index].answer}</Answer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const Question = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
`;

const Answer = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
`;
