import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Stat = ({ nameFeedback, feedback }) => {
   return (
      <div>
         {nameFeedback} {feedback}
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
      <div>
         <h1>give feedback</h1>
         <Button onClick={increaseGood} text="good" />
         <Button onClick={increaseNeutral} text="neutral" />
         <Button onClick={increaseBad} text="bad" />
         <br />
         <h1>Stats</h1>
         <Stat nameFeedback={"good"} feedback={good} />
         <Stat nameFeedback={"neutral"} feedback={neutral} />
         <Stat nameFeedback={"bad"} feedback={bad} />
      </div>
   );
};

export default App;
