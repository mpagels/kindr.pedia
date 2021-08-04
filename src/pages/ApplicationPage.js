import React from "react";
import styled from "styled-components/macro";
import { Header, Main } from "../styles/StyledComponents";
import { SocialIcon } from "react-social-icons";
import { QuestionOutlineIcon, RepeatIcon } from "@chakra-ui/icons";
import Card from "../components/Card";
import { Link } from "react-router-dom";
export default function ApplicationPage({
  questions,
  isOpen,
  nextQuestion,
  index,
  page,
  onClick,
}) {
  return (
    <>
      <Header>
        <Link to="/about">
          <QuestionOutlineIcon />
        </Link>
        <SocialIcon
          target="_blank"
          url="https://twitter.com/TBFLWren/status/1420283445591355392"
        />
      </Header>
      <Main>
        <Card questions={questions} isOpen={isOpen} index={index} page={page} />
      </Main>
      <Footer>
        <Arrow onClick={nextQuestion}>
          <RepeatIcon />
        </Arrow>
        <Button onClick={onClick}>
          {isOpen ? "Zeige Frage" : "Zur Antwort"}
        </Button>
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 1em 0;
  background-color: teal;
  width: 100%;
  display: flex;
  justify-content: center;
  color: whitesmoke;
  font-weight: 800;
  border-radius: 10px;
  margin: 0 0 10px 0;
`;

const Arrow = styled.div`
  align-self: flex-end;
  padding: 1em;

  cursor: pointer;
  border-radius: 10px;
  background-color: turquoise;
`;
