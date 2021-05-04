import React, { useState } from "react";
import "./Todo.css";

function TodoList() {
  const [task, settask] = useState("");

  const [taskList, setTasklist] = useState([]);

  const handleChange = (e) => {
    settask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isDone: false,
      };
      setTasklist([...taskList, taskDetails]);
    }
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTasklist(taskList.filter((task) => task.id != id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();

    const element = taskList.findIndex((elem) => elem.id == id);

    const newTaskList = [...taskList];

    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTasklist(newTaskList);
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => handleChange(e)}
          placeholder="görev ekle"
        />
        <button onClick={AddTask}>ekle</button>
      </div>
      <div>
        {taskList !== [] ? (
          <ul>
            {taskList.map((t) => (
              <div>
                <li className={t.isCompleted ? "doneItem" : "listItem"}>
                  {t.value}
                </li>
                <button onClick={(e) => taskCompleted(e, t.id)}>
                  tamamlandı
                </button>
                <button onClick={(e) => deletetask(e, t.id)}>sil</button>
              </div>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default TodoList;
