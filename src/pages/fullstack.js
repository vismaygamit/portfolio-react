import React from "react";
import "./fullstack.css";
const fullstack = (props) => {
  return (
    <section id="tech" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="title-box-2">
                <h5 className="title-left">Tech Stack</h5>
              </div>
              <div className="row">
                <div className="col-md-5 box-shadow-full">
                  <img
                    src="assets/img/front-end.jpg"
                    className="img-fluid rounded b-shadow-a"
                    alt=""
                  />

                  <h4>Front-end Development</h4>
                  <div>
                    <h5>Technology</h5>
                    <span>
                      <img
                        src="assets/img/frontend/html5.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/frontend/css3.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/frontend/bootstrap.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/frontend/jquery.svg"
                        className="img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/frontend/javascript.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/frontend/mediaquery.svg"
                        className="img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/frontend/angular.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/frontend/react.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                    </span>
                  </div>
                  <div>
                    <h5>Dev Tools</h5>
                    <span>
                      <img
                        src="assets/img/editor/vscode.svg"
                        className="img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 box-shadow-full">
                  <img
                    src="assets/img/back-end.jpg"
                    className="img-fluid rounded b-shadow-a"
                    alt=""
                  />

                  <h4>Back-end Development</h4>
                  <div>
                    <h5>Technology</h5>
                    <span>
                      <img
                        src="assets/img/backend/php.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/backend/nodejs.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/backend/expressjs.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/backend/wordpress.svg"
                        className="h-50 img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                      <img
                        src="assets/img/backend/codeigniter.svg"
                        className="img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                    </span>
                  </div>
                  <div>
                    <h5>Dev Tools</h5>
                    <span>
                      {" "}
                      <img
                        src="assets/img/editor/vscode.svg"
                        className="img-fluid rounded techstack b-shadow-a"
                        alt=""
                      />
                    </span>
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

export default fullstack;
