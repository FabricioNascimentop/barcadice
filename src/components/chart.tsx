"use client";
import '../styles/charts.css';
import { Chart } from "@highcharts/react"; // Verifique se o nome do package está correto (ex: highcharts-react-official)
import Highcharts from "highcharts";

// Tipagem para os dados que chegam: { "Branco": [[t, v], ...], "Preto": [...] }
interface CharteProps {
  titulo: string;
  data: Record<string, [number, number][]>; 
}

export default function Charte({ data, titulo }: CharteProps) {
  
  // Transformamos o objeto de etnias em um array de séries para o Highcharts
  const seriesFormatadas = Object.entries(data).map(([etnia, pontos]) => ({
    type: "line" as const,
    name: etnia,
    data: pontos,
  }));

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
          title: { text: "Valor" }
        },
        tooltip: {
          shared: true, // Mostra todas as etnias ao passar o mouse em uma data
          xDateFormat: "%B %Y",
        },
        series: seriesFormatadas // Aqui entram todas as etnias dinamicamente
      }}
      containerProps={{
        className: "chart-element",
        style: { width: "100%", height: "400px" }, // Definindo uma altura para visualização
      }}
    />
  );
}