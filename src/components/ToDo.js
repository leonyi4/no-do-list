import React from 'react'

const ToDo = (prop) => {
  return (
    <li className={"toDo"}>
        <h2>{prop.title}</h2>
        <h3>{prop.importance}</h3>
        <p>{prop.desc}</p>
        <p>{prop.date}</p>
    </li>
  )
}

export default ToDo