import React from "react";
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor Layout");
  }
  state = {
    date: new Date()
  };
  componentDidMount() {
    console.log("layout: componentDidMount");

    const intervalId = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);

    this.setState({
      intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    //console.log("layout is rendered");
    return <div id="layout">{this.state.date.toString()}</div>;
  }
}
