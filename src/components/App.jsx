import { React, useState } from "react";
import css from './App.module.css';

import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = value => {
    if (value === 'good') setGood(prev => prev + 1)
    else if(value === 'neutral') setNeutral(prev => prev + 1)
    else if(value === 'bad') setBad(prev => prev + 1)
};
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  
  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed();
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({good, neutral, bad})}
          onLeaveFeedback={onLeaveFeedback}
        >
        </FeedbackOptions>
      </Section>
      
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  )
}

export default App


