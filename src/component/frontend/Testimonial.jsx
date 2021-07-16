import React from "react";
import first from "../../assets/img/clients.png";
import second from "../../assets/img/clients/testimonial2.jpg";
import third from "../../assets/img/clients/testimonial3.jpg";

const Testimonial = () => {
    return (
        <>
            <section class="testimonial">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5">
                            <div class="mt-4">
                                <img src={first} width="80%" alt="" />
                            </div>
                        </div>
                        <div class="col-xl-7">
                            <div class="mt-5 pt-5">
                                <div
                                    id="carouselExampleIndicators"
                                    class="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div class="carousel-indicators mt-5">
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0"
                                            class="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"
                                        ></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item mb-4 active">
                                            <div class="text-left">
                                                <h1
                                                    class="pl-5 text-primary bi bi-chat-left-quote"
                                                ></h1>
                                                <div class="pt-3">
                                                    <p class="my-p">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing
                                                        elit. Facere voluptatem unde sunt autem, vitae
                                                        corrupti! Harum alias dolorem illum atque
                                                        dignissimos officia eligendi nulla facere.
                                                    </p>
                                                </div>

                                                <div class="d-flex pt-3">
                                                    <div class="m-1">
                                                        <img
                                                            src={second}
                                                            class="rounded-circle"
                                                            width="70"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="m-1">
                                                        <h3 class="text-primary">Tylor Halo</h3>
                                                        <p class="my-p">
                                                            <i
                                                            >Lorem ipsum dolor sit amet consectetur,
                                                                adipisicing elit. Soluta, quam.</i
                                                            >
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="text-left">
                                                <h1
                                                    class="pl-5 text-primary bi bi-chat-left-quote"
                                                ></h1>
                                                <div class="pt-3">
                                                    <p class="my-p">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing
                                                        elit. Facere voluptatem unde sunt autem, vitae
                                                        corrupti! Harum alias dolorem illum atque
                                                        dignissimos officia eligendi nulla facere.
                                                    </p>
                                                </div>

                                                <div class="d-flex pt-3">
                                                    <div class="m-1">
                                                        <img
                                                            src={third}
                                                            class="rounded-circle"
                                                            width="70"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="m-1">
                                                        <h3 class="text-primary">Dwayne Johnson</h3>
                                                        <p class="my-p">
                                                            <i
                                                            >Lorem ipsum dolor sit amet consectetur,
                                                                adipisicing elit. Soluta, quam.</i
                                                            >
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="text-left">
                                                <h1
                                                    class="pl-5 text-primary bi bi-chat-left-quote"
                                                ></h1>
                                                <div class="pt-3">
                                                    <p class="my-p">
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing
                                                        elit. Facere voluptatem unde sunt autem, vitae
                                                        corrupti! Harum alias dolorem illum atque
                                                        dignissimos officia eligendi nulla facere.
                                                    </p>
                                                </div>
                                                <div class="d-flex pt-3">
                                                    <div class="m-1">
                                                        <img
                                                            src={third}
                                                            class="rounded-circle"
                                                            width="70"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="m-1">
                                                        <h3 class="text-primary">Ariana Benson</h3>
                                                        <p class="my-p">
                                                            <i
                                                            >Lorem ipsum dolor sit amet consectetur,
                                                                adipisicing elit. Soluta, quam.</i
                                                            >
                                                        </p>
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
            </section>
        </>
    )
}

export default Testimonial;