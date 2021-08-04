import { ArrowBackIcon } from "@chakra-ui/icons";
import { SocialIcon } from "react-social-icons";
import React from "react";
import { Link } from "react-router-dom";
import { Header, Main } from "../styles/StyledComponents";
export default function AboutPage() {
  return (
    <>
      <Header>
        <Link to="/">
          <ArrowBackIcon />
        </Link>
        <SocialIcon
          target="_blank"
          url="https://twitter.com/TBFLWren/status/1420283445591355392"
        />
      </Header>
      <Main>
        Hi, 👋, dies ist eine kleine WebApp die Eltern helfen soll, kleine
        informative Tipps für das Baby zu lernen. Meine Frau hat über die
        Twitterperlen diesen Thread gefunden und da wir bald auch Eltern werden,
        fand ich viele der Tipps super hilfreich. Und ich wollte diese Tipps
        gerne im Kopf behalten, damit, wenn es soweit ist, ich sie abrufen kann.
        Atuell lese ich ein Buch, wo erklärt wird, wie man effektiv neue Dinge
        lernen kann und da werden "Flashcards" empfohlen. Ich nutze diese App
        also zum speichern der tollen Tipps. Ihr könnt die App gerne nutzen.
        Bookmarkt sie euch und schaut regelmäßig rein. Jeder der Tipps gehört
        https://twitter.com/TBFLWren. Ich habe das nur herauskopiert und vllt
        ein wenig umgeschrieben, damit eine Frage entsteht. Besucht auch gerne
        mein GitHub Profil und schaut euch meine anderen Projeke an. Wenn ihr
        (Feature) Ideen für diese WebApp hier habt, schreibt mir hier ein
        Ticket, ich würde dass dann einbauen, wenn es machbar ist. Hamburg im
        August 2021
      </Main>
    </>
  );
}
