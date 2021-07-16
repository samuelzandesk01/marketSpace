import React, { useState } from 'react';
import Laravel from "../../assets/img/laravel.png";
import PHP from "../../assets/img/php.png";
import Jomla from "../../assets/img/jomla.png";
import Shopify from "../../assets/img/shopify.png";
import Html5 from "../../assets/img/html5.png";
import Wordpress from "../../assets/img/wordpress.png";


const Frameworks = [
    {
        id: 0,
        img: <img src={Laravel} alt="" className="my-rounded-circle" width="100%" srcset="" />,
        headingText: "Wordpress Theme",
        numRate: 9000
    },

    {
        id: 1,
        img: <img src={PHP} alt="" className="my-rounded-circle" width="100%" srcset="" />,
        headingText: "PHP Theme",
        numRate: 10000
    },

    {
        id: 2,
        img: <img src={Jomla} alt="" className="my-rounded-circle" width="100%" srcset="" />,
        headingText: "Jomla Themes",
        numRate: 9600
    },

    {
        id: 3,
        img: <img src={Shopify} alt="" className="my-rounded-circle" width="100%" srcset="" />,
        headingText: "Shopify Themes",
        numRate: 96300
    },

    {
        id: 4,
        img: <img src={Html5} alt="" className="my-rounded-circle" width="100%" srcset="" />,
        headingText: "HTML5 Template",
        numRate: 129600
    },

    {
        id: 5,
        img: <img src={Wordpress} alt="" className="my-rounded-circle" width="100%" srcset="" />,
        headingText: "Wordpress Themes",
        numRate: 129900
    },

];


const Themes = () => {
    const [cats, setCarts] = useState(Frameworks)
    return (
        <div className="container">
            <div className="row themes pt-5" >
                {cats.map(cartId =>
                    <div className="col-xl-4 my-3 my-my-rounded">
                        <div className="icon  shadow">
                            {cartId.img}
                        </div>
                        <div className="bg-white py-5 text-center my-rounded">
                            <h4 className="pt-3">{cartId.headingText}</h4>
                            <small className="text-dark">{cartId.numRate}</small>
                        </div>
                    </div>)}
                <div className="col-xl-12 text-center mt-5 my-rounded">
                    <div className="mt-5">
                        <button className="btn btn-primary btn-lg">
                            View All Categories
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Themes;
