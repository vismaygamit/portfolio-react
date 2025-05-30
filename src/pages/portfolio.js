import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import "./portfolio.css";

const arrOfImages = [
  "sc1.jpg",
  "sc2.jpg",
  "sc3.jpg",
  "sc4.jpg",
  "sc5.jpg",
  "sc6.jpg",
];

const Portfolio = (props) => {
  let project_details = [
    {
      title: "Glossier Beauty Store",
      url: "https://dropship.super-chain.tech/",
      path: "assets/img/project1/sc1.jpg",
    },
    {
      title: "Super Chain (Dropshipping)",
      url: "https://dropship.super-chain.tech/",
      path: "assets/img/project2/sc1.jpg",
    },
    {
      title: "Chimo Motel",
      url: "https://chimomotel.com/",
      path: "assets/img/project3/sc1.jpg",
    },
    {
      title: "Shorin Kempo Karate",
      url: "https://shorinkempokarate.in/",
      path: "assets/img/project4/sc1.jpg",
    },
    {
      title: "E-learning",
      url: "https://youtu.be/2SNtHqf3aPQ",
      path: "assets/img/project5/sc1.jpg",
    },
    // {
    //   title: "Gamit Dj-Remix",
    //   url: "https://www.gamitdjremix.in/",
    //   path: "assets/img/project5/sc1.jpg",
    // },
    {
      title: "Task Management System",
      url: "https://youtu.be/jb7j_0qH8G4",
      path: "assets/img/project6/sc1.jpg",
    },
    {
      title: "WhatsApp Automation for Ecommerce",
      url: "https://youtu.be/BDrKJh0DtJE?si=AGl2F50k_-KzncSQ",
      path: "assets/img/project7/sc1.jpg",
    },
    {
      title: "Appointment Booking For Beauty Care",
      url: "https://youtu.be/O6-iZcjmIks",
      path: "assets/img/project8/sc1.jpg",
    },
    {
      title: "Appointment Booking For Dental Clinic",
      url: "https://youtu.be/fBkqHmMzETc",
      path: "assets/img/project9/sc1.jpg",
    },
  ];
  const [indexOfImages, setIndexOfImages] = useState(0);
  const [indexOfProject, setIndexofProject] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box">
              <h3 className="title-left">Portfolio</h3>
              {/* <p className="subtitle-a">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}
            </div>
          </div>
        </div>

        <div className="row">
          {project_details.map((val, index) => (
            <div key={index} className="col-md-4">
              <div className="work-box">
                <div>
                  <div className="work-img">
                    <img
                      src={val.path}
                      onClick={() => {
                        setIndexofProject(index + 1);
                        setShowModal(true);
                        indexOfProject == 7 && setIndexOfImages(0);
                      }}
                      alt=""
                      className="img-fluid img-auto"
                    />
                  </div>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">{val.title}</h2>
                      {/* <div className="w-more">
                  <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                </div> */}
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <a target="#" href={val.url}>
                          {" "}
                          <span className="bi bi-plus-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-sm-12">
            {/* <div className="title-box"> */}
            {/* <h3 className="title-left">Portfolio</h3> */}
            <p className="w-title">
              <h4>
                Unfortunately, can't show all projects due to Non-Disclosure
                Agreement (NDA)
              </h4>
            </p>
            <p>
              <button
                type="button"
                className="btn btn-primary text-white"
                style={{ marginRight: "7px" }}
              >
                <a
                  href="https://calendly.com/vismaygamit/quick-call-for-requirement-understanding"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  Book a call
                </a>
              </button>
              for the requirement understanding.
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>

      {showModal && (
        <Lightbox
          // /style={{height:"100px"}}
          mainSrc={
            "assets/img/project" +
            indexOfProject +
            "/" +
            arrOfImages[
              indexOfProject != 7 && indexOfProject != 8 && indexOfProject != 9
                ? indexOfImages
                : 0
            ]
          }
          nextSrc={
            indexOfProject != 7 &&
            indexOfProject != 8 &&
            indexOfProject != 9 &&
            "assets/img/project" +
              indexOfProject +
              "/" +
              arrOfImages[(indexOfImages + 1) % arrOfImages.length]
          }
          prevSrc={
            indexOfProject != 7 &&
            indexOfProject != 8 &&
            indexOfProject != 9 &&
            "assets/img/project" +
              indexOfProject +
              "/" +
              arrOfImages[
                (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
              ]
          }
          onCloseRequest={() => setShowModal(false)}
          onMovePrevRequest={() =>
            setIndexOfImages(
              (indexOfImages + arrOfImages.length - 1) % arrOfImages.length
            )
          }
          onMoveNextRequest={() =>
            setIndexOfImages(
              (indexOfImages + arrOfImages.length + 1) % arrOfImages.length
            )
          }
        />
      )}
    </section>
  );
};

export default Portfolio;
