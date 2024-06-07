import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text}: {value}
    </div>
  );
};

const Statistics = (props) => {
  const [good, neutral, bad] = props.props;

  if (bad+good+neutral===0) {
    return (
      <div>no feedback given</div>
    );
  } else {
    return (
      <div>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={bad+good+neutral} />
        <StatisticLine text="average" value={((good*1)+(neutral*0)+(bad*-1))/(bad+good+neutral)} />
        <StatisticLine text="positive" value={`${((good / (good + neutral + bad)) * 100)}%`} />
      </div>
    );
  }
};

const App = () => {
  const increaseByOneGood = () => setGood(good + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1)
  const increaseByOneBad = () => setBad(bad + 1)
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const props = {good, neutral, bad}

  return (
    <div>
      <div>
        give feedback
      </div>
      <button onClick={increaseByOneGood}>Good</button>
      <button onClick={increaseByOneNeutral}>Neutral</button>
      <button onClick={increaseByOneBad}>Bad</button>
      <div>
        statistics
      </div>
      <Statistics props={[good, neutral, bad]} />
    </div>
  )
}

export default App
