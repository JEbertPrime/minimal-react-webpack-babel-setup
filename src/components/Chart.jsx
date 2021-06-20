import React, { useRef, useEffect } from "react";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default function Graph({ progress }) {
  var canvasRef = useRef(null);
  var percent = Math.floor(progress * 100);
  var myChart = useRef(null);
  useEffect(() => {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");

    myChart.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [0],
        datasets: [
          {
            label: '',
            data: [0],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio:false,
          legend:{
              display:false
          },
          tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scales: {
          x: {
            ticks: {
              display: false,
            },
            y: {
                ticks: {
                  display: false,
                },
              },
          },
        },
      },
    });
    return () => myChart.current.destroy();
  }, []);
  useEffect(() => {
    myChart.current.data.labels.push(percent);
    myChart.current.data.datasets[0].data.push(percent);
    if (percent === 0) {
      myChart.current.data.labels = [0];
      myChart.current.data.datasets[0].data = [0];
    }
    myChart.current.update();
  }, [percent]);
  return <canvas height='500' ref={canvasRef} />;
}
