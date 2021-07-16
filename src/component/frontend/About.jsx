const AboutUs = () => {
    return (
        <div className="container">
            <div class="mt-5 pt-5 mediaText">
                <div class="row mt-3">
                    <div class="col-xl-7    ">
                        <div class="text-left my-text mb-5 pt-5 pl-5">
                            <h1 class="my-heading-2">
                                Why we do this? What keeps us
                                <span class="text-info"> Marketplace?</span>
                            </h1>
                            <div class="pt-3">
                                <p class="my-p font-bolder">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Veritatis, voluptates? Distinctio quidem dicta rem mollitia!
                                </p>
                            </div>

                            <div class="play bg-white  shadow text-center">
                                <div>
                                    <a class="my-icon" type="button" data-bs-toggle="modal" data-bs-target="#watchUs"><span class="bi bi-play-circle text-primary"></span></a>
                                    <p>Watch Us</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs;