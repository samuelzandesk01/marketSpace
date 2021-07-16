import React from "react";
import SideImg from "../../assets/img/sided-img.png"

const BussinessGrowth = () => {
    return (
        <>
            <section class="container mt-5 pt-5">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="side-img">
                            <img src={SideImg} class="myFluid img-responsive" alt="" />
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="text-left my-pt">
                            <h2 className="my-heading">Keep your business <br /> growth and sales</h2>
                            <div class="pt-3">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nihil nisi, dolore in veniam
                                    repellendus a iste tempora, ipsa pariatur id consequuntur voluptatum voluptatibus fugit provident eos
                                    quos soluta accusantium?</p>
                                <div class="mt-3">
                                    <button class="my-btn-style btn btn-outline-success">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default BussinessGrowth;