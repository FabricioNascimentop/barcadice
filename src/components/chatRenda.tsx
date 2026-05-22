"use client";
import { Chart } from "@highcharts/react";
import Highcharts from "highcharts";

// Definição das propriedades que o componente vai receber
interface ChartRendaProps {
  titulo: string;
  data: Record<string, [number, number][]>;
}

export default function ChartRenda({ data, titulo }: ChartRendaProps) {
  
  const seriesFormatadas = Object.entries(data).map(([categoria, pontos]) => {
    const pontosOrdenados = [...pontos].sort((a, b) => a[0] - b[0]);

    return {
      type: "line" as const,
      name: categoria,
      data: pontosOrdenados,
    };
  });

  return (
    <Chart
      highcharts={Highcharts}
      options={{
        title: {
          text: titulo
        },
        xAxis: {
          type: "datetime",
          dateTimeLabelFormats: {
            month: "%b %Y",
            year: "%Y"
          },
          title: { text: "Período" }
        },
        yAxis: {
          title: { text: "Valor (R$)" }
        },
        tooltip: {
          shared: true, 
          xDateFormat: "%B de %Y",
        },
        series: seriesFormatadas 
      }}
      containerProps={{
        className: "chart-element" 
      }}
    />
  );
}