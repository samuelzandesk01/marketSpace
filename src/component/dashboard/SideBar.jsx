import React, { useState } from "react";
import { Link } from "react-router-dom";
import Admin from "./Admin";

function MySideBar() {
  // const [myModal, setModal] = useState(false)

  const menuStyle = {
    display: "block",
    visibility: "visible",
  };

  const showModal = () => {
    document.getElementById("mobileMenu").style = menuStyle;
  };

  return (
    <div>
      <div class="">
        <div className="hamBurger" onClick={showModal}></div>

        <div class="mobileSidebar" id="mobileMenu">
          <div class="">
            <div class="">
              <ul class="text-center ">
                <div className="">
                  <Link
                    to="/dashboard/Admin"
                    class="navIcon bi bi-table my-font"
                  ></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/dashboard/Admin" class="pt-4 navText">
                      Home
                    </Link>
                  </div>
                </div>
                <div class="mt-4">
                  <Link
                    to="/dashboard/MeasureSpeed"
                    class="navIcon bi bi-speedometer my-font"
                  ></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/" class="pt-4 navText">
                      Measure Speeds
                    </Link>
                  </div>
                </div>
                <div class="mt-4">
                  <Link
                    to="/dashboard/UI/Stacks"
                    class="navIcon bi bi-stack my-font"
                  ></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/dashboard/UI/Stacks" class="pt-4 navText">
                      Stacks
                    </Link>
                  </div>
                </div>
                <div class="mt-4">
                  <Link to="/" class="navIcon bi bi-sliders my-font"></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/" class="pt-4 navText">
                      Change
                    </Link>
                  </div>
                </div>
                <div class="mt-4">
                  <Link
                    to="/dashboard/Jobs"
                    class="navIcon bi bi-briefcase my-font"
                  ></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/dashboard/Jobs" class="pt-4 navText">
                      Jobs
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div class="sidebar">
          <div class="navContainer">
            <div class="myNav">
              <ul class="text-center myNav">
                <div className="mobileNav">
                  <Link
                    to="/dashboard/Admin"
                    class="navIcon bi bi-table my-font"
                  ></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/dashboard/Admin" class="pt-4 navText">
                      Home
                    </Link>
                  </div>
                </div>
                <div class="mt-4">
                  <Link
                    to="/dashboard/MeasureSpeed"
                    class="navIcon bi bi-speedometer my-font"
                  ></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/dashboard/MeasureSpeed" class="pt-4 navText">
                      Measure Speeds
                    </Link>
                  </div>
                </div>
                <div class="mt-4">
                  <Link
                    to="/dashboard/UI/Stacks"
                    class="navIcon bi bi-stack my-font"
                  ></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/dashboard/UI/Stacks" class="pt-4 navText">
                      Stacks
                    </Link>
                  </div>
                </div>
                <div class="mt-4">
                  <Link to="/" class="navIcon bi bi-sliders my-font"></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/" class="pt-4 navText">
                      Change
                    </Link>
                  </div>
                </div>
                <div class="mt-4">
                  <Link
                    to="/dashboard/Jobs"
                    class="navIcon bi bi-briefcase my-font"
                  ></Link>
                  <br />
                  <div class="pt-4">
                    <Link to="/dashboard/Jobs" class="pt-4 navText">
                      Jobs
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SideBar() {
  return (
    <MySideBar
    // onClick={() => setModal(true)}
    />
  );
}
