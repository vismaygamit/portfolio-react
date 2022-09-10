import React from "react";

const testimonials = (props) => {
  const client_details = [
    {
      name: "Deep Patel",
      img: "customer-review.svg",
      review:
        "I was fully satisfied with Vismay's work as he had done excellent work and the way of his communication was professional. In addition when I ask him to work bit extra for me he did it without any obligation. Secondly, I would say that he shared amazing and creative ideas for my website. I would recommend my friends to give him work instead of giving to any another developer",
    },
    // {name:"Vikrant Pandey",img:"yt", review:""},
    {
      name: "Cat Yung",
      img: "customer-review.svg",
      review:
        "Experienced in Node.js and able to deliver the product on time and very responsible",
    },
  ];
  return (
    <div
      className="testimonials paralax-mf bg-image"
      style={{ backgroundImage: `url(./assets/img/overlay-bg.jpg)` }}
    >
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="testimonials-slider swiper-container"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="swiper-wrapper">
                {client_details.map((val, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img
                          src={"/assets/img/" + val.img}
                          alt=""
                          className="rounded-circle b-shadow-a"
                        />
                        <span className="author">{val.name}</span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">{val.review}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination" />
            </div>
            {/* <div id="testimonial-mf" className="owl-carousel owl-theme">
        </div>   */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonials;
