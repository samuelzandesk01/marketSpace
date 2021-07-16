import React from "react";
import Jubilation from "../../assets/img/jubilation-guy-img.png";

const FAQ = () => {
    return (
        <>
            <section class="container">
                <div class="row">
                    <div class="col-xl-6">
                        <div class="pt-5">
                            <img src={Jubilation} alt="" class="img-responsive myFluid" />
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="mt-5 pt-5">
                            <div class="py-3">
                                <h3 className="my-heading">Our FAQ's</h3>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            Read More
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes control the
                                            overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                                            can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Read More
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes control the
                                            overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                                            can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Read More
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes control the
                                            overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this
                                            with custom CSS or overriding our default variables. It's also worth noting that just about any HTML
                                            can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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


export default FAQ;