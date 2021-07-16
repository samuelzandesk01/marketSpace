import React from "react";

const serviceItem = [
    {
        id: 0,
        icon: <i className="bi bi-egg"></i>,
        heading: "Easy Payment",
        dis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sint."
    },

    {
        id: 1,
        icon: <i class="bi bi-briefcase"></i>,
        heading: "Easy Payment",
        dis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sint."
    },

    {
        id: 2,
        icon: <i class="bi bi-controller"></i>,
        heading: "Easy Payment",
        dis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sint."
    },

]

const Services = () => {
    return (
        <>
            <div class="container mt-5 ">
                <div class="row pt-5 justify-content-center">
                    {serviceItem.map(services =>
                        <div key={services} className="col-xl-3 bg-white rounded m-4 py-5 px-5 slide-shape text-center shadow card-hover" >
                            <div className="icon">
                                {services.icon}
                            </div>
                            <div class="pt-3">
                                <h4 className="text-info">{services.heading}</h4>
                                <p>{services.dis}</p>
                            </div>
                        </div>)}
                </div>

            </div>
        </>
    )
}

export default Services;