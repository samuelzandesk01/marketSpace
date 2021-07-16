import React from "react";
import LandingImg from "../../assets/img/icons.png";


const Banner = () => {
    return (
        <>
            <div className="container">
                <div className="mt-5 pt-5">
                    <div className="row mt-3">
                        <div className="col-xl-5">
                            <div className="text-left my-text mb-5 pt-5 pl-5 removeBannerPadding">
                                <h1 className="my-heading">
                                    World Top Theme <br />
                                    And Pluings <br />
                                    Marketplace
                                </h1>
                                <div className="pt-3">
                                    <p className="my-p font-bolder">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Veritatis, voluptates? Distinctio quidem dicta rem mollitia!
                                    </p>
                                </div>
                                <div>
                                    <form action="">
                                        <div className="d-flex bannerForm">
                                            <input type="text" className="form-control w-50 lg" />
                                            <button className="btn btn-success btn-md">
                                                Buy Now! <span className="bi bi-coin"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 mb-3">
                            <div>
                                <img
                                    src={LandingImg}
                                    width="80%"
                                    className="icons-img float-right"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Banner;
