import { type } from '@testing-library/user-event/dist/type';
import React, {useState} from 'react'
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
  
  const [edit, setEdit] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(task.text);
  
    const handleDone = (id: number) => {
    setAllTasks(allTasks.map((task) => task.id === id? {...task, isDone: !task.isDone}: task))
  }

  const handleDelete = (id: number) => {
    setAllTasks(
        allTasks.filter((task)=> task.id === id ? false : true)
    )
  }

  const updateAfterEdit = (id:number) => {
    setAllTasks(
        allTasks.map((task)=> task.id === id ? 
        {...task, text: editedText}
        : task )
    )
  }

  const handleEdit = (e: React.FormEvent, id : number) => {
    e.preventDefault();
    updateAfterEdit(id);
    //bez kolejnej linijki text notattki będzie cały czas możliwy do edytowania
    setEdit(false);

  }

    const inputRef = React.useRef<HTMLInputElement>(null)
  
    React.useEffect(() => {    
        inputRef.current?.focus();}, [edit])
    

    return (
    <form className='card' onSubmit={(e) => handleEdit(e, task.id)}>
        {
            edit ? 
            (
            <input
                ref={inputRef}
                className='card__text'
                type="input"
                placeholder={editedText}
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            ></input>
            ) :
            task.isDone ?
            (<s className="card__text">{task.text}</s>
            ) : (
            <span className="card__text">{task.text}</span>
            )
        
            
        }        
        <div>
            <span className="icon" onClick ={ () => {
                if (!task.isDone && !edit ) {
                    setEdit(!edit);
                }
                }
            }
            >
                <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(task.id)}>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={()=> handleDone(task.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default Card