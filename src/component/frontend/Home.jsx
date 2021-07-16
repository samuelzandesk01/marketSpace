import React from "react";
import Banner from "./Banner";
import Partners from "./Partners";
// import Services from "./Services";
// import BusinessGrowth from "./BusinessGrowth";
// import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Themes from "./Themes";
import Pricing from "./Pricing";
import Blog from "./Blog";

const Home = () => {
    return (
        <div>
            <Banner />
            <Partners />
            <Themes />
            <Pricing />
            <Testimonial />
            <Blog />
            <Footer />
            {/* 
          <BusinessGrowth />
          <FAQ/>
          
          */}
        </div>
    )
}


export default Home;