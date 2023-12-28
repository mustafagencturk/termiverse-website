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
              <a href="https://www.facebook.com/termiverse">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="https://twitter.com/termiverse">
                <i className="fab fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="https://instagram.com/termiverse">
                <i className="fab fa-instagram" /> <span>Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/termiverse/">
                <i className="fab fa-linkedin" /> <span>Lınkedin</span>
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
                  src="assets/images/about/circle-text-3.png"
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
                  We are a community-driven powerhouse incubated by TerminalDAO, specializing in the entire production spectrum with a distinct focus on culture, sustainability, and exponential technologies. Our multifaceted services encompass  Digital Transformation, Strategic Consultancy, Implementation of Exponential Technologies, Creative Production & Strategies, Investment & Start-up Mentorship.                  </p>
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
                  <span className="sub-title mb-15">Community-Driven Methods</span>
                  <h2>Terminal Community-Supported Scopes</h2>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>Digital Tranformation and Sustainable Innovation</h5>
                    <p>
                    Termiverse provides digitally creative & technical community support for our partners to establish a presence in the world of innovation. We know how to maximize benefits for your production way with the power of digital transformation and sustainable innovation.</p>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-5s">
                  <div className="number">
                    <span>02</span>
                  </div>
                  <div className="content">
                    <h5>Terminal's Business Playbooks</h5>
                    <p>
                    Let's decide the future together by analysing your needs before implementing cutting-edge technologies. Before implementing new technologies our community research your needs and develop your business playbook to create better future for everyone. </p>
                  </div>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-7s">
                  <div className="number">
                    <span>03</span>
                  </div>
                  <div className="content">
                    <h5>We Are WebXR Artists Community with Different Expertises</h5>
                    <p>
                    At Termiverse, we design virtual worlds, cultural roadmaps, and even machines! We provide scanning services, XR implementation for your products and provide holographic display solutions to exhibit digital twin of your products physically.</p>
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
                <Counter end={3} />
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
                <Counter end={95} />
                <span className="counter-title">Community Members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Area end */}
      {/* Service Style Three start */}
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
      <section className="team-area pt-70 rpt-40">
        <div className="container">
          <div className="row justify-content-center"></div>
              <div className="col-lg-12">
                <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                    <img
                      src="assets/images/footer/lets-work.png"
                      alt="We Trust: Crafting Visions of Tomorrow, Shared Values"
                    />
                    <h2>In Common Values We Trust: Visions for Tomorrow</h2>
                  </div>
              </div>
            </div>
        </section>
      {/* Project Timeline Area end */}
      {/* Team Area start */}
      <section className="team-area pt-70 rpt-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title2 text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title2 mb-20">Team Leads</span>
                
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/team/member1.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Begüm J. Bitir</h4>
                  <span>Executive Director</span>
                </div>
                <div className="btn-social">
                  <div className="social-style-two">
                    <a href="https://www.linkedin.com/in/begumbitir999/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-3s">
                <div className="image">
                  <img src="assets/images/team/member2.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Aylin Taslak</h4>
                  <span>Head of WebXR & Metaverse</span>
                </div>
                <div className="btn-social">
                  <div className="social-style-two">
                    <a href="https://www.linkedin.com/in/aylin-taslak-a7985523a/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/team/member3.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Mustafa Gençtürk</h4>
                  <span>Investor Relations</span>
                </div>
                <div className="btn-social">
                  <div className="social-style-two">
                    <a href="https://www.linkedin.com/in/mustafagen%C3%A7t%C3%BCrk/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
