import React from "react";

const portfolio = (props) => {
  return (
    <div
      className="section-counter paralax-mf bg-image"
      style={{ backgroundImage: `url(./assets/img/counters-bg.jpg)` }}
    >
      <div className="overlay-mf" />
      <div className="container position-relative">
        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <div className="counter-box counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="bi bi-check" />
                </span>
              </div>
              <div className="counter-num">
                <p
                  data-purecounter-start={0}
                  data-purecounter-end={50}
                  data-purecounter-duration={1}
                  className="counter purecounter"
                />
                <span className="counter-text">WORKS COMPLETED</span>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-3 col-lg-3">
        <div className="counter-box pt-4 pt-md-0">
          <div className="counter-ico">
            <span className="ico-circle"><i className="bi bi-journal-richtext" /></span>
          </div>
          <div className="counter-num">
            <p data-purecounter-start={0} data-purecounter-end={25} data-purecounter-duration={1} className="counter purecounter" />
            <span className="counter-text">YEARS OF EXPERIENCE</span>
          </div>
        </div>
      </div> */}
          <div className="col-sm-6 col-lg-6">
            <div className="counter-box pt-4 pt-md-0">
              <div className="counter-ico">
                <span className="ico-circle">
                  <i className="bi bi-people" />
                </span>
              </div>
              <div className="counter-num">
                <p
                  data-purecounter-start={0}
                  data-purecounter-end={10}
                  data-purecounter-duration={1}
                  className="counter purecounter"
                />
                <span className="counter-text">TOTAL CLIENTS</span>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-3 col-lg-3">
        <div className="counter-box pt-4 pt-md-0">
          <div className="counter-ico">
            <span className="ico-circle"><i className="bi bi-award" /></span>
          </div>
          <div className="counter-num">
            <p data-purecounter-start={0} data-purecounter-end={48} data-purecounter-duration={1} className="counter purecounter" />
            <span className="counter-text">AWARD WON</span>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};
export default portfolio;
