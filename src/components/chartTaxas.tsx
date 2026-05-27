import { BaseChartTaxa } from "./baseCharts";

interface ChartTaxaProps {
  titulo: string;
  data: [number, number][];
}



export function ChartAttCadastro(props: ChartTaxaProps) {
  return <BaseChartTaxa {...props} />;
}

export function ChartAcompanhamentoEscolar(
  props: ChartTaxaProps
) {
  return <BaseChartTaxa {...props} />;
}

export function ChartAcompanhamentoSaude(
  props: ChartTaxaProps
) {
  return <BaseChartTaxa {...props} />;
}