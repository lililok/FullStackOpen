import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const randomizeSelected = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const voteSelected = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const mostVotes = () => {
    const maxVotes = Math.max(...points);
    const maxPos = points.indexOf(Math.max(...points));
    return maxPos;
  }

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const copy = { ...points }

  const maxPos = mostVotes();

  if (Math.max(...points) == 0) {
    return (
      <div>
        <h1>anecdote of the day</h1>
        <div>
          {anecdotes[selected]}
        </div>
        <div>
          has {copy[selected]} votes
        </div>
        <button onClick={voteSelected}>vote</button>
        <button onClick={randomizeSelected}>next anecdote</button>
        <h1>anecdote with most votes</h1>
        <div>
        none :P
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h1>anecdote of the day</h1>
        <div>
          {anecdotes[selected]}
        </div>
        <div>
          has {copy[selected]} votes
        </div>
        <button onClick={voteSelected}>vote</button>
        <button onClick={randomizeSelected}>next anecdote</button>
        <h1>anecdote with most votes</h1>
        <div>
        {anecdotes[maxPos]}
        </div>
        <div>
          has {Math.max(...points)} votes
        </div>
      </div>
    )
  }
}

export default App