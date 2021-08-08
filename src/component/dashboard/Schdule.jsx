import React, { useState } from 'react';
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import Utils from "../../utils";










const Schdule = () => {


    const num = 9;

    return (
        <div style={{ overflowX: "hidden" }}>
            <div className="d-flex">
                <SideBar />
                <div className="container" style={{ marginTop: '40px' }}>
                    <div className="d-flex">
                        <div className="text-left">
                            <h2>Your Schedule</h2>
                            <div className="pt-2 mb-4">
                                <Link className="active-link" style={{ paddingRight: '7rem', }} clas>Active Projects</Link>
                                <Link>Completed Projects</Link>
                            </div>
                        </div>

                        <div style={{ marginLeft: "auto" }}>
                            {/* onClick={OpenFile} */}
                            <div className="myFile bg-primary" data-bs-toggle="modal" data-bs-target="#addSchedule" />

                        </div>
                    </div>
                    <div className="row myContent">
                        <div className="col-xl-3 mr-5 margRemove ">
                            <div className="myCard " disabled >
                                <div className="text">
                                    <div className="d-flex">
                                        <div>
                                            <p>Product</p>
                                        </div>
                                        <div className="flex-end text-direction text-right">
                                            <b><p className="text-dark"><i className="bi bi-alarm pr-2"></i>Time schdule</p></b>
                                        </div>
                                    </div>
                                    <div className="pt-2 text-left">
                                        <b><h4>Graphics Design</h4></b>
                                        <div className="my-3">
                                            <div className="schBadge">Business Enterpreses</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="date text-center">
                                        <h4>{Utils.random(1, 8)}</h4>
                                        <div className="sub">Assemble</div>
                                    </div>
                                    <div className="date text-center">
                                        <h4>{Utils.random(1, 8)}</h4>
                                        <div className="sub">Started</div>
                                    </div>
                                    <div className="date text-center">
                                        <h4>{Utils.random(1, 8)}</h4>
                                        <div className="sub">Completed</div>
                                    </div>
                                </div>
                                <div class="mySchProgress" style={{ margin: '20px 0px 0px -20px', display: 'block' }}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: '85%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div class="progress-bar bg-primary mt-1" role="progressbar" style={{ width: '65%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mr-5 margRemove ">
                            <div className="myCard ">
                                <div className="text">
                                    <div className="d-flex">
                                        <div>
                                            <p>Product</p>
                                        </div>
                                        <div className="flex-end text-direction text-right">
                                            <b><p className="text-dark"><i className="bi bi-alarm pr-2"></i>Time schdule</p></b>
                                        </div>
                                    </div>
                                    <div className="pt-2 text-left">
                                        <b><h4>Web Development</h4></b>
                                        <div className="my-3">
                                            <div className="schBadge">Small Business Associate</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="date text-center">
                                        <h4>{Utils.random(1, 8)}</h4>
                                        <div className="sub">Assemble</div>
                                    </div>
                                    <div className="date text-center">
                                        <h4>{Utils.random(1, 8)}</h4>
                                        <div className="sub">Started</div>
                                    </div>
                                    <div className="date text-center">
                                        <h4>{Utils.random(1, 8)}</h4>
                                        <div className="sub">Completed</div>
                                    </div>
                                </div>
                                <div class="mySchProgress" style={{ margin: '20px 0px 0px -20px', display: 'block' }}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: '85%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div class="progress-bar bg-primary mt-1" role="progressbar" style={{ width: '65%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mr-5 margRemove ">
                            <div className="myCard ">
                                <div className="text">
                                    <div className="d-flex">
                                        <div>
                                            <p>Product</p>
                                        </div>
                                        <div className="flex-end text-direction text-right">
                                            <b><p className="text-dark"><i className="bi bi-alarm pr-2"></i>Time schdule</p></b>
                                        </div>
                                    </div>
                                    <div className="pt-2 text-left">
                                        <b><h4>Architectural Design</h4></b>
                                        <div className="my-3">
                                            <div className="schBadge">The Department levy</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="date text-center">
                                        <h4>{Utils.random(1, 8)}</h4>
                                        <div className="sub">Assemble</div>
                                    </div>
                                    <div className="date text-center">
                                        <h4>{Utils.random(1, 8)}</h4>
                                        <div className="sub">Started</div>
                                    </div>
                                    <div className="date text-center">
                                        <h4>{Utils.random(1, 8)}</h4>
                                        <div className="sub">Completed</div>
                                    </div>
                                </div>
                                <div class="mySchProgress" style={{ margin: '20px 0px 0px -20px', display: 'block' }}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: '85%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    <div class="progress-bar bg-primary mt-1" role="progressbar" style={{ width: '65%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row  mt-5">
                            <div className="col-xl-3 mr-5 margRemove ">
                                <div className="myCard ">
                                    <div className="text">
                                        <div className="d-flex">
                                            <div>
                                                <p>Product</p>
                                            </div>
                                            <div className="flex-end text-direction text-right">
                                                <b><p className="text-dark"><i className="bi bi-alarm pr-2"></i>Time schdule</p></b>
                                            </div>
                                        </div>
                                        <div className="pt-2 text-left">
                                            <b><h4>Product Design</h4></b>
                                            <div className="my-3">
                                                <div className="schBadge">Business Enterpreses</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="date text-center">
                                            <h4>{Utils.random(1, 8)}</h4>
                                            <div className="sub">Assemble</div>
                                        </div>
                                        <div className="date text-center">
                                            <h4>{Utils.random(1, 8)}</h4>
                                            <div className="sub">Started</div>
                                        </div>
                                        <div className="date text-center">
                                            <h4>{Utils.random(1, 8)}</h4>
                                            <div className="sub">Completed</div>
                                        </div>
                                    </div>
                                    <div class="mySchProgress" style={{ margin: '20px 0px 0px -20px', display: 'block' }}>
                                        <div class="progress-bar bg-success" role="progressbar" style={{ width: '85%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div class="progress-bar bg-primary mt-1" role="progressbar" style={{ width: '65%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 mr-5 margRemove ">
                                <div className="myCard ">
                                    <div className="text">
                                        <div className="d-flex">
                                            <div>
                                                <p>Product</p>
                                            </div>
                                            <div className="flex-end text-direction text-right">
                                                <b><p className="text-dark"><i className="bi bi-alarm pr-2"></i>Time schdule</p></b>
                                            </div>
                                        </div>
                                        <div className="pt-2 text-left">
                                            <b><h4>Web Design</h4></b>
                                            <div className="my-3">
                                                <div className="schBadge">Small Business Associate</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div className="date text-center">
                                            <h4>{Utils.random(1, 8)}</h4>
                                            <div className="sub">Assemble</div>
                                        </div>
                                        <div className="date text-center">
                                            <h4>{Utils.random(1, 8)}</h4>
                                            <div className="sub">Started</div>
                                        </div>
                                        <div className="date text-center">
                                            <h4>{Utils.random(1, 8)}</h4>
                                            <div className="sub">Completed</div>
                                        </div>
                                    </div>
                                    <div class="mySchProgress" style={{ margin: '20px 0px 0px -20px', display: 'block' }}>
                                        <div class="progress-bar bg-success" role="progressbar" style={{ width: '85%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        <div class="progress-bar bg-primary mt-1" role="progressbar" style={{ width: '65%', height: '20px' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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


export default Schdule;