import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./widget.css";

function Dashboard({ children }) {
  return <div className="dashboard">{children}</div>;
}

function Widget({ children, title, position }) {
  return (
    <div className="widget" style={{ top: position.top, left: position.left }}>
      <div className="widget-title-container">{title}</div>
      <div className="widget-content-container">{children}</div>
    </div>
  );
}

function App() {
  return (
    <Dashboard>
      <Widget title="Widget 1" position={{ top: "50px", left: "150px" }}>
        This is a widget
      </Widget>
      <Widget title="Widget 2" position={{ top: "50px", left: "150px" }}>
        This is another widget
      </Widget>
    </Dashboard>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
