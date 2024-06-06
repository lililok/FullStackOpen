import { useState } from 'react'

const App = () => {
  const increaseByOneGood = () => setGood(good + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1)
  const increaseByOneBad = () => setBad(bad + 1)
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>All: {bad+good+neutral}</div>
      <div>Average: {((good*1)+(neutral*0)+(bad*-1))/(bad+good+neutral)}</div>
       <div>Positive: {((good)/(good+neutral+bad))*100}%</div>
    </div>
  )
}

export default App
