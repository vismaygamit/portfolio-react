import React from 'react';

const MainFooter=props=>{

  var loadScript = function(src) {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
  }
  loadScript('./assets/vendor/bootstrap/js/bootstrap.bundle.min.js')
  loadScript('./assets/vendor/glightbox/js/glightbox.min.js')
  loadScript('./assets/vendor/php-email-form/validate.js')
  loadScript('./assets/vendor/purecounter/purecounter.js')
  loadScript('./assets/vendor/swiper/swiper-bundle.min.js')
  loadScript('./assets/vendor/typed.js/typed.min.js')
  loadScript('./assets/js/main.js')
    return ( <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                {/* <p className="copyright">&copy; Copyright <strong>Vismay Gamit</strong>. All Rights Reserved</p> */}
                <div className="credits">
                  Made by <a href="#"><strong>Vismay Gamit</strong></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      );
};

export default MainFooter;