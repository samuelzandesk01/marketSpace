import React from 'react';
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
// import withScriptjs from 'react-google-maps/lib/withScriptjs';


const MyApp = () => {
    return (
        <div className="container" style={{ width: "100vw", height: "100vh" }}>
            <div class="container" style={{ marginTop: "100px" }}>
                <div class="">
                    <div class="">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe style={{ width: "100%", height: "100vh" }} id="gmap_canvas" src="https://maps.google.com/maps?q=Amsterdam&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyApp;
