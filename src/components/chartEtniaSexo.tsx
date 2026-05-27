"use client";

import React, { useState, useMemo } from "react";import Highcharts from "highcharts";
import { Chart } from "@highcharts/react";
import "../styles/charts.css";

interface CharteProps {
  titulo: string;
  data: Record<string, [number, number][]>;
}

export default function ChartEtniaSexo({ data, titulo }: CharteProps) {
  // Estados para filtros e tipo de visualização
  const [inicio, setInicio] = useState<string>("");
  const [fim, setFim] = useState<string>("");
  const [tipoGrafico, setTipoGrafico] = useState<"line" | "column">("line");

  // Função auxiliar para converter "YYYY-MM" em Timestamp UTC correto
  const obterTimestampUTC = (anoMesStr: string, fimDoMes: boolean = false) => {
    if (!anoMesStr) return undefined;
    const [ano, mes] = anoMesStr.split("-").map(Number);
    
    if (fimDoMes) {
      return Date.UTC(ano, mes, 0, 23, 59, 59);
    }
    return Date.UTC(ano, mes - 1, 1, 0, 0, 0);
  };

  const minTimestamp = obterTimestampUTC(inicio, false);
  const maxTimestamp = obterTimestampUTC(fim, true);

  // Formatação das séries: agora mapeia diretamente os dados, apenas mudando o "type"
  const seriesFormatadas = useMemo(() => {
  return Object.entries(data)
    .filter(([etnia]) => tipoGrafico !== "column" || etnia !== "Negro")
    .map(([etnia, pontos]) => ({
      type: tipoGrafico,
      name: etnia,
      data: pontos,
    }));
}, [data, tipoGrafico]);

  const limparFiltros = () => {
    setInicio("");
    setFim("");
  };

  return (
    <div className="chart-container">
      {/* Painel de Controle dos Filtros e Visualização */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px", alignItems: "flex-end", flexWrap: "wrap" }}>
        
        {/* Controle do Tipo de Gráfico */}
        <div>
          <label htmlFor="select-tipo" style={{ display: "block", fontSize: "14px", marginBottom: "5px", fontWeight: "bold" }}>
            Visualização:
          </label>
          <select
            id="select-tipo"
            value={tipoGrafico}
            onChange={(e) => setTipoGrafico(e.target.value as "line" | "column")}
            style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc", backgroundColor: "#fff" }}
          >
            <option value="line">Linhas (Absoluto)</option>
            <option value="column">Colunas (Proporção %)</option>
          </select>
        </div>

        <div>
          <label htmlFor="input-inicio" style={{ display: "block", fontSize: "14px", marginBottom: "5px", fontWeight: "bold" }}>
            Período Inicial:
          </label>
          <input
            id="input-inicio"
            type="month"
            value={inicio}
            onChange={(e) => setInicio(e.target.value)}
            style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label htmlFor="input-fim" style={{ display: "block", fontSize: "14px", marginBottom: "5px", fontWeight: "bold" }}>
            Período Final:
          </label>
          <input
            id="input-fim"
            type="month"
            value={fim}
            min={inicio}
            onChange={(e) => setFim(e.target.value)}
            style={{ padding: "6px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        {(inicio || fim) && (
          <button
            onClick={limparFiltros}
            style={{
              padding: "7px 12px",
              borderRadius: "4px",
              border: "1px solid #d9534f",
              backgroundColor: "#d9534f",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Limpar Filtros
          </button>
        )}
      </div>

      {/* Gráfico do Highcharts */}
      <Chart
        highcharts={Highcharts}
        options={{
          chart: {
            type: tipoGrafico,
          },
          plotOptions: {
            series: {
              gapSize: 10,
              gapUnit: "month",
            },
            line: {
              lineWidth: 2,
            },
            column: {
              stacking: "percent", // Mantém o empilhamento em 100% para o gráfico de colunas
            },
          },
          title: {
            text: titulo,
          },
          xAxis: {
            type: "datetime",
            min: minTimestamp,
            max: maxTimestamp,
            dateTimeLabelFormats: {
              month: "%b %Y",
              year: "%Y",
            },
            title: { text: "Período" },
          },
          yAxis: {
            title: { text: tipoGrafico === "column" ? "Proporção (%)" : "Valor" },
            labels: {
              format: tipoGrafico === "column" ? "{value}%" : "{value}",
            }
          },
          tooltip: {
            shared: true,
            xDateFormat: "%B %Y",
            pointFormat: tipoGrafico === "column" 
              ? '<span style="color:{series.color}">● {series.name}</span>: <b>{point.y} pessoas</b> ({point.percentage:.1f}%)<br/>'
              : '<span style="color:{series.color}">● {series.name}</span>: <b>{point.y} pessoas</b><br/>',
          },
          series: seriesFormatadas,
        }}
        containerProps={{
          className: "chart-element",
        }}
      />
    </div>
  );
}