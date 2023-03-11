import * as React from "react";
const contact = (props) => {
  return (
    <section
      id="contact"
      className="contact-mf paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: ` url(./assets/img/overlay-bg.jpg)` }}
    >
      <div className="overlay-mf" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  {/* <div className="title-box-2">
                  <h5 className="title-left">
                    Send Message Us
                  </h5>
                </div>
                <div>
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-md-12 text-center my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div> */}

                  {/* <InputLabel  id="demo-simple-select-label">Age</InputLabel>
                <Select defaultValue="--Select--" placeholder="--Select--" name="songTyp" variant="outlined" sx={{ mt: 2 }} value={songType} labelId="demo-simple-select-label" id="songTypes" label="SognType" onChange={handleChange}> */}
                  {/* <option
                     
                      value="--Select--"
                    >
                      --Select--
                    </option> */}
                  {/* {songOptions?.map((val, index) => ( */}
                  {/* if(songOptions.length>0){ */}
                  {/* <MenuItem */}
                  {/* key={index}
                       value={val}
                     >
                       {val}
                     </MenuItem>
                    }
                   ))}
                 </Select> */}
                </div>
                <div className="col-md-6"></div>
                <div className="col-sm-12">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">Get in Touch</h5>
                  </div>
                  <div className="more-info">
                    {/* <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                    expedita aperiam aliquid at.
                    Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                    mollitia inventore?
                  </p> */}
                    <ul className="list-ico">
                      {/* <li>
                        <span className="bi bi-geo-alt" /> Not Available
                      </li> */}
                      <li>
                        <span className="bi bi-phone" />
                        <a href="tel:+919601550116">+91 (960) 155-0116</a>
                        
                      </li>
                      <li>
                        <span className="bi bi-envelope" />{" "}
                        <a href="mailto:vismaygamit16@gmail.com">vismaygamit16@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className="socials">
                    <ul>
                      <li>
                        <a href="https://www.linkedin.com/in/vismay-gamit-284790121/">
                          <span className="ico-circle">
                            <i className="bi bi-linkedin" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/vismaygamit">
                          <span className="ico-circle">
                            <i className="bi bi-github" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/vismaygamit/">
                          <span className="ico-circle">
                            <i className="bi bi-facebook" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/vismaygamit/">
                          <span className="ico-circle">
                            <i className="bi bi-instagram" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/vismay_gamit">
                          <span className="ico-circle">
                            <i className="bi bi-twitter" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/+919601550116">
                          <span className="ico-circle">
                            <i className="bi bi-whatsapp" />
                          </span>
                        </a>
                      </li>
                    </ul>
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
export default contact;
