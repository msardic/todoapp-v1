import React from "react";
import "./Todo.css";

class TodoListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxState: false,
      inputValue: "",
      taskList: [],
    };
  }

  addTask() {
    if (this.state.inputValue === "") return;

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      value: this.state.inputValue,
      isDone: false,
    };

    const cloneTaskList = [...this.state.taskList];
    cloneTaskList.push(newTask);

    this.setState({
      taskList: cloneTaskList,
      inputValue: "",
    });
  }

  onDeleteTask(id) {
    const deletedItemIndex = this.state.taskList.findIndex(
      (task) => task.id === id
    );
    if (deletedItemIndex === -1) return;

    const cloneTaskList = [...this.state.taskList];
    cloneTaskList.splice(deletedItemIndex, 1);

    this.setState({
      taskList: cloneTaskList,
    });
  }

  onChangeTaskStatus(id) {
    const changedItemIndex = this.state.taskList.findIndex(
      (task) => task.id === id
    );

    if (changedItemIndex === -1) return;

    const cloneTaskList = [...this.state.taskList];
    cloneTaskList[changedItemIndex].isDone = true;

    this.setState({
      taskList: cloneTaskList,
    });
  }

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.inputValue}
            onChange={(e) => {
              this.setState({
                inputValue: e.target.value,
              });
            }}
            placeholder="görev ekle"
          />

          <input
            type="checkbox"
            checked={this.state.checkboxState}
            onChange={(e) => {
              this.setState({
                checkboxState: !this.state.checkboxState,
              });
            }}
          />
          <button
            onClick={() => {
              this.addTask();
            }}
          >
            ekle
          </button>
        </div>
        <div>
          {this.state.taskList.length > 0 ? (
            <ul>
              {this.state.taskList.map((task) => (
                <div>
                  <li className={task.isDone ? "doneItem" : "listItem"}>
                    {task.value}
                  </li>
                  <button
                    onClick={() => {
                      this.onChangeTaskStatus(task.id);
                    }}
                  >
                    tamamlandı
                  </button>
                  <button
                    onClick={() => {
                      this.onDeleteTask(task.id);
                    }}
                  >
                    sil
                  </button>
                </div>
              ))}
            </ul>
          ) : null}
        </div>
      </>
    );
  }
}

export default TodoListClass;
