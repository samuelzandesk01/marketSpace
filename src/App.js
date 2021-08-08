import NavBar from "./component/frontend/NavBar";
import { BrowserRouter as MyRouter, Route, Switch } from "react-router-dom";
import Home from "./component/frontend/Home";
import MyAbout from "./component/frontend/MyAbout";
import Footer from "./component/frontend/Footer";
import Projects from "./component/frontend/Projects";
import Register from "./component/frontend/auth/Register";
import Modal from "./component/frontend/Modal";
import Admin from "./component/dashboard/Admin";
import Schdule from "./component/dashboard/Schdule";

import DoneTask from "./component/dashboard/DoneTask";

import Break from "./component/dashboard/Break";
import MeasureSpeed from "./component/dashboard/MeasureSpeed";
import React, { useState } from "react";
import Stacks from "./component/dashboard/UI/Stacks";
import Jobs from "./component/dashboard/Jobs";

export default function App(props) {
  const [opa, setOpa] = useState("100%");
  const [task, setTask] = useState("");
  const [bindTask, setBindTask] = useState([]);

  return (
    // <div>
    //   <MakePost />
    //   <PostList />
    // </div>

    <MyRouter>
      <div>
        <Modal />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <NavBar />
              <Home />
            </Route>
            <Route path="/About">
              <NavBar />
              <MyAbout />
              <Footer />
            </Route>
            <Route path="/Projects">
              <NavBar />
              <Projects />
              <Footer />
            </Route>

            <Route path="/dashboard/Admin" component={Admin} />

            <Route path="/dashboard/Schdule" children={Schdule} />

            <Route path="/dashboard/Break" component={Break} />
            <Route path="/dashboard/DoneTask">
              <DoneTask
                task={task}
                setTask={setTask}
                bindTask={bindTask}
                setBindTask={setBindTask}
                opa={opa}
                setOpa={setOpa}
              />
            </Route>
            <Route path="/dashboard/MeasureSpeed" component={MeasureSpeed} />
            <Route path="/dashboard/UI/Stacks">
              <Stacks />
            </Route>
            <Route path="/dashboard/Jobs">
              <Jobs />
            </Route>
          </Switch>
        </div>
      </div>
    </MyRouter>
  );
}
