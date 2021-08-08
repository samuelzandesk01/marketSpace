import React from "react";
import { Link } from "react-router-dom";
import utils from "../../utils";
import Task from "./Task";

export default function TaskList({
  task,
  opa,
  setOpa,
  setTask,
  bindTask,
  setBindTask,
}) {
  const taskHandler = () => {
    utils.range(1, 2).map((taskId) => <Link>{taskId}</Link>);
  };
  return (
    <div>
      {bindTask.map((myTask) => (
        <Task
          opa={opa}
          setOpa={setOpa}
          task={task}
          myTask={myTask}
          setTask={setTask}
          bindTask={bindTask}
          setBindTask={setBindTask}
        />
      ))}
    </div>
  );
}
