import React from "react";
import ReactDOM from "react-dom";
import BarChart from "./barchart";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";

const rootElement = document.getElementById("root");
ReactDOM.render(<BarChart />,<Canvas width={width} height={height}>
<Scene /></Canvas>,rootElement);
