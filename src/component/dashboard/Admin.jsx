import React, { useState } from "react";
import "./admin.css";
import Calendar from "./UI/Calendar";
import { Link } from "react-router-dom";
import Job from "./Job";
import Schdule from "./Schdule";
import SideBar from "./SideBar";




export default function Admin() {
    const [jobs, setJobs] = useState(Job)

    return (
        <div>
            <main className='scheduleDashboard'>
                <div class="d-flex allContent">
                    <SideBar />
                    <div>
                        <div class="row">
                            <div class="col-xl-4">
                                <div class="row justify-content-center">
                                    <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 taskMobile">
                                        <div class="text-left mt-5">
                                            <div class="dashboardText">
                                                <h2>
                                                    Your <br />
                                                    Dashboard
                                                </h2>
                                                <p class="py-4 text-dark font-bold">Today's Timeline</p>
                                            </div>
                                            <div class="task ">
                                                <div class="my-4">
                                                    <Link to="DoneTask" >
                                                        <div class="myBadge ">
                                                            <div class="d-flex">
                                                                <div class="pl-2">
                                                                    <i class="bi bi-bell-slash my-font m-2"></i>
                                                                </div>
                                                                <div class="ml-4 mt-1">
                                                                    <p>Done Task</p>
                                                                </div>
                                                                <div class="ml-5 mt-1 pr-1">
                                                                    <p>6:00pm</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    {/* <Link>
                                                        <div class="myBadge">
                                                            <div class="d-flex">
                                                                <div class="pl-2">
                                                                    <i class="bi bi-bell my-font"></i>
                                                                </div>
                                                                <div class="ml-4 mt-1">
                                                                    <p>Appointment</p>
                                                                </div>
                                                                <div class="ml-5 mt-1 pr-1">
                                                                    <p>3:00pm</p>
                                                                </div>
                                                            </div>
                                                        </div></Link> */}
                                                    <Link to="Schdule">
                                                        <div class="myBadge">
                                                            <div class="d-flex">
                                                                <div class="pl-2">
                                                                    <i class="bi bi-app-indicator my-font m-2"></i>
                                                                </div>
                                                                <div class="ml-4 mt-1">
                                                                    <p>Schedule</p>
                                                                </div>
                                                                <div class="ml-5 mt-1 pr-1">
                                                                    <p>5:00pm</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link to="Break">
                                                        <div class="myBadge bg-white">
                                                            <div class="d-flex">
                                                                <div class="pl-2">
                                                                    <i class="bi bi-alarm my-font m-2 "></i>
                                                                </div>
                                                                <div class="ml-4 mt-1">
                                                                    <p>Break</p>
                                                                </div>
                                                                <div class="ml-5 mt-1 pr-1">
                                                                    <p>9:00pm</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link>
                                                        <div class="myBadge">
                                                            <div class="d-flex">
                                                                <div class="pl-2">
                                                                    <i class="bi bi-controller my-font m-2"></i>
                                                                </div>
                                                                <div class="ml-4 mt-1">
                                                                    <p>Free Period</p>
                                                                </div>
                                                                <div class="ml-5 mt-1 pr-1">
                                                                    <p>9:00pm</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="btnContainerMobile" >
                                                <Link to="" class="doneBtn">
                                                    <i class="bi bi-bookmark-check"></i> End today's shift
                                                </Link>
                                                <Link to="" class="doneBtn bg-white mt-3 text-primary">
                                                    <i class="bi bi-alarm"></i> Set an Alarm</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-8 mt-5">
                                <div class="row justify-content-center" >
                                    <div class="col-xl-4 col-lg-4 bg-white col-md-12 col-sm-12">
                                        <div class="bg-white">
                                            <div class=" bg-white cal">
                                                <div class="text-left bg-white w-100">
                                                    <h4 class="text-primary">July 02 2021</h4>
                                                </div>
                                                <div>
                                                    <Calendar />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12" style={{ marginLeft: "5px" }}>
                                        <div class="womanCard rounded">
                                            <div class="text-left">
                                                <div class="topText">
                                                    <h3>Hello, Angel!</h3>
                                                    <div class="pt-2">
                                                        <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
                                                            Aperiam, pariatur?</p>
                                                    </div>
                                                    <div class="mt-2">
                                                        <Link to="" class="viewBtn">
                                                            <i class="bi bi-file-bar-graph"></i> Complete
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12 py-4 px-4 " style={{ marginLeft: "10px", marginTop: "40px" }}>
                                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="row">
                                                    {jobs.map(JobId =>
                                                        <div className="col-xl-3 col-lg-3 text-center col-md-12 col-sm-12" key={JobId}>
                                                            <div className="taskCard">
                                                                <div>
                                                                    {JobId.link}
                                                                    <div>
                                                                        <b>
                                                                            <p className="pt-4 navText  font-weight-bold"> {JobId.name} </p>
                                                                            <p> {Date()} </p>
                                                                        </b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>)}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="montly">
                                        <div class="text-left">
                                            <div class="pt-3">
                                                <h4>Montly Report</h4>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="reportBadge shadow rounded">
                                                    <div class="d-flex pt-4 justify-content-center">
                                                        <div>
                                                            <Link to="/" class="bi bi-table my-font"></Link>
                                                        </div>
                                                        <div class="ml-4 mt-2">
                                                            <div class="myProgress"></div>
                                                        </div>
                                                        <div class="ml-4">
                                                            <p class=" navText">90% </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 mt-3">
                                                <div class="reportBadge shadow rounded">
                                                    <div class="d-flex pt-4 justify-content-center">
                                                        <div>
                                                            <Link to="/" class="bi bi-table my-font"></Link>
                                                        </div>
                                                        <div class="ml-4 mt-1">
                                                            <div class="myProgress"></div>
                                                        </div>
                                                        <div class="ml-4">
                                                            <p class=" navText">80% </p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 mt-3">
                                                <div class="reportBadge shadow rounded">
                                                    <div class="d-flex pt-4 justify-content-center">
                                                        <div>
                                                            <Link to="/" class="bi bi-table my-font"></Link>
                                                        </div>
                                                        <div class="ml-4 mt-1">
                                                            <div class="myProgress"></div>
                                                        </div>
                                                        <div class="ml-4">
                                                            <p class=" navText">40% </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 mt-3">
                                                <div class="reportBadge shadow rounded">
                                                    <div class="d-flex pt-4 justify-content-center">
                                                        <div>
                                                            <Link to="/" class="bi bi-table my-font"></Link>
                                                        </div>
                                                        <div class="ml-4 mt-2">
                                                            <div class="myProgress"></div>
                                                        </div>
                                                        <div class="ml-4">
                                                            <p class=" navText">50% </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}
