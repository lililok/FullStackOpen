const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercise={part.exercises} />
      ))}
    </div>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <p>{part} {exercise}</p>
  )
}

const Total = (props) => {
  const totalExercises = props.course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total course={course} />
    </div>
  )
}

export default App