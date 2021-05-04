import React from "react";

import "./Todo.css";

const TodoList = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const addTask = () => {
    if (!inputValue) return;

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      value: inputValue,
      isDone: false,
    };

    const cloneTaskList = [...taskList];

    cloneTaskList.push(newTask);
    setTaskList(cloneTaskList);
    setInputValue("");
  };

  const onDeleteTask = (id) => {
    const deletedItemIndex = taskList.findIndex((task) => task.id === id);
    if (deletedItemIndex === -1) return;

    const cloneTaskList = [...taskList];
    cloneTaskList.splice(deletedItemIndex, 1);

    setTaskList(cloneTaskList);
  };

  const onChangeTaskStatus = (id) => {
    const changedItemIndex = taskList.findIndex((task) => task.id === id);

    if (changedItemIndex === -1) return;

    const cloneTaskList = [...taskList];
    cloneTaskList[changedItemIndex].isDone = true;

    setTaskList(cloneTaskList);
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="text"
          id="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="görev ekle"
        />
        <button onClick={addTask}>ekle</button>
      </div>
      <div>
        {taskList.length > 0 && (
          <ul>
            {taskList.map((task, index) => (
              <div key={index.toString()}>
                <li className={task.isDone ? "doneItem" : "listItem"}>
                  {task.value}
                </li>
                <button
                  onClick={() => {
                    onChangeTaskStatus(task.id);
                  }}
                >
                  tamamlandı
                </button>
                <button onClick={onDeleteTask.bind(this, task.id)}>sil</button>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TodoList;
