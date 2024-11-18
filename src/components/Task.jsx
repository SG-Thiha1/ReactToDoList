// eslint-disable-next-line react/prop-types
const Task = ({ t, index, deleteTask, handleEditClick }) => {
  return (
    <>
      <li>
        <span className="task-text">{t}</span>
        <div className="task-buttons">
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={() => handleEditClick(index)}>Edit</button>
        </div>
      </li>
    </>
  );
};

export default Task;
