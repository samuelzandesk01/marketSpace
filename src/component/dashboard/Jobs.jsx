import React from "react";
import SideBar from "./SideBar";

export default function Jobs() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="d-flex">
        <SideBar />
        <div className="container" style={{ margin: "50px 20px auto" }}>
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-4">
                  <div className="myCard">
                    <div className="d-flex">
                      <div>
                        <i className="bi bi-circle-square myFont"></i>
                      </div>
                      <div className="ml-auto">
                        <i className="bi bi-three-dots-vertical myFont"></i>
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="mb-3">
                        <i className="bi bi-circle"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
