import React from 'react';


export default function Register() {
    const authRegistration = (e) => {

        e.preventDefault();


        // const inputs = document.getElementById("validationCustom01");

        // if (inputs == "") {
        //     alert("Empty");
        // }
    }
    return (
        <div>
            <section class="bg-white my-mt" >
                <div class="container">
                    <div class="row py-5">
                        <div class="col-xl-7">
                            <div class="pt-5">
                                <div class="progress my-5">
                                    <div class="circles done">
                                        <span class="label">1</span>
                                        <span class="title">Personal</span>
                                    </div>
                                    <span class="bar done"></span>
                                    <div class="circles done">
                                        <span class="label">2</span>
                                        <span class="title">Address</span>
                                    </div>
                                    <span class="bar half"></span>
                                    <div class="circles active">
                                        <span class="label">3</span>
                                        <span class="title">Payment</span>
                                    </div>
                                    <span class="bar"></span>
                                    <div class="circles">
                                        <span class="label">4</span>
                                        <span class="title">Review</span>
                                    </div>
                                    <span class="bar"></span>
                                    <div class="circles">
                                        <span class="label">5</span>
                                        <span class="title">Finish</span>
                                    </div>
                                </div>
                            </div>

                            <div class="text-left">
                                <h3>Register with us.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic odit consectetur laudantium? Quidem, hic.</p>
                            </div>

                            <div class="pt-3">
                                {/* novalidate */}
                                <form class="row g-3 needs-validation py-5" onSubmit={authRegistration} action="" method="#" >
                                    <div class="col-md-4">
                                        <label for="validationCustom01" class="form-label">First name</label>
                                        <input type="" class="form-control" id="validationCustom01"
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="validationCustom02" class="form-label">Last name</label>
                                        <input type="text" class="form-control" id=" validationCustom02"
                                        />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="validationCustomUsername" class="form-label">Username</label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                                            <input type="text" class="form-control" id="validationCustomUsername"
                                                aria-describedby="inputGroupPrepend" />
                                            <div class="invalid-feedback">
                                                Please choose a username.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationCustom03" class="form-label">Upload CV.</label>
                                        <input type="file" class="form-control" id="validationCustom03" />
                                        <div class="invalid-feedback">
                                            Please provide a valid file.
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationCustom03" class="form-label">Job Role</label>
                                        <select class="form-select" id="validationCustom04"    >
                                            <option selected disabled value="">Choose...</option>
                                            <option>Full Stack</option>
                                            <option>Backend </option>
                                            <option>Frontend</option>
                                            <option>DevOps</option>
                                            <option>All of the above</option>

                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationCustom03" class="form-label">City</label>
                                        <input type="text" class="form-control" id="validationCustom03" />
                                        <div class="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="validationCustom04" class="form-label">State</label>
                                        <select class="form-select" id="validationCustom04"   >
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
                                        <div class="invalid-feedback">
                                            Please select a valid state.
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="validationCustom05" class="form-label">Zip</label>
                                        <input type="text" class="form-control" id="validationCustom05" />
                                        <div class="invalid-feedback">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" name="form-field" type="checkbox" value="" id="invalidCheck"
                                            />
                                            <label class="form-check-label" for="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div class="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div class="col-xl-4 justify-content-center">
                            <div class="pt-5 ml-5 ">
                                <div class=" col-sm-12 col-xl-6 text-center  circle-progress-block">
                                    <div id="circleProgress1" class="progressbar-js-circle border m-3 rounded p-3">
                                        <svg viewBox="0 0 100 100" style={{ display: "block", width: "100%" }}>
                                            <path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="#eee"
                                                stroke-width="4" fill-opacity="0"></path>
                                            <path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="blue"
                                                stroke-width="4" fill-opacity="0"
                                                style={{ strokeDasharray: "301.635, 301.635", strokeDashoffset: "199.079" }}>
                                            </path>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                            <div class="mt-5">
                                <div class="card border text-center border-primary">
                                    <div class="card-top text-white bg-primary">
                                        <h4 class="pt-3">Registration Process</h4>
                                        <p>Hello Welcome</p>
                                    </div>
                                    <div class="pt-3 text-center">
                                        <div class="d-flex justify-content-center">
                                            <div class=" m-1">
                                                <small>Your Ticket:</small>
                                            </div>
                                            <div class=" m-1">
                                                <p> <span class="text-dark">@904749KNm</span> </p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <div class=" m-1">
                                                <small>Your Address:</small>
                                            </div>
                                            <div class=" m-1">
                                                <p> <span class="text-dark">@904749KNm</span> </p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <div class=" m-1">
                                                <small>Your Occupation:</small>
                                            </div>
                                            <div class=" m-1">
                                                <p> <span class="text-dark">@904749KNm</span> </p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <div class=" m-1">
                                                <small>Your Hobby:</small>
                                            </div>
                                            <div class=" m-1">
                                                <p> <span class="text-dark">@904749KNm</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}
