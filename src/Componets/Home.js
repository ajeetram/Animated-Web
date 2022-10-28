import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AniImg from "./images/ana.png"

function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pl-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Grow Your Business With {" "}
                   <strong className="brand-name">Ajeet</strong>
                </h1>
                <h2 className="my-3" id="details">
                  We are the team of Blockchain Developement
                </h2>
                <div className="mt-3">
                  <Link to="/service" className="btn btn-primary">
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={AniImg} className="animated" alt="_A"></img>
              </div> 
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
