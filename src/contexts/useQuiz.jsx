import { useContext } from "react";
import { QuizContext } from "./QuizContext"; // Update path if needed

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error(
      "QuizContext was used outside of the QuizProvider"
    );
  return context;
}

export default useQuiz;
