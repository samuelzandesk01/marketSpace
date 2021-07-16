import React from "react";
import Duration from "./Duration";
import { Link } from "react-router-dom";


const TextStyle = {
    margin: "40px 0px 0px 90px",
}

const Whoweare = () => {
    return (
        <>
            <section className="about-us container " >
                <div className="row">
                    <div className="col-xl-2 ml-3">
                        <div className="line-top "></div>
                    </div>
                    <div className="col-xl-8">
                        <div className="text-left " style={TextStyle}>
                            <h2 className="text-dark">About Us</h2>
                            <div className="pt-3">
                                <p className="my-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam
                                    sed laboriosam. Adipisci, quae sed quam quia cum obcaecati reprehenderit doloribus
                                    tempore veniam, quaerat a quos porro fuga voluptas eligendi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div className="text-rotate">
                            <Link to="/" data-bs-toggle="modal" data-bs-target="#readMore" className="hor-text">Read More</Link>

                            <div className="horizontal-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="container about-us" >
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card shadow">
                            <div className="text-center half-circle">
                                <div className="p-5 m-3">
                                    <h3 className="text-dark">Heading</h3>
                                    <p className="">2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card shadow">
                            <div className="text-center">
                                <div className="p-4 mb-4">
                                    <span className="bi bi-globe2 my-icon"></span>
                                    <h3>14$ / Month</h3>
                                    <p>Measurement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card shadow">
                            <div className="text-center">
                                <div className="p-4 mb-4">
                                    <span className="bi bi-wallet my-icon"></span>
                                    <h3>14$ / Month</h3>
                                    <p>Measurement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Duration />


        </>
    )
}

export default Whoweare;