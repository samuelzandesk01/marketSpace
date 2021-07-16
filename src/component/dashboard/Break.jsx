import React from 'react';
import SideBar from './SideBar';
import Client from "../../assets/img/break-2.gif";
import { Link } from "react-router-dom"



const Break = () => {
    return (
        <div>
            <main>
                <div class="d-flex allContent">
                    <SideBar />
                    <div className="breakPeriod">
                        <div className="text-center">
                            <div>
                                <img src={Client} width="300" alt="" />
                            </div>
                            <div className="mt-5">
                                <h3>You're currently on Break</h3>

                                <div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam autem tempore ea sint iste? Ut hic repudiandae corrupti? Ex expedita alias <br /> corrupti doloremque asperiores iure provident consectetur debitis tempore totam!
                                </div>
                                <div className="mt-3">
                                    <Link to="/dashboard/Admin" className="btn btn-primary mt-3 px-5" >Back Home  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Break
