import React from "react";

export default class WindowWidth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onResize = this.onResize.bind(this);
  }
  render() {
    return this.props.children({ windowWidth: this.state.width });
  }
  getWindowWidth() {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  }
  onResize() {
    window.requestAnimationFrame(() => {
      this.setState({
        width: this.getWindowWidth(),
      });
    });
  }
  componentWillMount() {
    this.setState({
      width: this.getWindowWidth(),
    });
  }
  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }
}
