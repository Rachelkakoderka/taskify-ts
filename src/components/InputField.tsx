import React, { useRef } from 'react'

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent)=> void;
 }

const InputField = ({task, setTask, handleAdd } : Props) => {
  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <form className='input'
          onSubmit={
            (e) => {
              handleAdd(e);
              inputRef.current?.blur();
            }
          }
    >
      <input 
        ref={inputRef}
        type="input"
        placeholder='Enter a task'
        className="input__box"
        
        value={task}
        onChange={(e) => setTask(e.target.value)}
        >
      </input> 
      
      <button className='input__submit' type='submit'>
         Go
      </button>
    </form>
  )
}

export default InputField