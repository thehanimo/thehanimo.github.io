import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";

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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companiesTrigger: false
    };
  }
  componentDidMount = () => {
    document.getElementById("scrollRight").scrollLeft = 10000;
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
              </Zoom>
              <Zoom delay={600} when={this.state.companiesTrigger}>
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
              </Zoom>
            </div>
            <div className="comp-container">
              <Zoom delay={1000} when={this.state.companiesTrigger}>
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
              </Zoom>
            </div>
            <div className="comp-container">
              <Zoom delay={450} when={this.state.companiesTrigger}>
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
              </Zoom>
            </div>
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

          <div className="people-card-container" style={{ paddingLeft: 150 }}>
            <Parallax
              className="custom-class-people"
              x={[50, -50]}
              tagOuter="figure"
            >
              <div className="people-card">
                <img src={Tristan} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Tristan</span>Liu
                </div>
                <div className="desig">CEO, Antzknow</div>
              </div>
            </Parallax>

            <Parallax
              className="custom-class-people"
              x={[50, -50]}
              tagOuter="figure"
            >
              <div className="people-card">
                <img src={Akkshay} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Akkshay</span>Khoslaa
                </div>
                <div className="desig">Founder, The Future School</div>
              </div>
            </Parallax>
            <Parallax
              className="custom-class-people"
              x={[50, -50]}
              tagOuter="figure"
            >
              <div className="people-card">
                <img src={Neeraj} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Neeraj</span>Joshi
                </div>
                <div className="desig">Founder, Pushstart</div>
              </div>
            </Parallax>
          </div>
          <div
            className="people-card-container"
            id="scrollRight"
            style={{ paddingLeft: 150 }}
          >
            <Parallax
              className="custom-class-people"
              x={[-50, 50]}
              tagOuter="figure"
            >
              <div className="people-card">
                <img src={Sudhansu} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Sudhansu</span>Swain
                </div>
                <div className="desig">Tech Lead, Pushstart</div>
              </div>
            </Parallax>

            <Parallax
              className="custom-class-people"
              x={[-50, 50]}
              tagOuter="figure"
            >
              <div className="people-card">
                <img src={Chris} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Christopher</span>Gaskill
                </div>
                <div className="desig">Founder, Frendshare</div>
              </div>
            </Parallax>
            <Parallax
              className="custom-class-people"
              x={[-50, 50]}
              tagOuter="figure"
            >
              <div className="people-card">
                <img src={Prakhar} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Prakhar</span>Shivam
                </div>
                <div className="desig">Founder, Nodestory</div>
              </div>
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
        </div>
      </React.Fragment>
    );
  }
}
