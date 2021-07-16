import React from 'react';
import { Link } from "react-router-dom";
import Admin from "./Admin";

export default function SideBar() {
    return (
        <div>
            <div class="">
                <div class="sidebar">
                    <div class="navContainer">
                        <div class="myNav">
                            <ul class="text-center">
                                <div>
                                    <Link to="/dashboard/Admin" class="navIcon bi bi-table my-font"></Link><br />
                                    <div class="pt-4">
                                        <Link to="/dashboard/Admin" class="pt-4 navText">Home</Link>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <Link to="/" class="navIcon bi bi-speedometer my-font"></Link><br />
                                    <div class="pt-4">
                                        <Link to="/" class="pt-4 navText">Measure Speeds</Link>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <Link to="/" class="navIcon bi bi-stack my-font"></Link><br />
                                    <div class="pt-4">
                                        <Link to="" class="pt-4 navText">Stacks</Link>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <Link to="/" class="navIcon bi bi-sliders my-font"></Link><br />
                                    <div class="pt-4">
                                        <Link to="/" class="pt-4 navText">Change</Link>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <Link to="/" class="navIcon bi bi-briefcase my-font"></Link><br />
                                    <div class="pt-4">
                                        <Link to="/" class="pt-4 navText">Jobs</Link>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
