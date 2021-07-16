import React, { useState } from "react";
import ProjectOne from "../../assets/img/project/nexflix.jpg";
import Adventure from "../../assets/img/project/adventure.jpg";

const Footer = () => {
    const [allIcons, setIcons] = useState();
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="text-left">
                                <h3>Quick Links</h3>
                                <div class="pt-3">
                                    <ul class="footer-list">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Project</a></li>
                                        <li><a href="#">Become a Developer</a></li>
                                        <li><a href="#">Volunteer</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2">
                            <div class="text-left">
                                <h3>Quick Links</h3>
                                <div class="pt-3">
                                    <ul class="footer-list">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Project</a></li>
                                        <li><a href="#">Become a Developer</a></li>
                                        <li><a href="#">Volunteer</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Project</a></li>
                                        <li><a href="#">Become a Developer</a></li>
                                        <li><a href="#">Volunteer</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2">
                            <div class="text-left">
                                <h3>Quick Links</h3>
                                <div class="pt-3">
                                    <ul class="footer-list">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Project</a></li>
                                        <li><a href="#">Become a Developer</a></li>
                                        <li><a href="#">Volunteer</a></li>
                                        <li><a href="#">About Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5">
                            <div class="row">
                                <div class="col-xl-5">
                                    <div>
                                        <img
                                            src={ProjectOne}
                                            width="100%"
                                            alt=""
                                        />
                                    </div>
                                    <div class="mt-4">
                                        <img
                                            src={Adventure}
                                            width="100%"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="col-xl-7">
                                    <div class="text-left w-100">
                                        <h3 class="text-dark">Recents Uploads</h3>
                                        <div class="pt-3">
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Vitae dolores laboriosam vero maxime, perferendis vel
                                                debitis neque? Harum, et dolor?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
