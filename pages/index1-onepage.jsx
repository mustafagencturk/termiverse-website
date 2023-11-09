import dynamic from 'next/dynamic';
 
const Counter = dynamic(() => import('@/src/components/Counter'), {
  ssr: false,
});
import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const IndexSingle = () => {
  return (
    <Layout singleMenu>
      {/* Hero Section Start */}
      <section id="home" className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                Community Driven<span>Approach for</span>Your Enterprise<i></i>
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="assets/images/hero/bg-12.jpg" alt="impact us" />
            <div className="hero-social">
              <a href="#">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="#">
                <i className="fab fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#">
                <i className="fab fa-instagram" /> <span>Instagram</span>
              </a>
              <a href="#">
                <i className="fab fa-youtube" /> <span>Youtube</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <section id="about" className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/circle-text.svg"
                  alt="Circle Text"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">About Termiverse</span>
                  <h2>
                    Community-driven Powerhouse
                  </h2>
                </div>
                <div className="content">
                  <p>
                  We are a community-driven powerhouse incubated by TerminalDAO, specializing in the entire production spectrum with a distinct focus on culture, sustainability, and exponential technologies. Our multifaceted services encompass Marketing, Digital Transformation, Exponential Technologies Implementation, Web3 and Web2 services, Creative Strategies, Production for Technical and Empowering Needs, and Investment & Start-up Mentorship.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
            Unite Create Innovate
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Community-Driven Delivery</span>
                  <h2>Latest Way to Get Creative and Innovative Solutions </h2>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>Exponential Technologies Implementation</h5>
                    <p>
                    Embrace the future with confidence as we lead the way in implementing cutting-edge technologies. From artificial intelligence to blockchain, our team ensures that your business stays at the forefront of innovation.
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5>Digital Transformation</h5>
                    <p>
                    Navigate the digital landscape seamlessly with our expertise in digital transformation. We guide organizations through the evolution process, ensuring they remain agile, efficient, and ready for the challenges of tomorrow.
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>Web3 and Web2 Services</h5>
                    <p>
                    Whether you're diving into the decentralized world of Web3 or optimizing your Web2 presence, Termiverse has the tools and knowledge to elevate your online footprint.
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/services/her -img.jpg"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do end */}
      {/* Statistics Area start */}
      <div className="statistics-area pt-75 rpt-45 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={2} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={12} extraClass={"+"} />
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={35} />
                <span className="counter-title">Professionals Community Member</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInUp delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={710} />
                <span className="counter-title">Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Service Style Three start */}
      <section
        id="services"
        className="service-three-area pt-70 rpt-40 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Termiverse Services</span>
                <h2>We Provide Amazing Innovate Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Web Design From Figma</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/icon1.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>We denounce with righteous indignation dislike beguile</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>PSD, Figma, XD to HTML Convert</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/icon2.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>At vero eos et accusamus et dignissim ducimbl ditiis</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>WordPress Development</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/icon3.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>To take trivial example which ever undertakes laborious</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>React Development</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/icon4.png" alt="Icon" />
                </div>
                <div className="content">
                  <p>Sed persiciatis unde omnisey natus error voluptatem</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="read-more style-two">
                      <span>Read More</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Three end */}
      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-60 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              Culture Innovation and Technology Strategies
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline Area start */}
      
      {/* Project Timeline Area end */}
      {/* Team Area start */}
      <section id="team" className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="assets/images/hero/bg-team.png" alt="impact us" />
          </div>
        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Team Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-65 rpt-55 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              Community Driven Approach
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Pricing style three start */}
      
      {/* Pricing style three end */}
      {/* Why Choose Us Area start */}
      
      {/* Blog Style Two end */}
      {/* footer area start */}
    </Layout>
  );
};
export default IndexSingle;
