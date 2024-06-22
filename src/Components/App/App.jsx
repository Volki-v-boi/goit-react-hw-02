import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification ";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const message = "No feedback yet";

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positiveFeedbackPersent = () => {
    return totalFeedback > 0
      ? Math.round((feedback.good / totalFeedback) * 100)
      : 0;
  };

  return (
    <>
      <Description />
      <Options
        handleFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          positiveFeedbackPersent={positiveFeedbackPersent}
          total={totalFeedback}
        />
      ) : (
        <Notification message={message} />
      )}
    </>
  );
}
