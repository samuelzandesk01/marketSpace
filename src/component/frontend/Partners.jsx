import React from "react";
import Heritage from "../../assets/img/heritage-poise-client.png";
import GreenPoise from "../../assets/img/green-poise-client.png";
import Globus from "../../assets/img/globus-bank-poise-client.png";
import NGX from "../../assets/img/ngx-poise-client.png";
import ShellPoise from "../../assets/img/shell-poise-client.png";
import Oando from "../../assets/img/oando-poise-client.png";

const Images = [
    {
        id: 0,
        images: <img src={Heritage} className="img-fluid img-responsive partners" alt="" />
    },

    {
        id: 0,
        images: <img src={GreenPoise} className="img-fluid img-responsive partners" alt="" />
    },

    {
        id: 0,
        images: <img src={Globus} className="img-fluid img-responsive partners" alt="" />
    },
    {
        id: 0,
        images: <img src={NGX} className="img-fluid img-responsive partners" alt="" />
    },
    {
        id: 0,
        images: <img src={ShellPoise} className="img-fluid img-responsive partners" alt="" />
    },
    {
        id: 0,
        images: <img src={Oando} className="img-fluid img-responsive partners" alt="" />
    },
];

const allImages = Images;


const Partners = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="d-flex ">
                    {allImages.map(imagesId =>
                        <div key={imagesId}>
                            {imagesId.images}
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Partners;