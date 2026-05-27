"use client";
import Highcharts from "highcharts";
import { Chart } from "@highcharts/react";

interface ChartTaxaProps {
  titulo: string;
  data: [number, number][];
}
export interface ChartTrabalhoInfantilProps {
  titulo: string;
  data: [number, number][];
}

export function BaseChartTaxa({
  titulo,
  data,
}: ChartTaxaProps) {
  const seriesFormatadas: Highcharts.SeriesLineOptions = {
    type: "line",
    name: titulo,
    data,
  };

  return (
    <Chart
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
            text: "Taxa (%)",
          },
          min: 0,
        },

        tooltip: {
          shared: true,
          xDateFormat: "%B %Y",
          pointFormat:
            "<b>{point.y:.2f}%</b>",
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

export function BaseChartTrabalhoInfantil({
  titulo,
  data,
}: ChartTrabalhoInfantilProps) {
  const seriesFormatadas: Highcharts.SeriesLineOptions = {
    type: "line",
    name: titulo,
    data,
  };

  return (
    <Chart
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
            "<b>{point.y}</b>",
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