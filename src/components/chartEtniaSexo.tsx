"use client";

import { PlotOptions } from "@highcharts/react";
import "../styles/charts.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface CharteProps {
  titulo: string;
  data: Record<string, [number, number][]>;
}

export default function ChartEtniaSexo({
  data,
  titulo,
}: CharteProps) {

  const seriesFormatadas = Object.entries(data).map(
    ([etnia, pontos]) => ({
      type: "line" as const,
      name: etnia,
      data: pontos,
    })
  );

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        plotOptions: {
  series: {
    gapSize: 10,
    gapUnit: "month",
  },

  line: {
    lineWidth: 2,
  },
},
        title: {
          text: titulo,
        },
        xAxis: {
          type: "datetime",
          dateTimeLabelFormats: {
            month: "%b %Y",
            year: "%Y",
          },
          title: { text: "Período" },
        },
        yAxis: {
          title: { text: "Valor" },
        },
        tooltip: {
          shared: true,
          xDateFormat: "%B %Y",
        },
        series: seriesFormatadas,
      }}
      containerProps={{
        className: "chart-element",
      }}
    />
  );
}