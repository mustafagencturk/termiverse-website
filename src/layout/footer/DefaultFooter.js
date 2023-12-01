import Link from "next/link";

const DefaultFooter = () => {
  return (
    <footer
      className="main-footer rel z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top pt-80 pb-60">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s animated">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/footer-logo.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-20 wow fadeInLeft delay-0-2s animated">
                <a href="https://www.spatial.io/s/Terminal-Artists-Space-6559cd54ab8a9bf0322931de?share=6423529152317593020">
                  <i className="spatial" /> <span>Spatial</span>
                </a>
                <a href="https://twitter.com/termiverse">
                  <i className="fab fa-twitter" /> <span>Twitter</span>
                </a>
                <a href="https://www.linkedin.com/company/termiverse/mycompany/?viewAsMember=true">
                  <i className="fab fa-linkedin " /> <span>Linkedin</span>
                </a>
                <a href="https://www.instagram.com/termiverse/">
                  <i className="fab fa-instagram" /> <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="footer-left-content pt-80">
              <div className="lets-work mb-50 wow fadeInUp delay-0-2s animated">
                <img
                  src="assets/images/footer/lets-work.png"
                  alt="We Trust: Crafting Visions of Tomorrow, Shared Values"
                />
                <span>We Trust: Crafting Visions of Tomorrow, Shared Values</span>
              </div>
              <div className="footer-contact-info wow fadeInUp delay-0-3s animated">
                <a
                  className="theme-btn style-three"
                  href="mailto:hello@termiverse.com"
                >
                  hello@termiverse.com <i className="far fa-arrow-right" />
                </a>
                <a
                  className="theme-btn style-three phone-number"
                  href="callto:"
                >
                  <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-right-content">
              <h4 className="footer-title wow fadeInUp delay-0-2s animated">
                Quick Links
              </h4>
              <div className="footer-widget widget_nav_menu">
                <ul className="list-style-two wow fadeInUp delay-0-3s animated">
                  <li>
                    <Link legacyBehavior href="#">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="https://terminaldao.xyz/">
                      Terminal Artists Space
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="#">
                      Contact Us?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated">
                <p>
                  Copyright @2023,{" "}
                  <Link legacyBehavior href="/">
                    <a>Termiverse</a>
                  </Link>{" "}
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
