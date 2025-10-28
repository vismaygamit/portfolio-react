import React from "react";
import "./about.css";
import {isMobile} from 'react-device-detect';

const about = (props) => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row text-start">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src={isMobile ? "assets/img/testimonial-2.png" : "assets/img/testimonial-2per.png"}
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span>Vismay Gamit</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span>Full stack developer</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>{" "}
                          <span><a href="mailto:vismaygamit16@gmail.com">vismaygamit16@gmail.com</a></span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span><a href="tel:+919601550116">+91 9601550116</a></span>
                        </p>
  <p>
                          <span><a href="https://drive.google.com/file/d/1yO1I8XzCLGpTFSNvPYYUmwXY4Adpx-71/view?usp=sharing" target="_blank">View Resume</a></span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="skill-mf">
                    <p className="title-s">Skill</p>
                    <span>Node.js</span> <span className="pull-right">85%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "85%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>Angular</span> <span className="pull-right">80%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>React.js</span>{" "}
                    <span className="pull-right">70%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span>PHP</span> <span className="pull-right">90%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div> */}
                </div>

                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0 text-start">
                    <div className="title-box-2">
                      <h5 className="title-left">About me</h5>
                    </div>
                    <p className="lead text-align-justify">
                      Hello! My name is Vismay Gamit, and I'am India-based
                      freelancer.
                    </p>
                    <p className="lead text-align-justify">
                      👋 Hello! I’m Vismay Gamit, an India-based Freelance Full-Stack & AI Developer with over 6 years of experience in building robust, scalable, and intelligent web applications.<br/><br/>

I specialize in both front-end and back-end development, delivering complete end-to-end solutions using Node.js, Express.js, NestJS, React, and Next.js. My expertise also extends into the world of AI development, where I work with LangChain, RAG (Retrieval-Augmented Generation), and the OpenAI API to create AI chatbots, AI agents, and automation workflows.
<br/><br/>
I’m passionate about integrating AI and automation into modern applications — leveraging tools like n8n and WhatsApp API to build smart, efficient, and connected systems. Known for my strong problem-solving abilities, collaborative mindset, and commitment to quality, I aim to deliver impactful solutions that drive real business results.
                    </p>
                    <p className="lead text-justify">
                      💼 Whether you’re a business looking to establish a strong web presence or an employer seeking a skilled developer to bring your ideas to life, I’d love to <a href="#contact">connect</a> and collaborate!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
