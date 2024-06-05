const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({ parts, exercises }) => {
  return (
    <div>
      <Part part={parts.part1} exercise={exercises.exercises1} />
      <Part part={parts.part2} exercise={exercises.exercises2} />
      <Part part={parts.part3} exercise={exercises.exercises3} />
    </div>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <p>{part} {exercise}</p>
  )
}

const Total = ({ exercises }) => {
  const totalExercises = exercises.exercises1 + exercises.exercises2 + exercises.exercises3;
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = {
    part1: 'Fundamentals of React',
    part2: 'Using props to pass data',
    part3: 'State of a component'
  };
  const exercises = {
    exercises1: 10,
    exercises2: 7,
    exercises3: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App