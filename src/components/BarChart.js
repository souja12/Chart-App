import React from "react";
import { Bar, Line, Bubble, Doughnut } from "react-chartjs-2";

export default function BarChart(data) {
  const Labels = data.data.map((emp) => emp.sub);
  const dataVal = data.data.map((val) => val.sem);
  const ChartData = {
    labels: Labels,
    datasets: [
      {
        label: "First dataset",
        backgroundColor: [
          "rgb(63, 236, 20)",
          "rgba(75,192,192,1)",
          "rgb(230, 18, 18)",
          "rgb(236, 221, 20)",
          "rgb(20, 60, 236)",
          "rgb(230, 103, 18)",
          "rgb(221, 32, 190)",
          "rgb(155, 221, 32)",
          "rgb(30, 158, 243)",
          "rgb(240, 94, 174)",
        ],
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        data: dataVal,
      },
    ],
  };
  return (
    <div
      style={{
        width: "50%",
        height: "400px",
        display: "inline-flex",
        backgroundColor: "antiquewhite",
      }}
    >
      <Bar
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Bar Graph",
            fontSize: 25,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontSize: 15,
                  fontColor: "#000",
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontSize: 16,
                  fontColor: "#000",
                },
              },
            ],
          },
        }}
        data={ChartData}
      ></Bar>
    </div>
  );
}
