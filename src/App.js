import styled from "styled-components/macro";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ApplicationPage from "./pages/ApplicationPage";
import useQuestion from "./hooks/useQuestion";

function App() {
  const { isOpen, handleOnClick, nextQuestion, index, page, questions } =
    useQuestion();
  return (
    <Screen>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <ApplicationPage
            isOpen={isOpen}
            nextQuestion={nextQuestion}
            index={index}
            page={page}
            questions={questions}
            onClick={handleOnClick}
          />
        </Route>
      </Switch>
    </Screen>
  );
}

export default App;

const Screen = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;
