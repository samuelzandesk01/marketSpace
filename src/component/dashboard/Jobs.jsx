import React from "react";
import jobs from "./Job";
import SideBar from "./SideBar";

export default function Jobs() {
    const details = () => {
        
    }
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="d-flex">
        <SideBar />
        <div className="container" style={{ margin: "50px 20px auto" }}>
          <div className="row">
            <div className="d-flex mt-4">
              <div className="jobs">
                <h3>List of jobs Available</h3>
              </div>
              {/* <div className="jobs">
                <h3>List of jobs Available</h3>
              </div> */}
            </div>
            <div className="col-xl-12">
              <div className="row">
                {jobs.map((job) => (
                  <div
                    className="col-xl-3 m-2 bg-white"
                    style={{ width: "32%" }}
                  >
                    <div className="p-3 rounded">
                      <div className="d-flex ">
                        <div>
                          <i className="bi bi-circle-square myFont"></i>
                        </div>
                        <div className="ml-auto">
                          <i onClick={details} className="bi bi-three-dots-vertical myFont"></i>
                        </div>
                      </div>
                      <div className="pt-3 mt-4">
                        <div className="mb-3">
                          <i
                            className="bi bi-code-square bg-primary py-2 px-3 text-white rounded"
                            style={{ fontSize: "30px" }}
                          ></i>
                        </div>
                      </div>
                      <div className="pt-4">
                        <div className="mb-4">
                          <h3>{job.name}</h3>
                        </div>
                        <p>{job.jobDescription}</p>
                      </div>
                      <div className="d-flex">
                        <div className="jobTags">{job.jobBadge1}</div>
                        <div className="jobTags">{job.jobBadge2}</div>
                        <div className="jobTags">{job.jobBadge3}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
