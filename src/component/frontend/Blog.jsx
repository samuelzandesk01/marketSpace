import React, { useState } from 'react';
import FirstPost from "../../assets/img/project/quality.jpg";
import SecondPost from "../../assets/img/project/opacitydesigngroup.com-1.jpg";
import ThirdPost from "../../assets/img/project/project-2.jpg";

const BlogPost = [
    {
        id: 0,
        img: <img src={FirstPost} alt="" className="img-fluid rounded" srcset="" />,
        postTitle: "5 Tips on Flutter ",
        postContent: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis placeat ullam nesciunt similique sit earum rem minima asperiores temporibus."
    },

    {
        id: 1,
        img: <img src={SecondPost} className="img-fluid rounded" alt="" srcset="" />,
        postTitle: "Become a Developer",
        postContent: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis placeat ullam nesciunt similique sit earum rem minima asperiores temporibus."
    },

    {
        id: 2,
        img: <img src={ThirdPost} className="img-fluid rounded" alt="" srcset="" />,
        postTitle: "React Native",
        postContent: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis placeat ullam nesciunt similique sit earum rem minima asperiores temporibus."
    },
]


export default function Blog() {

    const [blogPost, setBlogPost] = useState(BlogPost);

    return (
        <div>
            <section className="blog my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="text-left">
                                <h2>Our Blog Posts</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Obcaecati magnam harum tempore minima ab labore?
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 text-right">
                            <div className="">
                                <button className="btn btn-outline-primary text-right btn-lg ml-5">
                                    View All Posts
                                </button>
                            </div>
                        </div>

                        {blogPost.map(blogsId =>
                            <div className="col-xl-4" key={blogsId} >
                                <div className="card p-3 shadow">
                                    <div className="card-top">
                                        {blogsId.img}
                                    </div>
                                    <div className="text-left mt-3">
                                        <a href="#">
                                            <h3>{blogsId.postTitle}</h3>
                                        </a>

                                        <div className="pt-3">
                                            <p className="my-p">
                                                {blogsId.postContent}
                                            </p>
                                        </div>

                                        <div className="mt-3">
                                            <a href="" className="btn btn-primary btn-lg"
                                            >Read More <i className="bi bi-envelop"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>)}

                        {/* <div className="col-xl-4">
                            <div className="card p-3 shadow">
                                <div className="card-top">
                                    <img
                                        src={FirstPost}
                                        className="img-fluid rounded"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3">
                                    <a href="#">
                                        <h3>Post Title</h3>
                                    </a>

                                    <div className="pt-3">
                                        <p className="my-p">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Laborum corporis placeat ullam nesciunt similique sit
                                            earum rem minima asperiores temporibus.
                                        </p>
                                    </div>

                                    <div className="mt-3">
                                        <a href="" className="btn btn-primary btn-lg"
                                        >Read More <i className="bi bi-envelop"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card p-3 shadow">
                                <div className="card-top">
                                    <img
                                        src={SecondPost}
                                        className="img-fluid rounded"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3">
                                    <a href="#">
                                        <h3>Post Title</h3>
                                    </a>

                                    <div className="pt-3">
                                        <p className="my-p">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Laborum corporis placeat ullam nesciunt similique sit
                                            earum rem minima asperiores temporibus.
                                        </p>
                                    </div>

                                    <div className="mt-3">
                                        <a href="" className="btn btn-primary btn-lg"
                                        >Read More <i className="bi bi-envelop"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card p-3 shadow">
                                <div className="card-top">
                                    <img
                                        src={ThirdPost}
                                        className="img-fluid rounded"
                                        alt=""
                                    />
                                </div>
                                <div className="text-left mt-3">
                                    <a href="#" className="text-dark">
                                        <h3>Post Title</h3>
                                    </a>

                                    <div className="pt-3">
                                        <p className="my-p">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Laborum corporis placeat ullam nesciunt similique sit
                                            earum rem minima asperiores temporibus.
                                        </p>
                                    </div>

                                    <div className="mt-3">
                                        <a href="" className="btn btn-primary btn-lg"
                                        >Read More <i className="bi bi-envelop"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}
