import Link from "next/link";

const Footer3 = () => {
  return (
    <footer
      className="main-footer footer-three rel bgs-cover z-1"
      style={{
        backgroundImage: "url(assets/images/footer/footer-bg-shape-two.png)",
      }}
    >
      <div className="container container-1290">
        <div className="footer-top-two pt-45 pb-35">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="footer-logo mb-20 wow fadeInRight delay-0-2s">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/footer-logo.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-8 text-lg-end">
              <div className="social-style-four mb-10 wow fadeInLeft delay-0-2s">
                <a href="https://www.facebook.com/termiverse">Facebook</a>
                <a href="https://twitter.com/termiverse">Twitter</a>
                <a href="https://instagram.com/termiverse">Instagram</a>
                <a href="https://www.linkedin.com/company/termiverse/">Lınkedin</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-3 col-7 col-small">
            <div className="footer-widget footer-text wow fadeInUp delay-0-2s">
              <div className="text">
                
                <a href="mailto:hello@termiverse.com">hello@termiverse.com</a>
                <br />
                
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area text-center pt-10 pb-10 wow fadeInUp delay-0-2s">
          <p>
            Copyright @2023,{" "}
            <Link legacyBehavior href="/">
              <a>Termiverse</a>
            </Link>{" "}
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer3;
