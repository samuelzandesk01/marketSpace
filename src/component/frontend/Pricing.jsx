import React from "react";

const Pricing = () => {
    return (
        <div>
            <section className="container my-5">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="text-center mb-5">
                            <h1>Our Product Pricing</h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                <br />
                                Tempora dolorem natus, doloremque nisi pariatur placeat amet
                                illum. Provident, quod maiores.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="card shadow">
                            <div className="text-center">
                                <div className="p-5">
                                    <h5>Beginner</h5>
                                </div>
                                <span className="bi bi-box-seam my-icon"></span>

                                <div className="p-2">
                                    <sub className="font-weight-bolder">$</sub>
                                    <h1 className="price">89</h1>
                                    <div className="mt-3">
                                        <p>
                                            <span className="bi bi-check"></span> Access to 2 plugin
                                        </p>
                                        <p>
                                            <span className="bi bi-check"></span> 3 Day premium
                                            dashboard
                                        </p>
                                        <p>
                                            <span className="bi bi-check"></span> Access to 2 plugin
                                        </p>
                                        <p>
                                            <span className="bi bi-check"></span> 3 Day premium
                                            dashboard
                                        </p>
                                    </div>
                                </div>

                                <div className="my-4">
                                    <button className="btn text-primary">Start plan now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 minus-m">
                        <div className="card shadow">
                            <div className="text-center">
                                <div className="p-5">
                                    <h3 className="badge px-4 py-2 badge-lg bg-info">
                                        Professional
                                    </h3>
                                </div>
                                <span className="bi bi-award my-icon-bigger text-info"></span>

                                <div className="p-2">
                                    <sub className="font-weight-bolder">$</sub>
                                    <h1 className="price">300</h1>
                                    <div className="mt-3">
                                        <p>
                                            <span className="text-success bi bi-check"></span> Access to
                                            2 plugin
                                        </p>
                                        <p>
                                            <span className="text-success bi bi-check"></span> 3 Day
                                            premium dashboard
                                        </p>
                                        <p>
                                            <span className="text-success bi bi-check"></span> Access to
                                            2 plugin
                                        </p>
                                        <p>
                                            <span className="text-success bi bi-check"></span> 3 Day
                                            premium dashboard
                                        </p>
                                        <p>
                                            <span className="text-success bi bi-check"></span> Access to
                                            2 plugin
                                        </p>
                                        <p>
                                            <span className="text-success bi bi-check"></span> 3 Day
                                            premium dashboard
                                        </p>
                                    </div>
                                </div>

                                <div className="my-4">
                                    <button className="btn btn-outline-primary">
                                        Start plan now!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="card shadow">
                            <div className="text-center">
                                <div className="p-5">
                                    <h5>Intermidiate</h5>
                                </div>
                                <span className="bi bi-building my-icon"></span>

                                <div className="p-2">
                                    <sub className="font-weight-bolder">$</sub>
                                    <h1 className="price">120</h1>
                                    <div className="mt-3">
                                        <p>
                                            <span className="bi text-success bi-check"></span> Access to
                                            2 plugin
                                        </p>
                                        <p>
                                            <span className="bi text-success bi-check"></span> 3 Day
                                            premium dashboard
                                        </p>
                                        <p>
                                            <span className="bi text-danger bi-x"></span> Access to 2
                                            plugin
                                        </p>
                                        <p>
                                            <span className="bi text-success bi-check"></span> 3 Day
                                            premium dashboard
                                        </p>
                                        <p>
                                            <span className="bi text-danger bi-x"></span> Access to 2
                                            plugin
                                        </p>
                                        <p>
                                            <span className="bi text-success bi-check"></span> 3 Day
                                            premium dashboard
                                        </p>
                                    </div>
                                </div>

                                <div className="my-4">
                                    <button className="btn text-primary">Start plan now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing;