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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companiesTrigger: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="main-banner">
          <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
            <div className="avatar-container">
              <img src={hani} alt="Hani Mohammed" className="avatar" />
            </div>
          </Parallax>
          <div className="title-container">
            <span className="title">
              <Fade left cascade>
                Hani Mohammed.
              </Fade>
            </span>
          </div>

          <div className="sub-title-container">
            <Parallax className="custom-class" y={[50, -50]} tagOuter="figure">
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
        <div
          className="page-sub-header-container"
          style={{ paddingBottom: 1000 }}
        >
          <div className="page-sub-header">
            <Flip left cascade>
              <span>Fabulous </span>
              <span style={{ fontWeight: "bold" }}>People</span>
            </Flip>
            <Fade top delay={500}>
              <div className="page-sub-header-2">I've worked with</div>
            </Fade>
          </div>

          <div className="people-card-container">
            <Parallax className="custom-class" x={[50, -50]} tagOuter="figure">
              <div className="people-card start">
                <img src={hani} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Hani</span>Mohammed1
                </div>
                <div className="desig">Founder, Pushstart</div>
              </div>
            </Parallax>

            <Parallax className="custom-class" x={[50, -50]} tagOuter="figure">
              <div className="people-card end">
                <img src={hani} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Hani</span>Mohammed
                </div>
                <div className="desig">Founder, Pushstart</div>
              </div>
            </Parallax>
            <Parallax className="custom-class" x={[50, -50]} tagOuter="figure">
              <div className="people-card start">
                <img src={hani} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Hani</span>Mohammed
                </div>
                <div className="desig">Founder, Pushstart</div>
              </div>
            </Parallax>
          </div>
          <div className="people-card-container">
            <Parallax className="custom-class" x={[-50, 50]} tagOuter="figure">
              <div className="people-card start">
                <img src={hani} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Hani</span>Mohammed1
                </div>
                <div className="desig">Founder, Pushstart</div>
              </div>
            </Parallax>

            <Parallax className="custom-class" x={[-50, 50]} tagOuter="figure">
              <div className="people-card end">
                <img src={hani} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Hani</span>Mohammed
                </div>
                <div className="desig">Founder, Pushstart</div>
              </div>
            </Parallax>
            <Parallax className="custom-class" x={[-50, 50]} tagOuter="figure">
              <div className="people-card start">
                <img src={hani} />
                <div className="name">
                  <span style={{ fontWeight: "bold" }}>Hani</span>Mohammed
                </div>
                <div className="desig">Founder, Pushstart</div>
              </div>
            </Parallax>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
