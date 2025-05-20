import React from "react";

const testimonials = (props) => {
  const client_details = [
    {
      name: "Patel 🇨🇦",
      img: "customer-review.svg",
      review:
        "I was fully satisfied with Vismay's work as he had done excellent work and the way of his communication was professional. In addition when I ask him to work bit extra for me he did it without any obligation. Secondly, I would say that he shared amazing and creative ideas for my website. I would recommend my friends to give him work instead of giving to any another developer",
    },
    {
      name: "Cat Yung, Superchain 🇭🇰",
      img: "customer-review.svg",
      review:
        "I have been working with Gamit since day 1 of my startup ! He is very responsible of the task, providing very helpful feedbacks on different development progress !Love to work with Gamit so much !!!",
    },
    {
      name: "Nitin Ashok, Taxbotic 🇨🇦",
      img: "customer-review.svg",
      review:
        "Great Work by Vismay. We had a very complex project and Vismay delivered on it. Highly recommended!",
    },
    {
      name: "Andre Dominic, 🇮🇹",
      img: "customer-review.svg",
      review:
        "Vismay has a deep understanding of the Meta Business Platform and specifically of WhatsApp flows. He helped me setup a booking flow taking me through the single steps and clearly explaining approach at each stage. Highly recommend to work with him on WhatsApp projects.",
    },
    {
      name: "Mohammed, 🇿🇦",
      img: "customer-review.svg",
      review:
        "Vismay helped me with a lot of my WhatsApp automations and APIs. So I highly recommend to anyone out there. He helped me with a major part of my project like the development side Like it really gave me till last steps I need to finish it. So anyone out there if you need this man, like I highly recommend him. He's very good.",
    },
    {
      name: "Samir Kerchiched, mybeautifulmorocco.com, 🇬🇧",
      img: "customer-review.svg",
      review:
        "Vismay has delivered above and beyond my expectations and very responsive even with the time difference. He has resolved my json code in no time and improve it without asking him. I highly recommend Vismay.",
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
                        {val?.img ? (
                          <img
                            src={"/assets/img/" + val.img}
                            alt=""
                            className="rounded-circle b-shadow-a"
                          />
                        ) : (
                          <video width="560" height="315">
                            <source src={val.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
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
