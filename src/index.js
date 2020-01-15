import React, { PureComponent, lazy, Fragment } from "react";
import ReactDOM from "react-dom";
//import Layout from "./Layout.js";

// import "./my-class.js";

const Layout = lazy(() => import("./Layout.js"));

class App extends PureComponent {
  state = {
    isLayout: false,
    isGood: true,
    loading: true,
    date: new Date()
  };

  constructor(props) {
    super(props);
    console.log("constructor App");
    console.log("Majid: ", document.getElementById("majid"));
  }

  // static getDerivedStateFromProps(props, states) {
  //   console.log("states, ", states);
  //   console.log("props, ", props);
  //   return {
  //     isLayout: states.isLayout
  //   };
  // }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      isLayout: false
    });
    console.log("Majid: ", document.getElementById("majid"));
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidCatch(errors) {
    console.log("componentDidCatch");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps");
  //   return true;
  // }
  // getSnapshotBeforeUpdate() {
  //   console.log("getSnapshotBeforeUpdate");
  //   return null;
  // }

  // UNSAFE_componentWillMount() {
  //   console.log("UNSAFE_componentWillMount");
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log("UNSAFE_componentWillUpdate");
  // }

  // UNSAFE_componentWillReceiveProps() {
  //   console.log("UNSAFE_componentWillReceiveProps");
  // }

  render() {
    console.log("render");
    return (
      <div>
        <div id="majid">
          <button
            onClick={() => {
              this.setState({ isLayout: true });
            }}
          >
            add the layout
          </button>
        </div>
        {this.state.isLayout && (
          <React.Suspense
            fallback={
              <div>
                <i>laoding...</i>
              </div>
            }
          >
            <Fragment>
              <button
                onClick={() => {
                  this.setState({ isLayout: false });
                }}
              >
                rewmove the layout
              </button>
              <Layout />
            </Fragment>
          </React.Suspense>
        )}
      </div>
    );
  }
}

const mainEl = document.getElementById("layout");

ReactDOM.render(<App />, mainEl);
