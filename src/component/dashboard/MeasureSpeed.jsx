import React, { Component } from 'react';
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import Utils from "../../utils";

import { Bar, Line, Pie } from "react-chartjs-2"

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    "React Js",
                    "Node Js",
                    "Mongo DB",
                    "Scss",
                    "Sass"
                ],
                datasets: [
                    {
                        label: [`Staff Strenght`],
                        data: [12344, 94840, 84949, 74840, 83933],
                        backgroundColor: [
                            "#4361ee",
                            "#4895ef",
                            "#ffb703",
                            "#83c5be",
                            "#006d77"
                        ]
                    },

                ]
            }

        }
    }

    static deafaultProps = {
        displayTitle: true,
        displayLegends: true,
        legendPosition: "right",
        fontSize: 30
    }


    render() {

        const options = {
            title: {
                display: this.props.displayTitle,
                text: "Measure Staff Speed",
                fontSize: this.props.fontSize
            },
            legend: {
                display: this.props.displayLegends,
                position: this.props.legendPosition
            }
        }

        return (
            <div className="chart" >
                <Line className="myMeasure" data={this.state.chartData} options={options} />
            </div>
        )
    }


}


class MyPie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    "React Js",
                    "Node Js",
                    "Mongo DB",
                    "Scss",
                    "Sass",
                    "Material Ui",
                    "Boostrap CSS"
                ],
                datasets: [
                    {
                        label: [`Project Progress `],
                        data: [12344, 94840, 84949, 74840, 83933, 8598, 75887],
                        backgroundColor: [
                            "#4361ee",
                            "#4895ef",
                            "#ffb703",
                            "#83c5be",
                            "#006d77",
                            "#005677"
                        ]
                    },

                ]
            }

        }
    }

    static deafaultProps = {
        displayTitle: true,
        displayLegends: true,
        legendPosition: "right",
        fontSize: 30
    }


    render() {

        const options = {
            title: {
                display: this.props.displayTitle,
                text: "Measure Staff Speed",
                fontSize: this.props.fontSize
            },
            legend: {
                display: this.props.displayLegends,
                position: this.props.legendPosition
            }
        }

        return (
            <div className="chart" >
                <Bar className="myMeasure" data={this.state.chartData} options={options} />
            </div>
        )
    }


}


export default function MeasureSpeed() {
    return (
        <div>
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
                            <div className="col-xl-7 mr-5 margRemove ">
                                <div className="row ">
                                    <div className="col-xl-6 my-5 pb-4 ">
                                        <div className="bg-white rounded shadow">
                                            <div className="d-flex">
                                                <div className="text-left m-2">
                                                    <div className="pl-4 py-2">
                                                        <div>Total Application</div>
                                                        <h3>3488</h3>
                                                        <div className="pt-3">
                                                            <Link className="bi bi-bookmark-check" style={{ fontSize: "20px" }}> Random Text </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 my-5 pb-4 ">
                                        <div className="bg-white rounded shadow">
                                            <div className="d-flex">
                                                <div className="text-left m-2">
                                                    <div className="pl-4 py-2">
                                                        <div>Shortlisted Project</div>
                                                        <h3>3488</h3>
                                                        <div className="pt-3">
                                                            <Link className="bi bi-award text-warning" style={{ fontSize: "20px" }}> Random Text </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Chart title="Measure Staff Speed" className="mt-5" legendPosition="bottom" fontSize={"20px"} displayTitle={true} />
                                <div className="mt-4">
                                    <MyPie title="Measure Staff Speed" className="mt-5" legendPosition="bottom" fontSize={"20px"} displayTitle={true} />

                                </div>
                            </div>
                            <div className="col-xl-4  mt-5">
                                <div className="bg-white  rounded shadow">
                                    <div className="d-flex">
                                        <div className="text-left m-2">
                                            <div className="pl-4 py-2">
                                                <div>Shortlisted Project</div>
                                                <h3>3488</h3>
                                                <div className="pt-3">
                                                    <Link className="bi bi-bullseye text-warning" style={{ fontSize: "20px" }}> Random Text </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className="bg-white shadow">
                                        <div className="d-flex p-3">
                                            <div><p>Acqusitions</p></div>
                                            <div style={{ marginLeft: 'auto' }}>
                                                <p> <i className="bi bi-calendar-day text-primary cursor-pointer"></i> Month <i className="bi bi-chevron-down"></i> </p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="dot"></div>
                                            <div class="" style={{ width: "70%", margin: "25px 10px", height: "1rem", padding: "0px" }}>
                                                <div class="progress-bar bg-info" role="progressbar" style={{ width: '65%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="m-3"><h4 className="pl-4">70%</h4></div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="dot"></div>
                                            <div class="" style={{ width: "70%", margin: "25px 10px", height: "1rem", padding: "0px" }}>
                                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: '65%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="m-3"><h4 className="pl-4">80%</h4></div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="dot bg-warning"></div>
                                            <div class="" style={{ width: "70%", margin: "25px 10px", height: "1rem", padding: "0px" }}>
                                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: '65%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="m-3"><h4 className="pl-4">60%</h4></div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="dot bg-success"></div>
                                            <div class="" style={{ width: "70%", margin: "25px 10px", height: "1rem", padding: "0px" }}>
                                                <div class="progress-bar bg-success" role="progressbar" style={{ width: '65%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="m-3"><h4 className="pl-2">70%</h4></div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="dot"></div>
                                            <div class="" style={{ width: "70%", margin: "25px 10px", height: "1rem", padding: "0px" }}>
                                                <div class="progress-bar bg-info" role="progressbar" style={{ width: '65%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="m-3"><h4 className="pl-4">70%</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >

            </div>
        </div>
    )
}
