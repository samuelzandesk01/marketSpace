import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import utils from "../../../utils";
import SideBar from "../SideBar";
import staff from "./Staff";

export default function Stacks() {
  //   //const data = [
  //     "San Francisco",
  //     "New York",
  //     "Seattle",
  //     "Chicago",
  //     "Los Angeles",
  //   ];

  const [search, setSearch] = useState();
  //   const [bindsearch, setBindsearch] = useState([]);
  const filterHandler = (e) => {
    setSearch(e.target.value);
  };
  const filterForm = (e) => {
    e.preventDefault();
    setSearch(staff.filter((myFilt) => myFilt !== search));
  };
  return (
    <div>
      <div className="d-flex">
        <SideBar />
        <div className="container stackM">
          <div className="row mobileBlock">
            <div className="col-xl-6">
              <div className="m-auto">
                <button className="doneBtn doneBtnMobile">
                  Filter <i className="bi bi-filter ml-2 mt-2"></i>
                </button>
              </div>
            </div>
            <div className="col-xl-6 ml-auto">
              <form action="" onSubmit={filterForm}>
                <div className="d-flex mobileBlock  ">
                  <select
                    placeholder="Type to search..."
                    className="mySelect"
                    onChange={filterHandler}
                  >
                    <option value="">By with level</option>
                    <option value="Amatiure">Amatiure </option>
                    <option value="Profficient"> Profficient </option>
                    <option value="Proffesional"> Proffesional </option>
                    <option value="Proffesional"> Proffesional </option>
                  </select>

                  <div>
                    <button style={{ borderRadius: "0px" }} className="doneBtn">
                      Scan Through
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-xl-12 ">
              <PerfectScrollbar
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false}
              >
                <table class="table " style={{ overflowX: "auto" }}>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Photo</th>
                      <th scope="col">Name</th>
                      <th scope="col">Stack</th>
                      <th scope="col">Strenght</th>
                      <th scope="col">Email</th>
                      <th scope="col">Badge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staff.map((myStaff) => (
                      <tr className="myTr">
                        <th scope="row">{utils.random(1, 90)}</th>
                        <td>
                          <img
                            className="staff"
                            // style={{

                            // }}
                            src={myStaff.profilePhoto}
                            alt=""
                          />
                        </td>
                        <td>{myStaff.staffName}</td>
                        <td>{myStaff.date}</td>
                        <td>{myStaff.status}</td>
                        <td className={myStaff.color}>
                          <i className={myStaff.badge}></i>
                        </td>
                        <td>{myStaff.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
