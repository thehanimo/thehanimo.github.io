import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";
import { send, init } from "emailjs-com";

import "./styles/home.css";
import hani from "../../assets/img/hani.jpg";

import NodestoryApp from "../../assets/img/Nodestory-app.png";
import PushApp from "../../assets/img/PushApp.png";
import PwipApp from "../../assets/img/Pwip-app.png";
import AntzknowApp from "../../assets/img/Antzknow-app.png";
import ZSApp from "../../assets/img/ZS-app.png";
import FutureSchoolApp from "../../assets/img/FutureSchool-app.png";

import RNAudioKit from "../../assets/img/RNAudioKit.png";
import PRCheck from "../../assets/img/PRCheck.png";

import IIITS from "../../assets/img/IIITS.png";

import LinkedIn from "../../assets/img/linkedin.svg";
import Github from "../../assets/img/github.svg";
import Instagram from "../../assets/img/instagram.svg";
import Dribble from "../../assets/img/dribble.svg";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companiesTrigger: false,
      showContactModal: false,
      width: undefined,
    };
  }

  componentDidMount = () => {
    this.resize();
    window.addEventListener("resize", this.resize);
    init("user_fPYfAmrOM5e7hArFO7aDq");
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize);
  };

  resize = () => {
    this.setState({ width: window.innerWidth });
  };

  toggleContactModal = () => {
    if (this.state.showContactModal) {
      this.setState({
        formloader: false,
        formSuccess: false,
        showContactModal: !this.state.showContactModal,
      });
    } else {
      this.setState({ showContactModal: !this.state.showContactModal });
    }
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
        body,
      })
        .then((res) => {
          this.setState({ formloader: false, formSuccess: true });
        })
        // Handle errors here however you like, or use a React error boundary
        .catch((err) => this.setState({ formloader: false, formError: true }));
    }
  };

  validate = (field) => {
    let body = document.getElementById(field).value.trim();
    if (body === "") {
      document.getElementById(field).classList.add("error");
      return false;
    } else document.getElementById(field).classList.remove("error");
    return body;
  };
  render() {
    const products = [
      {
        bg: "#ee5253",
        link: "https://apps.apple.com/us/app/nodestory/id1454174347",
        title: "Nodestory",
        subTitle: "Full Stack",
        imageURI: NodestoryApp,
        imageStyle: {
          width: "60%",
          marginTop: 0,
        },
      },
      {
        bg: "#F5B83D",
        link: "https://pushstart.in",
        title: "Pushstart",
        subTitle: "Mobile Application",
        imageURI: PushApp,
        imageStyle: {
          width: "60%",
          marginTop: 0,
        },
      },
      {
        bg: "#005BAB",
        link: "https://pwip.co",
        title: "Pwip",
        subTitle: "Mobile Application",
        imageURI: PwipApp,
        imageStyle: {
          width: "50%",
          marginTop: 0,
        },
      },
      {
        bg: "#4A4A4A",
        link: "https://www.zscore.co.in",
        title: "ZScore",
        subTitle: "Web Application",
        imageURI: ZSApp,
        imageStyle: {
          width: "80%",
          marginTop: 30,
          marginBottom: 30,
        },
      },
      {
        bg: "#EABAD8",
        link: "https://www.antzknow.com",
        title: "Antzknow",
        subTitle: "Web Application, UI/UX",
        imageURI: AntzknowApp,
        imageStyle: {
          width: "80%",
          marginTop: 30,
          marginBottom: 30,
        },
        dribbleLink: "https://dribbble.com/shots/11583582-Antzknow-Web-UI-UX",
      },
      {
        bg: "#049EE2",
        title: "The Future School",
        subTitle: "Code Walkthroughs",
        imageURI: FutureSchoolApp,
        imageStyle: {
          width: "80%",
          marginTop: 30,
          marginBottom: 30,
        },
      },
    ];
    let productWidth = undefined;
    if (this.state.width) {
      if (this.state.width >= 768) {
        productWidth = "50vw";
      } else {
        productWidth = "100vw";
      }
    }
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    return (
      <React.Fragment>
        {iOS && <div className="ios-peek" />}
        <div
          style={{
            backgroundColor: "black",
            backgroundImage: "linear-gradient(#282828, #000)",
          }}
        >
          <Container>
            <Row style={{ paddingBottom: 80 }}>
              <Container>
                <Row style={{ alignItems: "center", marginTop: "15%" }}>
                  <Col
                    xs={{ size: 8, order: 3, offset: 1 }}
                    sm={{ size: 8, order: 3, offset: 1 }}
                    md={{ size: 5, order: 1, offset: 1 }}
                    lg={{ size: 4, order: 1, offset: 2 }}
                    xl={{ size: 4, order: 1, offset: 2 }}
                  >
                    <Fade left distance="20px" duration={1500}>
                      <h2
                        style={{
                          fontFamily: "MuseoSans-900",
                          color: "#FBFBFB",
                          textTransform: "uppercase",
                          lineHeight: 1.2,
                        }}
                      >
                        Developer
                        <br />
                        & Design
                        <br />
                        Enthusiast.
                      </h2>
                    </Fade>
                    <Fade top distance="20px" delay={250}>
                      <p
                        style={{
                          color: "#8D8D8D",
                          fontFamily: "MuseoSans-300",
                        }}
                      >
                        Hi! I'm Hani Mohammed and writing code for the real
                        world is what I do.
                      </p>
                    </Fade>
                    <Fade top distance="20px" delay={500}>
                      <div
                        style={{
                          marginBottom: 10,
                        }}
                      >
                        <a
                          className="link"
                          href="mailto:thehanimo@gmail.com"
                          style={{
                            color: "#FBFBFB",
                            fontFamily: "MuseoSans-300",
                          }}
                        >
                          thehanimo@gmail.com
                        </a>
                      </div>
                    </Fade>
                    <div className="social-container">
                      <Zoom delay={750}>
                        <a
                          href="https://www.linkedin.com/in/thehanimo"
                          target="_blank"
                        >
                          <img src={LinkedIn} />
                        </a>
                      </Zoom>
                      <Zoom delay={850}>
                        <a href="https://github.com/thehanimo" target="_blank">
                          <img src={Github} />
                        </a>
                      </Zoom>
                      <Zoom delay={950}>
                        <a
                          href="https://instagram.com/thehanimo"
                          target="_blank"
                        >
                          <img src={Instagram} />
                        </a>
                      </Zoom>
                      <Zoom delay={1050}>
                        <a
                          href="https://dribbble.com/thehanimo"
                          target="_blank"
                        >
                          <img src={Dribble} />
                        </a>
                      </Zoom>
                    </div>
                    <Fade
                      bottom
                      distance="30px"
                      delay={1150}
                      cascade
                      duration={750}
                    >
                      <div>
                        <Button outline pill onClick={this.toggleContactModal}>
                          Say Hello!
                        </Button>
                        <Button
                          outline
                          pill
                          href="/Hani_Resume.pdf"
                          target="_blank"
                          theme="secondary"
                          style={{ marginLeft: 20 }}
                        >
                          Resume
                        </Button>
                      </div>
                    </Fade>
                    <Modal
                      open={this.state.showContactModal}
                      toggle={this.toggleContactModal}
                    >
                      <ModalBody>
                        <form>
                          <div className="contact-form-container">
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
                              {!this.state.formloader &&
                                !this.state.formSuccess &&
                                !this.state.formError &&
                                "👋 Hey There!"}
                            </div>
                            <textarea
                              id="contact-body"
                              className="contact-body"
                              placeholder={"Your message..."}
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
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </ModalBody>
                    </Modal>
                  </Col>
                  <Col
                    xs={{ size: 12, order: 2 }}
                    sm={{ size: 12, order: 2 }}
                    md={{ size: 1, order: 2 }}
                    lg={{ size: 1, order: 2 }}
                    xl={{ size: 1, order: 2 }}
                    style={{ height: 50 }}
                  />
                  <Col
                    xs={{ size: 6, order: 1, offset: 1 }}
                    sm={{ size: 5, order: 1, offset: 1 }}
                    md={{ size: 4, order: 2, offset: 0 }}
                    lg={{ size: 3, order: 2, offset: 0 }}
                    xl={{ size: 3, order: 2, offset: 0 }}
                  >
                    <Fade duration={2000}>
                      <div>
                        <img
                          src={hani}
                          alt="Hani Mohammed"
                          className="avatar"
                        />
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Container>
        </div>
        <div
          style={{
            backgroundColor: "black",
          }}
        >
          <Container>
            <Row style={{ paddingTop: 50, paddingBottom: 30 }}>
              <Col>
                <center>
                  <h3
                    style={{
                      fontFamily: "MuseoSans-700",
                      color: "#AAA",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                    }}
                  >
                    Work
                  </h3>
                  <div
                    style={{
                      height: 5,
                      width: 80,
                      backgroundColor: "#4A4A4A",
                    }}
                  />
                </center>
              </Col>
            </Row>
          </Container>
        </div>
        <Container style={{ margin: 0 }}>
          <Row style={{ width: "100vw", backgroundColor: "#F3F3F3" }}>
            {products.map((item, index) => (
              <Col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                xl="6"
                style={{
                  backgroundColor: item.bg,
                  width: "100%",
                  height: productWidth,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <center>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "left",
                      marginTop: 30,
                    }}
                  >
                    <a
                      className={item.link ? "link" : null}
                      target="_blank"
                      href={item.link}
                      style={{
                        color: "#FBFBFB",
                        fontFamily: "MuseoSans-700",
                      }}
                    >
                      {item.title}
                    </a>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "left",
                      color: "#FBFBFB",
                      fontFamily: "MuseoSans-500",
                      fontSize: "0.8em",
                    }}
                  >
                    {item.subTitle}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 30,
                      right: 16,
                    }}
                  >
                    {item.dribbleLink && (
                      <div
                        style={{
                          float: "left",
                          height: 20,
                          width: 20,
                          marginTop: 2,
                          marginRight: 10,
                        }}
                      >
                        <a
                          href={item.dribbleLink}
                          target="_blank"
                          className="custom-link-anim"
                        >
                          <img src={Dribble} />
                        </a>
                      </div>
                    )}
                    {item.link && (
                      <Button
                        outline
                        pill
                        href={item.link}
                        target="_blank"
                        theme="light"
                        size="sm"
                        className="custom-light-but"
                      >
                        Go to site
                      </Button>
                    )}
                  </div>
                </center>
                <div
                  style={{
                    flex: 1,
                    width: "100%",
                    marginBottom: 16,
                    marginTop: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Fade bottom distance="30px" delay={200 * (index % 2)}>
                    <img src={item.imageURI} style={item.imageStyle} />
                  </Fade>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <div
          style={{
            backgroundColor: "#E6ECF0",
            paddingBottom: 80,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Container style={{ margin: 0 }}>
            <Row style={{ paddingTop: 50, paddingBottom: 50 }}>
              <Col>
                <center>
                  <h3
                    style={{
                      fontFamily: "MuseoSans-700",
                      color: "#4A4A4A",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                    }}
                  >
                    Projects
                  </h3>
                  <div
                    style={{
                      height: 5,
                      width: 120,
                      backgroundColor: "#DADADA",
                    }}
                  />
                </center>
              </Col>
            </Row>
            <Row>
              <Col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                xl="6"
                style={{
                  width: "100%",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: 0,
                  paddingBottom: 50,
                }}
              >
                <Fade bottom distance="30px" delay={200}>
                  <div style={{ width: "30%", maxWidth: 150 }}>
                    <a
                      href="https://github.com/thehanimo/react-native-audiokit"
                      target="_blank"
                    >
                      <img
                        src={RNAudioKit}
                        className="project"
                        style={{ marginTop: -10 }}
                      />
                    </a>
                  </div>
                  <div style={{ width: "60%", marginLeft: 12 }}>
                    <div>
                      <a
                        href="https://github.com/thehanimo/react-native-audiokit"
                        target="_blank"
                        className="edu-card-header link-dark"
                        style={{
                          fontFamily: "MuseoSans-700",
                          fontSize: "1.2em",
                        }}
                      >
                        React Native AudioKit
                      </a>
                    </div>
                    <div
                      className="edu-card-subheader"
                      style={{
                        maxWidth: 290,
                        fontSize: "0.8em",
                        marginBottom: 16,
                      }}
                    >
                      Exposes AudioKit for iOS to React Native
                    </div>
                    <Button
                      outline
                      pill
                      href="https://github.com/thehanimo/react-native-audiokit"
                      target="_blank"
                      theme="dark"
                      size="sm"
                      style={{ marginLeft: -4 }}
                    >
                      View on Github
                    </Button>
                  </div>
                </Fade>
              </Col>

              <Col
                xs="12"
                sm="12"
                md="6"
                lg="6"
                xl="6"
                style={{
                  width: "100%",
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: 0,
                  paddingBottom: 50,
                }}
              >
                <Fade bottom distance="30px" delay={400}>
                  <div style={{ width: "30%", maxWidth: 150 }}>
                    <a
                      href="https://github.com/thehanimo/pr-title-checker"
                      target="_blank"
                    >
                      <img
                        src={PRCheck}
                        className="project"
                        style={{ marginTop: -10 }}
                      />
                    </a>
                  </div>
                  <div style={{ width: "60%", marginLeft: 12 }}>
                    <div>
                      <a
                        href="https://github.com/thehanimo/pr-title-checker"
                        target="_blank"
                        className="edu-card-header link-dark"
                        style={{
                          fontFamily: "MuseoSans-700",
                          fontSize: "1.2em",
                        }}
                      >
                        PR Title Checker
                      </a>
                    </div>
                    <div
                      className="edu-card-subheader"
                      style={{
                        maxWidth: 290,
                        fontSize: "0.8em",
                        marginBottom: 16,
                      }}
                    >
                      A Github Action to check if pull request titles conform to
                      Contribution Guidelines
                    </div>
                    <Button
                      outline
                      pill
                      href="https://github.com/thehanimo/pr-title-checker"
                      target="_blank"
                      theme="dark"
                      size="sm"
                      style={{ marginLeft: -4 }}
                    >
                      View on Github
                    </Button>
                  </div>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col>
                <center>
                  <p
                    style={{
                      fontFamily: "MuseoSans-100",
                      textTransform: "uppercase",
                      fontSize: 22,
                      marginTop: 10,
                      marginBottom: 20,
                    }}
                  >
                    Contributions
                  </p>
                  <Fade top cascade>
                    <div>
                      <div style={{ marginBottom: 6 }}>
                        <a
                          href="https://github.com/SystangoTechnologies/react-native-apple-authentication"
                          target="_blank"
                          className="link-dark"
                        >
                          SystangoTechnologies/react-native-apple-authentication
                        </a>
                      </div>
                      <div style={{ marginBottom: 6 }}>
                        <a
                          href="https://github.com/react-native-community/react-native-blur"
                          target="_blank"
                          className="link-dark"
                        >
                          @react-native-community/blur
                        </a>
                      </div>
                      <div style={{ marginBottom: 6 }}>
                        <a
                          href="https://github.com/facebook/docusaurus"
                          target="_blank"
                          className="link-dark"
                        >
                          facebook/docusaurus
                        </a>
                      </div>
                      <div style={{ marginBottom: 6 }}>
                        <a
                          href="https://github.com/facebook/react-native-website"
                          target="_blank"
                          className="link-dark"
                        >
                          facebook/react-native-website
                        </a>
                      </div>
                      <div style={{ marginBottom: 6 }}>
                        <a
                          href="https://github.com/Kong/kong"
                          target="_blank"
                          className="link-dark"
                        >
                          Kong/kong
                        </a>
                      </div>
                      <div style={{ marginBottom: 6 }}>
                        <a
                          href="https://github.com/gatsbyjs/gatsby"
                          target="_blank"
                          className="link-dark"
                        >
                          gatsbyjs/gatsby
                        </a>
                      </div>
                    </div>
                  </Fade>
                </center>
              </Col>
            </Row>
          </Container>
        </div>

        <div
          style={{
            backgroundColor: "#fef9ee",
            paddingBottom: 80,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Container style={{ margin: 0 }}>
            <Row style={{ paddingTop: 50, paddingBottom: 30 }}>
              <Col>
                <center>
                  <h3
                    style={{
                      fontFamily: "MuseoSans-700",
                      color: "#4A4A4A",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                    }}
                  >
                    Publications
                  </h3>
                  <div
                    style={{
                      height: 5,
                      width: 120,
                      backgroundColor: "#DADADA",
                    }}
                  />
                </center>
              </Col>
            </Row>
            <Row>
              <Col lg={{ size: 8, order: 2, offset: 2 }}>
                <Fade bottom distance="30px" delay={200}>
                  <div>
                    <a
                      href="https://ieeexplore.ieee.org/abstract/document/9288271"
                      target="_blank"
                      className="link-dark-normal"
                    >
                      <li
                        style={{
                          paddingLeft: 16,
                          paddingRight: 16,
                          fontFamily: "MuseoSans-300",
                        }}
                      >
                        Mohammed, Hani, Venkat Himavanth Reddy, and Subu
                        Kandaswamy.
                        <span style={{ fontFamily: "MuseoSans-700" }}>
                          "A Decentralized Strategy for Cooperative Driving
                          among Autonomous Cars at Lane Closures."
                        </span>{" "}
                        2020 IEEE 32nd International Conference on Tools with
                        Artificial Intelligence (ICTAI). IEEE, 2020.
                      </li>
                    </a>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          style={{
            backgroundColor: "#F3F3F3",
            paddingBottom: 80,
          }}
        >
          <Container>
            <Row style={{ paddingTop: 50, paddingBottom: 30 }}>
              <Col>
                <center>
                  <h3
                    style={{
                      fontFamily: "MuseoSans-700",
                      color: "#4A4A4A",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                    }}
                  >
                    Education
                  </h3>
                  <div
                    style={{
                      height: 5,
                      width: 120,
                      backgroundColor: "#DADADA",
                    }}
                  />
                </center>
              </Col>
            </Row>
            <Row
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fade bottom distance="30px" delay={200}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  <img
                    src={IIITS}
                    style={{ width: "25%", float: "left", maxWidth: 133 }}
                  />
                  <div style={{ marginLeft: 12 }}>
                    <div>
                      <a
                        href="https://www.iiits.ac.in"
                        target="_blank"
                        className="edu-card-header link-dark"
                        style={{ fontSize: "1.2em" }}
                      >
                        Indian Institute Of Information Technology
                      </a>
                    </div>
                    <div className="edu-card-subheader">
                      B.Tech, Computer Science Engineering{" "}
                      <span>(Exp. '21)</span>
                    </div>
                  </div>
                </div>
              </Fade>
            </Row>
          </Container>
        </div>

        <div
          style={{
            backgroundColor: "#F3F3F3",
            borderTop: "1px solid #DADADA",
          }}
        >
          <Container>
            <Row
              style={{
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              <Col
                className="footer-text"
                xs={{ size: 12, offset: 0 }}
                sm={{ size: 12, offset: 0 }}
                md={{ size: 6, offset: 0 }}
                lg={{ size: 7, offset: 0 }}
                xl={{ size: 5, offset: 0 }}
              >
                All product names, logos, and brands are property of their
                respective owners.
              </Col>
              <Col
                className="footer-text"
                xs={{ size: 12, offset: 0 }}
                sm={{ size: 12, offset: 0 }}
                md={{ size: 6, offset: 0 }}
                lg={{ size: 5, offset: 0 }}
                xl={{ size: 4, offset: 3 }}
              >
                Copyright © 2021 Hani Mohammed. All rights reserved.
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
