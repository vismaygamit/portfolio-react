import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import "./portfolio.css";

const arrOfImages = [
  "sc1.jpg",
  "sc2.jpg"
];

const Product = (props) => {
  let product_details = [
    {
      title: "Appointment Booking With WhatsApp Flow | Google Calender | Node.js | MongoDB",
      url: "https://youtube.com/shorts/jqdlIfs6DXE?feature=share",
      path: "assets/img/product1/sc1.jpg",
      paymenturl: "https://www.paypal.com/ncp/payment/6XLQM9KVG5NEW"
    },
    {
      title: "WhatsApp Automation boilerplate built with Node.js | Official Whatsapp Cloud API",
      url: "#",
      path: "assets/img/product2/sc1.jpg",
      paymenturl: "https://www.paypal.com/ncp/payment/YN48KZMLYM6R8"
    }
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
              <h3 className="title-left">Products</h3>
              {/* <p className="subtitle-a">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}
            </div>
          </div>
        </div>

        <div className="row">
          {product_details.map((val, index) => (
            <div key={index} className="col-md-4">
              <div className="work-box">
                <div>
                  <div className="work-img">
                    <img
                      src={val.path}
                      onClick={() => {
                        setIndexofProject(index + 1);
                        setShowModal(true);
                        indexOfProject == 7 && setIndexOfImages(0)
                      }}
                      alt=""
                      className="img-fluid img-auto"
                    />
                  </div>
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-10">
                      <h2 className="w-title">{val.title}</h2>
                      {/* <div className="w-more">
                  <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                </div> */}
                    </div>
                    <div className="col-sm-2">
                      <div className="w-like">
                        <a target="#" href={val.url}>
                          {" "}
                          <span className="bi bi-plus-circle" />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="w-like">
                        <a target="#" href={val.paymenturl}>
                          {" "}
                          <span className="bi bi-cart3" />
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
            {/* <p className="w-title">
              <h4>Unfortunately, can't show all projects due to Non-Disclosure Agreement (NDA)</h4>
            </p> */}
            {/* </div> */}
          </div>
        </div>

      </div>

      {showModal && (
        <Lightbox
          // /style={{height:"100px"}}
          mainSrc={
            "assets/img/product" +
            indexOfProject +
            "/" + 
            arrOfImages[indexOfProject != 7 && indexOfProject!= 8 && indexOfProject!= 9 ? indexOfImages : 0]
          }
          nextSrc={indexOfProject != 7 && indexOfProject!= 8 && indexOfProject!= 9 &&

            "assets/img/product" +
            indexOfProject +
            "/" +
            arrOfImages[(indexOfImages + 1) % arrOfImages.length]
          }
          prevSrc={indexOfProject != 7 && indexOfProject!= 8 && indexOfProject!= 9 && 
            "assets/img/product" +
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

export default Product;
