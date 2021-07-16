import React, { useState } from 'react';
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import Utils from "../../utils";


const DoneTask = () => {


    const num = 9;

    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="d-flex">
                <SideBar />
                <div className="container" style={{ marginTop: '40px' }}>
                    <div className="d-flex">
                        <div className="text-left">
                            <h2>Today's Task</h2>
                            <div className="pt-2 mb-4">
                                <div className="d-flex">
                                    <div className="myLink">
                                        <i className="count"> {Utils.random(1, 8)} </i><Link className="" >   All</Link>
                                    </div>
                                    <div className="myLink">
                                        <Link className="active-link">Important</Link>
                                    </div>
                                    <div className="myLink">
                                        <i className="count"> {Utils.random(1, 8)} </i><Link>Note</Link>
                                    </div>
                                    <div className="myLink">
                                        <i className="count"> {Utils.random(1, 8)} </i><Link>Links</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginLeft: "auto" }}>
                            {/* onClick={OpenFile} */}
                            <Link to="/dashboard/Admin" className=" my-font text-dark" ><i className="bi bi-arrow-left text-dark"></i></Link>

                        </div>
                    </div>
                    <div className="row myContent mt-5 mb-5">
                        <div className="col-xl-7 mr-5 margRemove bg-white py-4 px-5 shadow  ">
                            <div className="d-flex margRemove ml-4">
                                <div className="mt-3">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                                <div className="m-3">
                                    Create Useflow Social Application Deisng
                                </div>
                                <Link className="taskBadge">
                                    Approved
                                </Link>
                            </div>
                            <div className="d-flex margRemove ml-4">
                                <div className="mt-3">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                                <div className="m-3">
                                    Create Useflow Social Application Deisng
                                </div>
                                <Link className="taskBadge bg-warning text-white">
                                    Approved
                                </Link>
                            </div>
                            <div className="d-flex margRemove ml-4">
                                <div className="mt-3">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                                <div className="m-3">
                                    Create Useflow Social Application Deisng
                                </div>
                                <Link className="taskBadge">
                                    Approved
                                </Link>
                            </div>
                            <div className="d-flex margRemove ml-4">
                                <div className="mt-3">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                                <div className="m-3">
                                    Create Useflow Social Application Deisng
                                </div>
                                <Link className="taskBadge bg-primary text-white">
                                    In Progress
                                </Link>
                            </div>
                            <div className="d-flex ml-4">
                                <div className="mt-3">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked />
                                </div>
                                <div className="m-3">
                                    Create Useflow Social Application Deisng
                                </div>
                                <Link className="taskBadge">
                                    Approved
                                </Link>
                            </div>
                            <div className="d-flex ml-4">
                                <div className="mt-3">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                </div>
                                <div className="m-3">
                                    Create Useflow Social Application Deisng
                                </div>
                                <Link className="taskBadge">
                                    Approved
                                </Link>
                            </div>
                            <div className="mt-4">
                                <div className="text-left">
                                    <b><h3>Upcoming Tasks</h3></b>
                                </div>
                                <div className="d-flex ml-4">
                                    <div className="mt-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                    <div className="m-3">
                                        Create Useflow Social Application Deisng
                                    </div>
                                    <Link className="taskBadge">
                                        Approved
                                    </Link>
                                </div>
                                <div className="d-flex ml-4">
                                    <div className="mt-3">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    </div>
                                    <div className="m-3">
                                        Create Useflow Social Application Deisng
                                    </div>
                                    <Link className="taskBadge bg-info text-white">
                                        In Progress
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 bg-white shadow addMargin py-3 px-4">
                            <div className="text-left">
                                <h2>Today's Task</h2>
                                <div className="mt-4">
                                    <div className="myTaskCard">
                                        <div className="d-block">
                                            <div>06:30 | 08:39</div>
                                            <div className="pt-2">
                                                <p>Product Development  Team</p>
                                            </div>
                                        </div>
                                        <div className="d-flex userOne">
                                            <div className="user"></div>
                                            <div className="user"></div>
                                            <div className="user"></div>
                                            <div className="user"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="myTaskCard doneTask">
                                        <div className="d-block">
                                            <div>06:30 | 08:39</div>
                                            <div className="pt-2">
                                                <p>Social Product Review</p>
                                            </div>
                                        </div>
                                        <div className="d-flex userTwo">
                                            <div className="user"></div>
                                            <div className="user"></div>
                                            <div className="user"></div>
                                            <div className="user"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="myTaskCard pendingTask">
                                        <div className="d-block">
                                            <div>06:30 | 08:39</div>
                                            <div className="pt-2">
                                                <p>Product Planning</p>
                                            </div>
                                        </div>
                                        <div className="d-flex userThree">
                                            <div className="user"></div>
                                            <div className="user"></div>
                                            <div className="user"></div>
                                            <div className="user"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </div>
    )
}


export default DoneTask;