import React from "react";

console.log("layout is rendered xxxx");
export default class Layout extends React.Component {
  async componentDidMount() {
    await console.log("layout is rendered 1");
  }
  render() {
    console.log("layout is rendered");
    return <div>Layout</div>;
  }
}
