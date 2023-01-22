import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { Task } from '../model';
import {AiFillEdit, AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"

type Props = {
    task: Task;
    key: number;
    allTasks: Task[];
    setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const Card : React.FC<Props>= ({task, key, allTasks, setAllTasks}) => {
  return (
    <form className='card'>
        <span className="card__text">{task.text}</span>
        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
            <span className="icon">
                <AiFillDelete />
            </span>
            <span className="icon">
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default Card