import React from "react";
import { useState } from "react";

export default function CreateTask({ task, setTask, bindTask, setBindTask }) {
  const taskInput = (e) => {
    setTask(e.target.value);
  };

  const taskHandler = (e) => {
    e.preventDefault();
    setBindTask([...bindTask, task]);
    // setTask("");
  };

  return (
    <div>
      <div>
        <div className="">
          <form action="" className="d-flex" onSubmit={taskHandler}>
            <div class="input-group mb-3">
              {/* {task} */}
              <input
                type="text"
                class="form-control"
                value={task}
                onChange={taskInput}
                required
                placeholder="Add Todo"
                aria-describedby="basic-addon2"
              />
            </div>

            <div>
              <button
                style={{ width: "150px", marginLeft: "30px" }}
                className="btn btn-primary"
              >
                Add task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
