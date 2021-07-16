import React from "react";
import AboutUs from "./About";
import Partners from "./Partners";
import Whoweare from "./Whoweare";
import Employ from "./Employ";
import OurTeam from "./OurTeam";
import MyApp from "./Map";
import MinMargin from "./MinusMargin";
import "../../App.css";





const AllCompo = () => {
    return (
        <>
            <AboutUs />
            <div className="bg-white" style={MinMargin} >
                <div className="container marginTop" >
                    <div className="mainPadding">
                        <Partners />
                    </div>

                </div>
                <Whoweare />
                <Employ />
                <OurTeam />
                <MyApp />
            </div>

        </>
    )
}


export default AllCompo;