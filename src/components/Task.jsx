import React from 'react'

const Task = ({t, index, deleteTask, handleEditClick}) => {

    
  return (
    <>
        <li >
            <span className="task-text">{t}</span>
            <div className="task-buttons">
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => handleEditClick(index)}>Edit</button>
            </div>
        </li>
    </>
  )
}

export default Task