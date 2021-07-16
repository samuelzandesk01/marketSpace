import React from 'react';
import MinMargin from './MinusMargin';
import Rate from './Rate';
import Testimonial from './Testimonial';
import Themes from './Themes';




const Project = [
    {
        id: 0,
        projectTitle: "Consulting Application",
        built: "React Js & Node",
        img: <img />,
        date: Date(),
        stars: <i className="bi bi-star" />
    },

    {

    }
]


export default function Projects() {
    return (
        <div className="">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4">
                        <div className="projectOne project"></div>
                        <div className="projectText">
                            <p className="projectSub">Classic</p>
                            <h3>Consulting Application</h3>
                            <div>
                                <p>Redux Apollo</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="projectTwo project"></div>
                        <div className="projectText">
                            <p className="projectSub">Classic</p>
                            <h3>Consulting Application</h3>
                            <div>
                                <p>Redux Apollo</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-5 justify-content-center">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="projectTwo project"></div>
                            <div className="projectText">
                                <p className="projectSub">Classic</p>
                                <h3>Consulting Application</h3>
                                <div>
                                    <p>Redux Apollo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="projectTwo project"></div>
                            <div className="projectText">
                                <p className="projectSub">Classic</p>
                                <h3>Consulting Application</h3>
                                <div>
                                    <p>Redux Apollo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="projectTwo project"></div>
                            <div className="projectText">
                                <p className="projectSub">Classic</p>
                                <h3>Consulting Application</h3>
                                <div>
                                    <p>Redux Apollo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="projectTwo project"></div>
                            <div className="projectText">
                                <p className="projectSub">Classic</p>
                                <h3>Consulting Application</h3>
                                <div>
                                    <p>Redux Apollo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="projectTwo project"></div>
                            <div className="projectText">
                                <p className="projectSub">Classic</p>
                                <h3>Consulting Application</h3>
                                <div>
                                    <p>Redux Apollo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <div className="projectTwo project"></div>
                            <div className="projectText">
                                <p className="projectSub">Classic</p>
                                <h3>Consulting Application</h3>
                                <div>
                                    <p>Redux Apollo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Themes className="" />
            </div>
            <Rate className="" />
            <Testimonial style={MinMargin} />
        </div>
    )
}
