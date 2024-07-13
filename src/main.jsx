import Plotly from "plotly.js-dist-min";

const root = document.getElementById("root");
Plotly.newPlot(
  root,
  [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 6, 6, 16],
    },
  ],
  {
    margin: { t: 0 },
  },
);
