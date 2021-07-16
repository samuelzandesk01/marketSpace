// import React from "react";
import Maxwell from "../../assets/img/team/layered-img1-11.jpg";
import Robert from "../../assets/img/team/layered-img2-1-1-1.jpg";
import Paul from "../../assets/img/team/layered-img1-11.jpg";
import Savior from "../../assets/img/team/layered-img1-11.jpg";
import Collins from "../../assets/img/team/layered-img2-11.jpg";


const Teams = [
    {
        id: 0,
        name: "Maxwell James",
        img: <img src={Maxwell} alt="Maxwell James" className="img-fluid team" width="100%" />,
        role: "Frontend Engineer"
    },

    {
        id: 1,
        name: "Robert Williams",
        img: <img src={Robert} alt="Robert Williams" className="img-fluid team" width="100%" />,
        role: "Sales Officer"
    },


    {
        id: 2,
        name: "Paul Olang",
        img: <img src={Paul} alt="Paul Olang" className="img-fluid team" width="100%" />,
        role: "DevOps Engineer"
    },


    {
        id: 3,
        name: "Savior Julius",
        img: <img src={Savior} alt="Savior Julius" className="img-fluid team" width="100%" />,
        role: "Project Manager"
    },


    {
        id: 4,
        name: "Collins Brown",
        img: <img src={Collins} alt="Collins Brown" className="img-fluid team" width="100%" />,
        role: "IT Officer"
    },

    {
        id: 5,
        name: "Jidex Martins",
        img: <img src={Robert} alt="Jidex Martins" className="img-fluid team" width="100%" />,
        role: "Q & A Officer"
    },


];


export default Teams;