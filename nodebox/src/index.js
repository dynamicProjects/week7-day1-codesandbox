import React from "react";
import ReactDOM from "react-dom";
import BarChart from "./barchart";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";
import Tree from "./Tree";
import data from "./data";

const rootElement = document.getElementById("root");
const App = () => {
    return <Tree data={data} width={600} height={500} />;
  };
ReactDOM.render(<BarChart />,<Canvas width={width} height={height}>
<Scene /></Canvas>,<App />,rootElement);
