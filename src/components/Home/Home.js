import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import { send, init } from "emailjs-com";

import "./styles/home.css";
import hani from "./img/hani.jpg";
import nodestory from "./img/nodestory.png";
import pushstart from "./img/pushstart.png";

import antzknowLogo from "./img/antzknow-logo.png";
import frendshareLogo from "./img/frendshare-logo.png";
import pushstartLogo from "./img/pushstart-logo.png";
import trippinessLogo from "./img/trippiness-logo.png";
import futureSchoolLogo from "./img/futureSchool-logo.png";

import Akkshay from "./img/Akkshay.jpg";
import Chris from "./img/Chris.png";
import Neeraj from "./img/Neeraj.png";
import Prakhar from "./img/Prakhar.png";
import Sudhansu from "./img/Sudhansu.png";
import Tristan from "./img/Tristan.jpg";

import IIITS from "./img/IIITS.png";

import Next from "./img/Next.svg";

import LinkedIn from "./img/linkedin.svg";
import Github from "./img/github.svg";
import Instagram from "./img/instagram.svg";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companiesTrigger: false
    };
  }
  componentDidMount = () => {
    document.getElementById("scrollRight").scrollLeft = 10000;
    init("user_fPYfAmrOM5e7hArFO7aDq");
  };
  submitForm = () => {
    if (this.state.formloader || this.state.formSuccess) return;
    let body = this.validate("contact-body");
    let name = this.validate("contact-name");
    if (body && name) {
      this.setState({ formloader: true, formSuccess: false, formError: false });
      const REACT_APP_EMAILJS_RECEIVER = "thehanimo@gmail.com";
      const REACT_APP_EMAILJS_TEMPLATEID = "thehanimo@gmail.com";
      send("mailgun", "template_VgF2K5ij", {
        name,
        body
      })
        .then(res => {
          this.setState({ formloader: false, formSuccess: true });
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => this.setState({ formloader: false, formError: true }));
    }
  };

  validate = field => {
    let body = document.getElementById(field).value.trim();
    if (body === "") {
      document.getElementById(field).classList.add("error");
      return false;
    } else document.getElementById(field).classList.remove("error");
    return body;
  };
  render() {
    return (
      <React.Fragment>
        <div className="main-banner">
          <Parallax
            className="custom-class-people"
            y={[20, -20]}
            tagOuter="figure"
          >
            <div className="avatar-container">
              <img src={hani} alt="Hani Mohammed" className="avatar" />
            </div>
          </Parallax>
          <div className="title-container">
            <div className="title">
              <Fade left cascade>
                <div>Hani</div>
                <div className="mohammed">Mohammed.</div>
              </Fade>
            </div>
          </div>

          <div className="sub-title-container">
            <Parallax
              className="custom-class-people"
              y={[50, -50]}
              tagOuter="figure"
            >
              <span className="sub-title">
                <Fade top cascade delay={800}>
                  Developer and Graphic Designer
                </Fade>
              </span>
            </Parallax>
          </div>
        </div>

        <div className="page">
          <div>
            <span className="page-header">
              <Fade left cascade>
                Work
              </Fade>
            </span>
          </div>

          <div className="nodestory">
            <Parallax className="custom-class" y={[20, -50]} tagOuter="figure">
              <img src={nodestory} alt="Hani Mohammed" className="work-bg" />
            </Parallax>
          </div>

          <div className="pushstart">
            <Parallax className="custom-class" y={[20, -50]} tagOuter="figure">
              <img src={pushstart} alt="Hani Mohammed" className="work-bg" />
            </Parallax>
          </div>
          <div className="page-sub-header-container">
            <div className="comp-container">
              <Zoom delay={300} when={this.state.companiesTrigger}>
                <a href="http://antzknow.com" target="_blank">
                  <div className="comp1">
                    <Parallax
                      className="custom-class"
                      y={[10, -30]}
                      tagOuter="figure"
                    >
                      <img
                        src={antzknowLogo}
                        alt="Antzknow-Logo"
                        className="comp-img"
                      />
                    </Parallax>
                  </div>
                </a>
              </Zoom>
              <Zoom delay={600} when={this.state.companiesTrigger}>
                <a href="http://frendshare.com" target="_blank">
                  <div className="comp2">
                    <Parallax
                      className="custom-class"
                      y={[10, -30]}
                      tagOuter="figure"
                    >
                      <img
                        src={frendshareLogo}
                        alt="Frendshare-Logo"
                        className="comp-img"
                      />
                    </Parallax>
                  </div>
                </a>
              </Zoom>
            </div>
            <div className="comp-container">
              <Zoom delay={1000} when={this.state.companiesTrigger}>
                <a href="http://pushstart.in" target="_blank">
                  <div className="comp3">
                    <Parallax
                      className="custom-class"
                      y={[10, -30]}
                      tagOuter="figure"
                    >
                      <img
                        src={pushstartLogo}
                        alt="Pushstart-Logo"
                        className="comp-img"
                      />
                    </Parallax>
                  </div>
                </a>
              </Zoom>
              <div>
                <Flip left cascade>
                  <div className="page-sub-header">
                    <span>Amazing </span>
                    <span style={{ fontWeight: "bold" }}>Companies</span>
                  </div>
                </Flip>
                <Fade
                  top
                  delay={500}
                  onReveal={() => this.setState({ companiesTrigger: true })}
                >
                  <div className="page-sub-header-2">I've worked at</div>
                </Fade>
              </div>
              <Zoom delay={800} when={this.state.companiesTrigger}>
                <a href="http://trippiness.com" target="_blank">
                  <div className="comp4">
                    <Parallax
                      className="custom-class"
                      y={[10, -30]}
                      tagOuter="figure"
                    >
                      <img
                        src={trippinessLogo}
                        alt="Trippiness-Logo"
                        className="comp-img"
                      />
                    </Parallax>
                  </div>
                </a>
              </Zoom>
            </div>
            <div className="comp-container">
              <Zoom delay={450} when={this.state.companiesTrigger}>
                <a href="http://www.thefuture.school" target="_blank">
                  <div className="comp5">
                    <Parallax
                      className="custom-class"
                      y={[10, -30]}
                      tagOuter="figure"
                    >
                      <img
                        src={futureSchoolLogo}
                        alt="FutureSchool-Logo"
                        className="comp-img"
                      />
                    </Parallax>
                  </div>
                </a>
              </Zoom>
            </div>
          </div>

          <div className="page-sub-header-container">
            <div className="page-sub-header">
              <Flip left cascade>
                <span>Fabulous </span>
                <span style={{ fontWeight: "bold" }}>People</span>
              </Flip>
              <Fade top delay={500}>
                <div className="page-sub-header-2">I've worked with</div>
              </Fade>
            </div>

            <div className="people-card-container pad-left">
              <Parallax
                className="custom-class-people"
                x={[50, -50]}
                tagOuter="figure"
              >
                <a
                  href="https://www.linkedin.com/in/tristanliuyiwen/"
                  target="_blank"
                >
                  <div className="people-card">
                    <img src={Tristan} />
                    <div className="name">
                      <span style={{ fontWeight: "bold" }}>Tristan</span>Liu
                    </div>
                    <div className="desig">CEO, Antzknow</div>
                  </div>
                </a>
              </Parallax>

              <Parallax
                className="custom-class-people"
                x={[50, -50]}
                tagOuter="figure"
              >
                <a href="https://akkshay.github.io" target="_blank">
                  <div className="people-card">
                    <img src={Akkshay} />
                    <div className="name">
                      <span style={{ fontWeight: "bold" }}>Akkshay</span>Khoslaa
                    </div>
                    <div className="desig">Founder, The Future School</div>
                  </div>
                </a>
              </Parallax>
              <Parallax
                className="custom-class-people"
                x={[50, -50]}
                tagOuter="figure"
              >
                <a
                  href="https://www.linkedin.com/in/jneeraj0807/"
                  target="_blank"
                >
                  <div className="people-card">
                    <img src={Neeraj} />
                    <div className="name">
                      <span style={{ fontWeight: "bold" }}>Neeraj</span>Joshi
                    </div>
                    <div className="desig">Founder, Pushstart</div>
                  </div>
                </a>
              </Parallax>
            </div>
            <div
              className="people-card-container pad-right margin-bot"
              id="scrollRight"
            >
              <Parallax
                className="custom-class-people"
                x={[-50, 50]}
                tagOuter="figure"
              >
                <a href="http://www.skswain.com" target="_blank">
                  <div className="people-card">
                    <img src={Sudhansu} />
                    <div className="name">
                      <span style={{ fontWeight: "bold" }}>Sudhansu</span>Swain
                    </div>
                    <div className="desig">Tech Lead, Pushstart</div>
                  </div>
                </a>
              </Parallax>

              <Parallax
                className="custom-class-people"
                x={[-50, 50]}
                tagOuter="figure"
              >
                <a
                  href="https://www.linkedin.com/in/christophergaskill/"
                  target="_blank"
                >
                  <div className="people-card">
                    <img src={Chris} />
                    <div className="name">
                      <span style={{ fontWeight: "bold" }}>Christopher</span>
                      Gaskill
                    </div>
                    <div className="desig">Founder, Frendshare</div>
                  </div>
                </a>
              </Parallax>
              <Parallax
                className="custom-class-people"
                x={[-50, 50]}
                tagOuter="figure"
              >
                <a
                  href="https://www.linkedin.com/in/prakharshivam/?originalSubdomain=in"
                  target="_blank"
                >
                  <div className="people-card">
                    <img src={Prakhar} />
                    <div className="name">
                      <span style={{ fontWeight: "bold" }}>Prakhar</span>Shivam
                    </div>
                    <div className="desig">Founder, Nodestory</div>
                  </div>
                </a>
              </Parallax>
            </div>
          </div>

          <div className="page edu">
            <div>
              <span className="page-header">
                <Fade left cascade>
                  Education
                </Fade>
              </span>
            </div>

            <Parallax
              className="custom-class-people"
              y={[30, -30]}
              tagOuter="figure"
            >
              <div className="edu-card-container">
                <Fade left>
                  <div className="edu-card">
                    <img src={IIITS} />
                    <div className="edu-card-content">
                      <div className="edu-card-header">
                        Indian Institute Of Information Technology
                      </div>
                      <div className="edu-card-subheader">
                        B.Tech, Computer Science Engineering{" "}
                        <span>(Exp. '21)</span>
                      </div>
                      <div className="edu-card-body">
                        A class full of creative minds, a campus so culturally
                        diverse and a college that pushes you to the limit. What
                        more could I ask for?
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </Parallax>
          </div>
          <div className="page contact">
            <div>
              <span className="page-header contact-page-header">
                <Fade left cascade>
                  Get In Touch
                </Fade>
              </span>
            </div>

            <form>
              <div className="contact-form-container">
                <textarea
                  id="contact-body"
                  className="contact-body"
                  placeholder={
                    "Nothing? How about some Friendly Football 🔵 🔴 / F1 🏎 Banter?\n Or Coffee ☕️ maybe? Type Away!"
                  }
                  onChange={() => this.validate("contact-body")}
                />
                <div className="contact-form-sub-container">
                  <input
                    id="contact-name"
                    className="contact-name"
                    placeholder="How can I get back to you?"
                    onChange={() => this.validate("contact-name")}
                  />
                  <button
                    className="contact-submit"
                    onClick={this.submitForm}
                    type="button"
                  >
                    Go
                  </button>
                </div>
                <div class="lds-ellipsis-container">
                  {this.state.formloader && (
                    <div class="lds-ellipsis">
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                  )}
                  {this.state.formSuccess && "Sent! 🎉"}
                  {this.state.formError && "Sorry, Try Again 🙁"}
                </div>
              </div>
            </form>
            <div className="social-container">
              <a href="https://www.linkedin.com/in/hanimo" target="_blank">
                <img src={LinkedIn} />
              </a>
              <a href="https://github.com/thehanimo" target="_blank">
                <img src={Github} />
              </a>
              <a href="https://instagram.com/thehanimo" target="_blank">
                <img src={Instagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer">
          <span>
            All product names, logos, and brands are property of their
            respective owners.
          </span>
          <span> Copyright © 2019 Hani Mohammed. All rights reserved.</span>
        </div>
      </React.Fragment>
    );
  }
}
