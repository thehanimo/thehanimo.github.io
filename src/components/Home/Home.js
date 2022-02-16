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
import SkillbeeApp from "../../assets/img/skillbee.png";
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
import Twitter from "../../assets/img/twitter.svg";
import Dribble from "../../assets/img/dribble.svg";
import DribbleDark from "../../assets/img/dribble-dark.svg";
import WindowWidth from "../WindowWidth/WindowWidth";

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
        bg: "#575fcf",
        link: "https://skillbee.com",
        title: "Skillbee",
        subTitle: "Founding Engineer",
        imageURI: SkillbeeApp,
        imageStyle: {
          mobileWidth: "90%",
          width: "60%",
          marginTop: 0,
        },
        fullWidth: true,
      },
      {
        bg: "#ee5253",
        link: "https://www.producthunt.com/posts/nodestory",
        title: "Nodestory",
        subTitle: "Full Stack",
        imageURI: NodestoryApp,
        imageStyle: {
          width: "60%",
          marginTop: -30,
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
          marginTop: -30,
        },
        light: true,
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
        title: "Antzknow",
        subTitle: "Web Application, UI/UX",
        imageURI: AntzknowApp,
        imageStyle: {
          width: "80%",
          marginTop: 30,
          marginBottom: 30,
        },
        dribbleLink: "https://dribbble.com/shots/11583582-Antzknow-Web-UI-UX",
        light: true,
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
      <WindowWidth>
        {({ windowWidth }) => (
          <React.Fragment>
            {iOS && <div className="ios-peek" />}
            <div
              style={{
                backgroundColor: "black",
                backgroundImage: "linear-gradient(#282828, #000)",
              }}
            >
              <Container>
                <Row style={{}}>
                  <Container>
                    <div
                      style={{
                        position: "absolute",
                        top: 40,
                        right: 40,
                        color: "#fff",
                        fontFamily: "MierA-DemiBold",
                      }}
                    >
                      <img
                        src={hani}
                        alt="Hani Mohammed"
                        className="avatar"
                        style={{ height: 26, width: 26, marginRight: 8 }}
                      />
                      thehanimo
                    </div>
                    <Row style={{ alignItems: "center", marginTop: "100px" }}>
                      <Col
                        xs={{ size: 10, offset: 1 }}
                        sm={{ size: 10, offset: 1 }}
                        md={{ size: 6, offset: 0 }}
                        lg={{ size: 5, offset: 1 }}
                        xl={{ size: 4, offset: 2 }}
                      >
                        <Fade left distance="20px" duration={1500}>
                          <h2
                            style={{
                              fontFamily: "Cambon-Light",
                              color: "#FBFBFB",
                              // textTransform: "uppercase",
                              lineHeight: 1.2,
                            }}
                          >
                            Hani Mohammed
                          </h2>
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
                                fontFamily: "MierA-Regular",
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
                            <a
                              href="https://github.com/thehanimo"
                              target="_blank"
                            >
                              <img src={Github} />
                            </a>
                          </Zoom>
                          <Zoom delay={950}>
                            <a
                              href="https://twitter.com/thehanimo"
                              target="_blank"
                            >
                              <img src={Twitter} style={{ height: 18 }} />
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
                          <div style={{ marginLeft: -4, marginBottom: 32 }}>
                            <Button
                              outline
                              pill
                              href="/Hani_Resume.pdf"
                              target="_blank"
                              style={{
                                fontFamily: "MierA-Book",
                                paddingTop: 14,
                                paddingLeft: 42,
                                paddingRight: 42,
                              }}
                            >
                              View Resume
                            </Button>
                          </div>
                        </Fade>
                      </Col>
                      <Col
                        xs={{ size: 10, offset: 1 }}
                        sm={{ size: 10, offset: 1 }}
                        md={{ size: 6, offset: 0 }}
                        lg={{ size: 5, offset: 0 }}
                        xl={{ size: 4, offset: 0 }}
                      >
                        <div
                          style={{
                            color: "#8D8D8D",
                            fontFamily: "MierA-Book",
                            maxWidth: 340,
                          }}
                        >
                          <Fade
                            top
                            distance="20px"
                            delay={1500}
                            duration={1000}
                          >
                            <p>
                              Hey there! I love solving problems, mostly using
                              computers. Some call it programming.
                            </p>
                          </Fade>
                          <Fade
                            top
                            distance="20px"
                            delay={1750}
                            duration={1000}
                          >
                            <p>
                              Giving back to the community is something I firmly
                              believe in. I contribute to open-source software
                              as much as I can.
                            </p>
                          </Fade>
                          <Fade
                            top
                            distance="20px"
                            delay={2000}
                            duration={1000}
                          >
                            <p>
                              I’m also a big fan of designing - both algorithms
                              and interfaces. To create applications that leave
                              an impression, I consider them both essential.
                            </p>
                          </Fade>
                          <Fade
                            top
                            distance="20px"
                            delay={2250}
                            duration={1000}
                          >
                            <p>
                              I don’t just build products; I try to make them as
                              elegant and intuitive as possible.
                            </p>
                          </Fade>
                        </div>
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
                          fontFamily: "Cambon-Light",
                          color: "#AAA",
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
                    md={item.fullWidth ? "12" : "6"}
                    lg={item.fullWidth ? "12" : "6"}
                    xl={item.fullWidth ? "12" : "6"}
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
                            color: item.light ? "4A4A4A" : "#FBFBFB",
                            fontFamily: "MierA-DemiBold",
                          }}
                        >
                          {item.title}
                        </a>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          textAlign: "left",
                          color: item.light ? "4A4A4A" : "#FBFBFB",
                          fontFamily: "MierA-Regular",
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
                            className="dark-svg"
                          >
                            <a
                              href={item.dribbleLink}
                              target="_blank"
                              className="custom-link-anim"
                            >
                              <img src={item.light ? DribbleDark : Dribble} />
                            </a>
                          </div>
                        )}
                        {item.link && (
                          <Button
                            outline
                            pill
                            href={item.link}
                            target="_blank"
                            theme={item.light ? "secondary" : "light"}
                            size="sm"
                            className={!item.light && "custom-light-but"}
                            style={{
                              fontFamily: "MierA-Book",
                              paddingTop: 7,
                              paddingLeft: 12,
                              paddingRight: 12,
                            }}
                          >
                            Visit site
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
                      <Fade
                        bottom
                        distance="30px"
                        delay={200 * ((index === 0 ? 0 : index + 1) % 2)}
                      >
                        <img
                          src={item.imageURI}
                          style={{
                            ...item.imageStyle,
                            ...(item.imageStyle.mobileWidth &&
                            windowWidth <= 767
                              ? { width: item.imageStyle.mobileWidth }
                              : {}),
                          }}
                        />
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
                          fontFamily: "Cambon-Light",
                          color: "#4A4A4A",
                          lineHeight: 1.2,
                        }}
                      >
                        Open Source
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
                              fontFamily: "MierA-DemiBold",
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
                            fontFamily: "MierA-Book",
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
                          style={{
                            marginLeft: -4,
                            fontFamily: "MierA-Book",
                            paddingTop: 7,
                            paddingLeft: 12,
                            paddingRight: 12,
                          }}
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
                              fontFamily: "MierA-DemiBold",
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
                            fontFamily: "MierA-Book",
                          }}
                        >
                          A Github Action to check if pull request titles
                          conform to Contribution Guidelines
                        </div>
                        <Button
                          outline
                          pill
                          href="https://github.com/thehanimo/pr-title-checker"
                          target="_blank"
                          theme="dark"
                          size="sm"
                          style={{
                            marginLeft: -4,
                            fontFamily: "MierA-Book",
                            paddingTop: 7,
                            paddingLeft: 12,
                            paddingRight: 12,
                          }}
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
                      <Fade top cascade>
                        <div style={{ fontFamily: "MierA-Regular" }}>
                          <div style={{ marginBottom: 6 }}>
                            <a
                              href="https://github.com/ljharb/repo-report"
                              target="_blank"
                              className="link-dark"
                            >
                              ljharb/repo-report
                            </a>
                          </div>
                          <div style={{ marginBottom: 6 }}>
                            <a
                              href="https://github.com/thehanimo/ocr-bot"
                              target="_blank"
                              className="link-dark"
                            >
                              thehanimo/ocr-bot
                            </a>
                          </div>
                          <div style={{ marginBottom: 6 }}>
                            <a
                              href="https://github.com/cryptoadvance/specter-desktop"
                              target="_blank"
                              className="link-dark"
                            >
                              cryptoadvance/specter-desktop
                            </a>
                          </div>
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
                          fontFamily: "Cambon-Light",
                          color: "#4A4A4A",
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
                              fontFamily: "MierA-Regular",
                            }}
                          >
                            H. Mohammed, V. H. Reddy and S. Kandaswamy,
                            <span style={{ fontFamily: "MierA-DemiBold" }}>
                              {" "}
                              "A Decentralized Strategy for Cooperative Driving
                              among Autonomous Cars at Lane Closures,"{" "}
                            </span>
                            2020 IEEE 32nd International Conference on Tools
                            with Artificial Intelligence (ICTAI), 2020, pp.
                            905-910, doi: 10.1109/ICTAI50040.2020.00141.
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
                          fontFamily: "Cambon-Light",
                          color: "#4A4A4A",
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
                          B.Tech (Hons), Computer Science and Engineering
                          <br />
                          Batch of 2021
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
                fontFamily: "MierA-Regular",
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
                    style={{ textAlign: windowWidth > 767 && "right" }}
                  >
                    Copyright © 2022 Hani Mohammed
                  </Col>
                </Row>
              </Container>
            </div>
          </React.Fragment>
        )}
      </WindowWidth>
    );
  }
}
