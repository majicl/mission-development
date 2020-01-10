import React from "react";
import ReactDOM from "react-dom";
//import Layout from "./Layout.js";

const Layout = React.lazy(() => import("./Layout.js"));

class App extends React.PureComponent {
  state = {
    isLayout: false
  };

  static getDerivedStateFromProps(props, states) {}
  componentDidMount() {}

  componentDidUpdate() {}
  componentWillUnmount() {}
  componentDidCatch(errors) {}

  getSnapshotBeforeUpdate() {}

  UNSAFE_componentWillMount() {}

  UNSAFE_componentWillUpdate() {}

  UNSAFE_componentWillReceiveProps() {}

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState({ isLayout: true });
            }}
          >
            replace to layout
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
            <Layout />
          </React.Suspense>
        )}
      </div>
    );
  }
}

const mainEl = document.getElementById("layout");

ReactDOM.render(<App />, mainEl);
