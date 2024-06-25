import { useState } from 'react'
import './App.css'
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState(["Learn React", "Learn Japanese"]);
  const [editIndex, setEditIndex] = useState(null);
  const [newTask, setNewTask] = useState("");
 
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function clickHandle() {

    if(newTask.trim() === "") {
      return;
    }
    
    if (editIndex !== null) {
      setTasks(t =>t.map((task, i) => (i === editIndex ? newTask : task)));
      setEditIndex(null);
    } else {
      setTasks(t => [...t, newTask]);
    }
    
    setNewTask("");
    
  }

  function deleteTask(index) {
    setTasks(t => t.filter((_, i) => i !== index));
  }

  function handleEditClick(index){
    setNewTask(tasks[index]);
    setEditIndex(index)
  }

  const handleKeyPress = (e) => {
    console.log(e)
    if(e.key == "Enter") {
      clickHandle();
    }
  }
 

  return (
    <>
      <section className='to-do-list'>
        <h2>To Do list</h2>
        <div className="add-task">
          <input onKeyDown={handleKeyPress} onChange={handleInputChange} type="text" value={newTask} />
          <button onClick={clickHandle}>{editIndex !== null ? "Update" : "Add"}</button>
        </div>
        <section className='task-list'>
        <ol>
          {tasks.map((t, index) => (
            <Task key={index} t={t} index= {index} deleteTask = {deleteTask} handleEditClick={handleEditClick}></Task>
          ))}
        </ol>
        </section>
        
      </section>
    </>
  );
}

export default App;
