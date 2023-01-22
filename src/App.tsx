import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Task } from "./model"
import TodoList from './components/TodoList';

const App: React.FC = () => {

const [task, setTask] = useState<string>("");
const [allTasks, setAllTasks] = useState<Task[]>([])

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

  if(task) {
    setAllTasks([...allTasks, {id: Date.now(), text: task, isDone: false}])
    setTask("");
  }
 
}

console.log(allTasks)

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField  
        task={task} 
        setTask={setTask}
        handleAdd={handleAdd} />

      <TodoList 
        allTasks={allTasks} 
        setAllTasks={setAllTasks}/>  
      
    </div>
  );
}

export default App;
