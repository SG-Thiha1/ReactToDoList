import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(["Learn React", "Learn Japanese"]);
  const [taskInput, setTaskInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function handleInputChange(e) {
    setTaskInput(e.target.value);
  }
  function handleAddOrSaveClick() {
    if (editIndex === null) {
      // Add new task
      setTasks(t => [...t, taskInput]);
    } else {
      // Save edited task
      setTasks(t => t.map((task, i) => (i === editIndex ? taskInput : task)));
      setEditIndex(null);
    }
    setTaskInput("");
  }
  function handleEditClick(index) {
    setEditIndex(index);
    setTaskInput(tasks[index]);
  }
  function deleteTask(index) {
    setTasks(t => t.filter((_, i) => i !== index));
  }
  return (
    <>
      <section className='to-do-list'>
        <h2>To Do list</h2>
        <div className="addList">
          <input onChange={handleInputChange} type="text" value={taskInput} />
          <button onClick={handleAddOrSaveClick}>
            {editIndex === null ? "Add" : "Save"}
          </button>
        </div>
        <ol>
          {tasks.map((t, index) => (
            <li key={index}>
              <span className="task-text">{t}</span>
              <div className="task-buttons">
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => handleEditClick(index)}>Edit</button>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default App;
