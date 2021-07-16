import React, { useState } from 'react';
import { Link } from "react-router-dom"



const Authentication = {
    isLoggedIn: false,
    onAuthentication() {
        this.isLoggedIn = true
    },
    getLoginStatus() {
        return this.isLoggedIn;
    }
}


const ScheduleCompo = () => {
    const [myData, setMyData] = useState({ location: '', calendar: '', description: '', file: '' })

    const changeLogin = (e) => {
        setMyData({ ...myData, [e.target.name]: e.target.value })


    }

    const submitHandeler = () => {
        { }
    }
    return (
        <div className="myModal bg-white d-flex" id="myModal">
            <div className="scheduleApp">
                <div className="text-left">
                    <h4>Schedule a Meeting</h4>
                    <div className="pt-4">
                        <div className=" currentBadge px-4 " style={{ padding: "10px 90px 10px 10px" }}>
                            <div className="">Daily Design Meeting  -- Meeting room no. 01</div>
                        </div>
                    </div>
                    <form action="" onSubmit={submitHandeler}>
                        <div className="mt-4">
                            <div className="d-flex" style={{ alignItems: "center" }}>
                                <div className="pr-3">
                                    <i className="bi bi-alarm text-primary" style={{ fontSize: '20px' }}></i>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <select name="" id="">
                                            <option value="">Pick TIme</option>
                                            <option value="">Pick TIme</option>
                                            <option value="">Pick TIme</option>
                                            <option value="">Pick TIme</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select name="" id="">
                                            <option value="">Pick TIme</option>
                                            <option value="">Pick TIme</option>
                                            <option value="">Pick TIme</option>
                                            <option value="">Pick TIme</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex" style={{ marginLeft: "auto" }} >
                                    <div className="mt-3 pl-3">
                                        <i className="bi bi-calendar3 text-primary mr-3" style={{ fontSize: '20px' }}></i>
                                    </div>
                                    <div className="d-flex "  >
                                        <div>
                                            <select name="" id="">
                                                <option value="">Pick TIme</option>
                                                <option value="">Pick TIme</option>
                                                <option value="">Pick TIme</option>
                                                <option value="">Pick TIme</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select name="" id="">
                                                <option value="">Pick TIme</option>
                                                <option value="">Pick TIme</option>
                                                <option value="">Pick TIme</option>
                                                <option value="">Pick TIme</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex mt-3">
                                <div className="pr-3 mt-3">
                                    <div><input type="checkbox" /> All Day </div>
                                </div>
                                <div className=" mt-3">
                                    <div><input type="checkbox" /> Repeat: Weekly on Friday <Link>Edit</Link> </div>
                                </div>
                                <div style={{ marginLeft: "auto" }}>
                                    <div><input type="date" /> </div>
                                </div>
                            </div>
                            <div className="bg-light mt-5 py-3 px-3">
                                <div className="d-flex">
                                    <div className="">
                                        <div>Event Details</div>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="btn btn-primary">Add Event</div>
                                    </div>
                                </div>
                                <hr />
                                <div className="mt-4">
                                    <div className="d-flex">
                                        <label htmlFor="" className="pr-3">Location</label>
                                        <input
                                            type="text"
                                            placeholder="Where is your location"
                                            name="location"
                                            className="where"
                                            value={myData.location} />
                                    </div>
                                    <div className="d-flex my-4">
                                        <label htmlFor="">Video Call</label>
                                        <i className="bi bi-camera-video myFont ml-4 text-primary" /> <Link className="pl-2" >Join Meeting: hrui03j </Link>
                                    </div>
                                    <div className="d-flex my-4">
                                        <label htmlFor="" className="pr-3">Calander</label>

                                        <select name="calendar" className="calendar" id="" >
                                            <option value="">My Calendar</option>
                                            <option value="">My Date</option>
                                        </select>
                                    </div>
                                    <div className="d-flex">
                                        <label htmlFor="">Description</label>
                                        <textarea name="description" className="pr-4 description" id="" cols="50" value={myData.description} rows="5" />
                                    </div>
                                    <div className="d-flex py-5">
                                        <input type="file" className="pr-4 uploadFile" name="file" value={myData.file} />
                                    </div>
                                    <div className="mt-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div className="addGuest shadow px-4">
                <div className="py-3">
                    <div className="my-3">Add Guest</div>
                    <div className="d-flex">
                        <input type="text" className="addGuestEmail" placeholder="Enter email address" />
                        <button className="btn btn-primary px-5">Add</button>
                    </div>
                    <div className="d-flex users">
                        <div className="guest"></div>
                        <div className="guest"></div>
                        <div className="guest"></div>
                    </div>
                    <div className="mt-4 mx-4">
                        <b><div>Guest can</div></b>

                        <div className="d-block">
                            <div className="d-flex mt-2">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <div className="pl-2" >Modify Event</div>
                            </div>
                            <div className="d-flex mt-2">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked />
                                <div className="pl-2" >Modify Event</div>
                            </div>
                            <div className="d-flex mt-2">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <div className="pl-2" >Modify Event</div>
                            </div>
                        </div>


                    </div>
                    <div className="mt-3">
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem consectetur fuga pariatur provident magni accusamus? <Link>Click me</Link> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Modal = () => {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h5 className="modal-title " id="exampleModalLabel"> <span className="text-danger">Welcome</span> <span
                                className="text-dark">Quadri Emmanuel</span> </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="g-3" method="POST">
                                <div className="form-group mt-2 ">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" required placeholder="Enter your email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                        else.</small>
                                </div>
                                <div className="form-group mt-2 ">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" required className="form-control" placeholder="Enter your password" id="exampleInputPassword1" />
                                </div>
                                <div className="form-group form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        Checked checkbox
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary my-btn-style">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-success " data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="watchUs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h5 className="modal-title " id="exampleModalLabel"> <span className="text-danger">Welcome</span> <span
                                className="text-dark">Quadri Emmanuel</span> </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="g-3">
                                <div className="form-group mt-2 ">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" required placeholder="Enter your email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                        else.</small>
                                </div>
                                <div className="form-group mt-2 ">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" required className="form-control" placeholder="Enter your password" id="exampleInputPassword1" />
                                </div>
                                <div className="form-group form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" for="flexCheckChecked">
                                        Checked checkbox
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary my-btn-style">Submit</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-success " data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="employExpert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h2 className="modal-title " id="exampleModalLabel"> <span className="text-danger">Employ our Experts</span></h2>
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div className="modal-body">
                            <form className="g-3">
                                <div className="pt-3">
                                    <form className="row g-3 needs-validation py-5" novalidate>
                                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 ">
                                            <label for="validationCustom01" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="validationCustom01" value="Mark"
                                                required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 ">
                                            <label for="validationCustom02" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="validationCustom02" value="Otto"
                                                required />
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-lg-12 col-xl-12">
                                            <label for="validationCustom03" className="form-label">Upload Project Documentation</label>
                                            <input type="file" className="form-control" id="validationCustom03" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid file.
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="validationCustom03" className="form-label">Job Role</label>
                                            <select className="form-select" id="validationCustom04" required >
                                                <option selected disabled value="">Choose...</option>
                                                <option>Full Stack</option>
                                                <option>Backend </option>
                                                <option>Frontend</option>
                                                <option>Project Manager</option>
                                                <option>UI/UX Designer</option>
                                                <option>DevOps</option>
                                                <option>All of the above</option>

                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="validationCustom03" className="form-label">City</label>
                                            <input type="text" className="form-control" id="validationCustom03" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid city.
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="validationCustom04" className="form-label">State</label>
                                            <select className="form-select" id="validationCustom04" required>
                                                <option selected disabled value="">Choose...</option>
                                                <option>Outside Nigeria</option>
                                                <option>ABUJA FCT</option>
                                                <option>ABIA</option>
                                                <option>ADAMAWA</option>
                                                <option>AKWA IBOM</option>
                                                <option>ANAMBRA</option>
                                                <option>BAUCHI</option>
                                                <option>BAYELSA</option>
                                                <option>BENUE</option>
                                                <option>BORNO</option>
                                                <option>CROSS RIVER</option>
                                                <option>DELTA</option>
                                                <option>EBONYI</option>
                                                <option>EDO</option>
                                                <option>EKITI</option>
                                                <option>ENUGU</option>
                                                <option>GOMBE</option>
                                                <option>IMO</option>
                                                <option>JIGAWA</option>
                                                <option>KADUNA</option>
                                                <option>KANO</option>
                                                <option>KATSINA</option>
                                                <option>KEBBI</option>
                                                <option>KOGI</option>
                                                <option>KWARA</option>
                                                <option>LAGOS</option>
                                                <option>NASSARAWA</option>
                                                <option>NIGER</option>
                                                <option>OGUN</option>
                                                <option>ONDO</option>
                                                <option>OSUN</option>
                                                <option>OYO</option>
                                                <option>PLATEAU</option>
                                                <option>RIVERS</option>
                                                <option>SOKOTO</option>
                                                <option>TARABA</option>
                                                <option>YOBE</option>
                                                <option>ZAMFARA</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a valid state.
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="validationCustom05" className="form-label">Zip</label>
                                            <input type="text" className="form-control" id="validationCustom05" required />
                                            <div className="invalid-feedback">
                                                Please provide a valid zip.
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck"
                                                    required />
                                                <label className="form-check-label" for="invalidCheck">
                                                    Agree to terms and conditions
                                                </label>
                                                <div className="invalid-feedback">
                                                    You must agree before submitting.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </div>
                                    </form>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-success " data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal text-left fade" id="searchBar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header ">
                            <h2 className="modal-title  " id="exampleModalLabel"> <span className="text-danger">What do you need?</span></h2>
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div className="modal-body">
                            <form className="d-flex justify-content-center needs-validation py-5" novalidate>
                                <div>
                                    <input type="search" placeholder="Search" className="form-control px-5" />
                                </div>
                                <div>
                                    <input type="submit" value="Search" className="btn btn-success px-5 " />
                                </div>
                            </form>
                        </div>
                        {/* <div className="modal-footer text-center">
                            <p>Click out to close popup...</p>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="modal text-left fade" id="addSchedule" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ScheduleCompo />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Modal;