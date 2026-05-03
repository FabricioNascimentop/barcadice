"use client";
import '../styles/charts.css'
import { Chart, Series } from "@highcharts/react";
import Highcharts from "highcharts/highcharts.src";




export default function Charte({data}:{data: ChartPoint[]}) {
  return (
    <Chart
      highcharts={Highcharts}
      options={{
        title: {
          text: "Evolução ao longo do tempo"
        },

        xAxis: {
          type: "datetime",

          dateTimeLabelFormats: {
            month: "%b %Y",   // Jan 2024
            year: "%Y"
          },

          title: {
            text: "Período"
          }
        },

        yAxis: {
          title: {
            text: "Valor"
          }
        },

        tooltip: {
          xDateFormat: "%B %Y", // Janeiro 2024 (tooltip completo)
          pointFormat: "Valor: <b>{point.y}</b>"
        },

        series: [
          {
            type: "line",
            name: "Homens Brancos",
            data: data
          }
        ]
      }}
      containerProps={{
        className: "chart-element",
        style: { width: "100%", height: "100%" },
      }}
    />
  );
}