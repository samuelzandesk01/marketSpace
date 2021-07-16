import React from 'react';
import Teams from './Teams';


const AllTeam = Teams;


export default function OurTeam() {
    return (
        <div>
            <section class="container my-mt">
                <div class="row">
                    <div class="col-xl-2 ml-3 my-5">
                        <div class="line-top "></div>
                    </div>
                    <div class="col-xl-8 mb-5">
                        <div class="text-left my-mt" >
                            <h2 class="text-dark">At your Service</h2>
                            <div class="pt-3">
                                <p class="my-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam
                                    sed laboriosam. Adipisci, quae sed quam quia cum obcaecati.</p>
                            </div>
                        </div>
                    </div>


                    {AllTeam.map(teamsId =>
                        <div className="col-xl-4 col-md-4 col-lg-4 col-sm-12 mb-4 mt-5">
                            {teamsId.img}
                            <div className="cap text-center shadow">
                                <h3 className="pt-2" >{teamsId.name}</h3>
                                <p>{teamsId.role}</p>
                            </div>
                        </div>
                    )}


                    {/* <div class="col-xl-4 mb-4">
                        <div>
                            <img src="" class="img-fluid team" alt="" />
                            <div class="cap text-center shadow">
                                <h5 class="pt-2">Maxwell James</h5>
                                <p>Frontend Dev</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 mb-4">
                        <div>
                            <img src="" class="img-fluid team" alt="" />
                            <div class="cap text-center shadow">
                                <h5 class="pt-2">Maxwell James</h5>
                                <p>Sales Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 mb-4">
                        <div>
                            <img src="" class="img-fluid team" alt="" />
                            <div class="cap text-center shadow">
                                <h5 class="pt-2">Maxwell James</h5>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 mt-5">
                        <div>
                            <img src="" class="img-fluid team" alt="" />
                            <div class="cap text-center shadow">
                                <h5 class="pt-2">Maxwell James</h5>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 mt-5">
                        <div>
                            <img src="" class="img-fluid team" alt="" />
                            <div class="cap text-center shadow">
                                <h5 class="pt-2">Maxwell James</h5>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 mt-5">
                        <div>
                            <img src="../assets/img/team/layered-img1.png" class="img-fluid team" alt="" />
                            <div class="cap text-center shadow">
                                <h5 class="pt-2">Maxwell James</h5>
                                <p>Project Manager</p>
                            </div>
                        </div>
                    </div> */}

                </div>
            </section>
        </div>
    )
}
