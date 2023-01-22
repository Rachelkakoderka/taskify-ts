import React from 'react'
import {Task} from "../model"
import Card from "./Card"

interface Props {
  allTasks: Task[],
  setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>
}


const TodoList: React.FC<Props> = ({allTasks, setAllTasks}) => {
  return (
    <div className='todoList'>
      {allTasks.map( task => (<Card 
                                task={task}
                                key={task.id}
                                allTasks={allTasks}
                                setAllTasks={setAllTasks} />))}
      </div>
  )
}

export default TodoList;