import React from "react";

const durationItem = [
    {
        id: 0,
        textHeading: "Recent",
        icon: <span className="bi bi-globe2 my-icon"></span>,
        year: new Date().getMonth() + " " + new Date().getDate() + " " + new Date().getFullYear()
    },
    {
        id: 1,
        textHeading: "Starred",
        icon: <span className="bi bi-globe2 my-icon"></span>,
        year: new Date().getMonth() + " " + new Date().getDate() + " " + new Date().getFullYear()

    },
    {
        id: 2,
        textHeading: "Trash",
        icon: <span className="bi bi-globe2 my-icon"></span>,
        year: new Date().getMonth() + " " + new Date().getDate() + " " + new Date().getFullYear()
    },
];

const duration = durationItem;

// duration.getFullYear();

const Duration = () => {
    return (
        <div className="container">
            <div className="row">
                {duration.map(rationId =>
                    <div className="col-xl-4 col-lg-4 col-md-12 my-4 col-sm-12" key={rationId}>
                        <div className="card shadow" >
                            <div className="text-center half-circle">
                                <div className="p-5 m-3">
                                    <h3 className="text-dark">{rationId.textHeading}</h3>
                                    <p className="date">{rationId.year} </p>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Duration;