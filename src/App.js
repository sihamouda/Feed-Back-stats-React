import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ nameFeedback, feedback }) => {
   return (
      <div className="row">
         <div className="col-2">{nameFeedback}</div>
         <div className="col-2">{feedback}</div>
      </div>
   );
};

const Statistics = ({ good, neutral, bad }) => {
   const all = () => {
      return good + bad + neutral;
   };
   const average = () => {
      if (all() == 0) {
         return 0;
      }
      return (good - bad) / all();
   };
   const positive = () => {
      if (all() == 0) {
         return "0%";
      }
      return (good / all()) * 100 + "%";
   };
   if (all() == 0) {
      return <div>No feedback given</div>;
   }
   return (
      <div>
         <Display nameFeedback={"good"} feedback={good} />
         <Display nameFeedback={"neutral"} feedback={neutral} />
         <Display nameFeedback={"bad"} feedback={bad} />
         <Display nameFeedback={"all"} feedback={all()} />
         <Display nameFeedback={"average"} feedback={average()} />
         <Display nameFeedback={"positive"} feedback={positive()} />
      </div>
   );
};

const App = () => {
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

   const increaseGood = () => {
      setGood(good + 1);
   };
   const increaseNeutral = () => {
      setNeutral(neutral + 1);
   };
   const increaseBad = () => {
      setBad(bad + 1);
   };

   return (
      <div className="container">
         <h1>Give Feedback</h1>
         <Button onClick={increaseGood} text="good" />
         <Button onClick={increaseNeutral} text="neutral" />
         <Button onClick={increaseBad} text="bad" />
         <br />
         <h1>Stats</h1>
         <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
   );
};

export default App;
