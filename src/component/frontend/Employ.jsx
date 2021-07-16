import React from 'react';
import { Link } from "react-router-dom";

export default function Employ() {
    return (
        <div>
            <section class="my-mt employ" >
                <div class="row ">
                    <div class="text-center employPadding" >
                        <h3 class="font-weight-bolder">Looking for the best Plugin for Woocommerce</h3>
                        <div class="pt-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos maxime molestias
                                recusandae doloremque dolorem, possimus quos aliquam ipsa earum mollitia adipisci culpa
                                sit odit itaque excepturi illum autem error tempore nemo animi voluptate ullam vero?</p>
                            <div class="mt-2">
                                <Link path="" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#employExpert">Employ Our Experts</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
