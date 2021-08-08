import React from "react";
import { Link } from "react-router-dom";
import utils from "../../utils";

export default function Task({
  task,
  opa,
  setOpa,
  myTask,
  bindTask,
  setBindTask,
}) {
  const approveHandler = () => {
    setBindTask(bindTask.filter((task) => task !== myTask));
    // console.log(filtTask);
  };

  const doneTask = () => {
    setOpa((opa = "50%"));
  };

  return (
    <div>
      <div className="d-flex margRemove ml-4">
        <div className="mt-3">
          <input
            class="form-check-input"
            type="checkbox"
            onClick={doneTask}
            id="flexSwitchCheckDefault"
          />
        </div>
        <div style={{ opacity: opa }} className="m-3">
          {myTask}
        </div>
        {/* <taskHandler taskHandler={taskHandler} /> */}
        <Link className="taskBadge" onClick={approveHandler}>
          Approved
        </Link>
      </div>
    </div>
  );
}
