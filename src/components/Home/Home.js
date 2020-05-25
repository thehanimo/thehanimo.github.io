import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import { send, init } from "emailjs-com";

import "./styles/home.css";
import hani from "../../assets/img/hani.jpg";

import NodestoryApp from "../../assets/img/Nodestory-app.png";
import PushApp from "../../assets/img/PushApp.png";
import PwipApp from "../../assets/img/Pwip-app.png";
import AntzknowApp from "../../assets/img/Antzknow-app.png";
import ZSApp from "../../assets/img/ZS-app.png";
import FutureSchoolApp from "../../assets/img/FutureSchool-app.png";

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
    };
  }

  componentDidMount = () => {
    // document.getElementById("scrollRight").scrollLeft = 10000;
    init("user_fPYfAmrOM5e7hArFO7aDq");
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
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "black" }}>
          <Container>
            <Row
              style={{
                height: "90vh",
                minHeight: 600,
              }}
            >
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
                        Hi! I'm Hani Mohammed and writing code for the
                        real-world is what I do.
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
              <Col
                xs={{ size: 12, offset: 0 }}
                sm={{ size: 12, offset: 0 }}
                md={{ size: 6, offset: 0 }}
                lg={{ size: 4, offset: 1 }}
                xl={{ size: 4, offset: 2 }}
              >
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
                  style={{ height: 5, width: 100, backgroundColor: "#4A4A4A" }}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Container style={{ margin: 0 }}>
          <Row style={{ width: "100vw", backgroundColor: "#F3F3F3" }}>
            <Col
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              style={{
                backgroundColor: "#ee5253",
                width: "100%",
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
                    className="link"
                    href="https://nodestory.com"
                    style={{
                      color: "#FBFBFB",
                      fontFamily: "MuseoSans-500",
                    }}
                  >
                    Nodestory
                  </a>
                </div>
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    color: "#FBFBFB",
                    fontFamily: "MuseoSans-300",
                    fontSize: "0.8em",
                  }}
                >
                  Full Stack
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 30,
                    right: 16,
                  }}
                >
                  <Button
                    outline
                    pill
                    href="https://nodestory.com"
                    target="_blank"
                    theme="light"
                    size="sm"
                    className="custom-light-but"
                  >
                    Go to site
                  </Button>
                </div>
                <Fade bottom distance="30px">
                  <img
                    src={NodestoryApp}
                    style={{ width: "70%", marginTop: -30 }}
                  />
                </Fade>
              </center>
            </Col>
            <Col
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              style={{
                backgroundColor: "#F5B83D",
                width: "100%",
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
                    className="link"
                    href="https://pushstart.in"
                    style={{
                      color: "#FBFBFB",
                      fontFamily: "MuseoSans-500",
                    }}
                  >
                    Pushstart
                  </a>
                </div>
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    color: "#FBFBFB",
                    fontFamily: "MuseoSans-300",
                    fontSize: "0.8em",
                  }}
                >
                  Mobile Application
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 30,
                    right: 16,
                  }}
                >
                  <Button
                    outline
                    pill
                    href="https://pushstart.in"
                    target="_blank"
                    theme="light"
                    size="sm"
                    className="custom-light-but"
                  >
                    Go to site
                  </Button>
                </div>
                <Fade bottom distance="30px" delay={250}>
                  <img src={PushApp} style={{ width: "70%", marginTop: -25 }} />
                </Fade>
              </center>
            </Col>
            <Col
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              style={{
                backgroundColor: "#005BAB",
                width: "100%",
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
                    className="link"
                    href="https://pwip.co"
                    style={{
                      color: "#FBFBFB",
                      fontFamily: "MuseoSans-500",
                    }}
                  >
                    Pwip
                  </a>
                </div>
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    color: "#FBFBFB",
                    fontFamily: "MuseoSans-300",
                    fontSize: "0.8em",
                  }}
                >
                  Mobile Application
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 30,
                    right: 16,
                  }}
                >
                  <Button
                    outline
                    pill
                    href="https://pwip.co"
                    target="_blank"
                    theme="light"
                    size="sm"
                    className="custom-light-but"
                  >
                    Go to site
                  </Button>
                </div>
                <Fade bottom distance="30px">
                  <img src={PwipApp} style={{ width: "50%", marginTop: -20 }} />
                </Fade>
              </center>
            </Col>
            <Col
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              style={{
                backgroundColor: "#4A4A4A",
                width: "100%",
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
                    className="link"
                    href="https://www.zscore.co.in"
                    style={{
                      color: "#FBFBFB",
                      fontFamily: "MuseoSans-500",
                    }}
                  >
                    ZScore
                  </a>
                </div>
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    color: "#FBFBFB",
                    fontFamily: "MuseoSans-300",
                    fontSize: "0.8em",
                  }}
                >
                  Web Application
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 30,
                    right: 16,
                  }}
                >
                  <Button
                    outline
                    pill
                    href="https://www.zscore.co.in"
                    target="_blank"
                    theme="light"
                    size="sm"
                    className="custom-light-but"
                  >
                    Go to site
                  </Button>
                </div>
              </center>
              <div
                style={{
                  flex: 1,
                  width: "100%",
                  marginBottom: 46,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Fade bottom distance="30px" delay={250}>
                  <img
                    src={ZSApp}
                    style={{
                      width: "80%",
                      marginTop: 30,
                      marginBottom: 30,
                    }}
                  />
                </Fade>
              </div>
            </Col>
            <Col
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              style={{
                backgroundColor: "#EABAD8",
                width: "100%",
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
                    className="link"
                    href="https://www.antzknow.com"
                    style={{
                      color: "#FBFBFB",
                      fontFamily: "MuseoSans-500",
                    }}
                  >
                    Antzknow
                  </a>
                </div>
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    color: "#FBFBFB",
                    fontFamily: "MuseoSans-300",
                    fontSize: "0.8em",
                  }}
                >
                  Web Application, UI/UX
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 30,
                    right: 16,
                  }}
                >
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
                      href="https://dribbble.com/shots/11583582-Antzknow-Web-UI-UX"
                      target="_blank"
                      className="custom-link-anim"
                    >
                      <img src={Dribble} />
                    </a>
                  </div>
                  <Button
                    outline
                    pill
                    href="https://www.antzknow.com"
                    target="_blank"
                    theme="light"
                    size="sm"
                    className="custom-light-but"
                  >
                    Go to site
                  </Button>
                </div>
              </center>
              <div
                style={{
                  flex: 1,
                  width: "100%",
                  marginBottom: 46,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Fade bottom distance="30px">
                  <img
                    src={AntzknowApp}
                    style={{
                      width: "80%",
                      marginTop: 30,
                      marginBottom: 30,
                    }}
                  />
                </Fade>
              </div>
            </Col>
            <Col
              xs="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
              style={{
                backgroundColor: "#049EE2",
                width: "100%",
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
                    className="link"
                    href="http://www.thefuture.school"
                    style={{
                      color: "#FBFBFB",
                      fontFamily: "MuseoSans-500",
                    }}
                  >
                    The Future School
                  </a>
                </div>
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    color: "#FBFBFB",
                    fontFamily: "MuseoSans-300",
                    fontSize: "0.8em",
                  }}
                >
                  Code Walkthroughs
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 30,
                    right: 16,
                  }}
                >
                  <Button
                    outline
                    pill
                    href="http://www.thefuture.school"
                    target="_blank"
                    theme="light"
                    size="sm"
                    className="custom-light-but"
                  >
                    Go to site
                  </Button>
                </div>
              </center>
              <div
                style={{
                  flex: 1,
                  width: "100%",
                  marginBottom: 46,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Fade bottom distance="30px" delay={250}>
                  <img
                    src={FutureSchoolApp}
                    style={{
                      width: "80%",
                      marginTop: 30,
                      marginBottom: 30,
                    }}
                  />
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            backgroundColor: "#F3F3F3",
            paddingBottom: 80,
          }}
        >
          <Container>
            <Row style={{ paddingTop: 50, paddingBottom: 30 }}>
              <Col
                xs={{ size: 12, offset: 0 }}
                sm={{ size: 12, offset: 0 }}
                md={{ size: 6, offset: 0 }}
                lg={{ size: 4, offset: 1 }}
                xl={{ size: 4, offset: 2 }}
              >
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
                  style={{ height: 5, width: 100, backgroundColor: "#DADADA" }}
                />
              </Col>
            </Row>
            <Row
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                <img src={IIITS} style={{ width: "15%", float: "left" }} />
                <div style={{ marginLeft: 12 }}>
                  <div>
                    <a
                      href="https://www.iiits.ac.in"
                      target="_blank"
                      className="edu-card-header link-dark"
                    >
                      Indian Institute Of Information Technology
                    </a>
                  </div>
                  <div className="edu-card-subheader">
                    B.Tech, Computer Science Engineering <span>(Exp. '21)</span>
                  </div>
                </div>
              </div>
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
                Copyright © 2020 Hani Mohammed. All rights reserved.
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
