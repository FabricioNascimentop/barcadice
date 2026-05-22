"use client";

import "../styles/charts.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface ChartMoradoresRuaProps {
  titulo: string;
  data: [number, number][];
}

export function ChartMoradoresRua({
  titulo,
  data,
}: ChartMoradoresRuaProps) {

  const seriesFormatadas: Highcharts.SeriesLineOptions = {
    type: "line",
    name: titulo,
    data,
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        title: {
          text: titulo,
        },

        xAxis: {
          type: "datetime",
          dateTimeLabelFormats: {
            month: "%b %Y",
            year: "%Y",
          },
          title: {
            text: "Período",
          },
        },

        yAxis: {
          title: {
            text: "Quantidade",
          },
          min: 0,
        },

        tooltip: {
          shared: true,
          xDateFormat: "%B %Y",
          pointFormat:
            "<b>{point.y}</b> pessoas",
        },

        plotOptions: {
          line: {
            marker: {
              enabled: false,
            },
            lineWidth: 2,
          },
          series: {
            animation: {
              duration: 500,
            },
          },
        },

        legend: {
          enabled: false,
        },

        credits: {
          enabled: false,
        },

        series: [seriesFormatadas],
      }}

      containerProps={{
        className: "chart-element",
      }}
    />
  );
}