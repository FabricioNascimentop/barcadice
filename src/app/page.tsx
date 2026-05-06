import { Suspense } from "react";
import { prisma } from "../../prisma/lib/prisma";
import Charte from "../components/chart";
import { toTimestamp } from "../utils/utils";
import { Sexo, Etnia } from "@prisma/client";

// Definindo a estrutura do retorno para os gráficos
type ChartDataGrouped = {
  [key in Sexo]: {
    [key in Etnia]?: [number, number][];
  };
};

// ... (código da query anterior)

export default async function Home() {
  const MunicipioID = '150130';
  
  const todosDados = await prisma.registroEtniaSexo.findMany({
    where: { MunicipioId: MunicipioID },
    orderBy: [{ Ano: 'asc' }, { Mes: 'asc' }]
  });

  // Agrupando por Sexo -> Etnia
  const dadosAgrupados: any = { M: {}, F: {} };

  todosDados.forEach((reg) => {
    const timestamp = toTimestamp(reg.Ano, reg.Mes);
    if (!dadosAgrupados[reg.Sexo][reg.Etnia]) {
      dadosAgrupados[reg.Sexo][reg.Etnia] = [];
    }
    dadosAgrupados[reg.Sexo][reg.Etnia].push([timestamp, reg.Valor]);
  });

  return (
    <main>
      <h1>Análise Demográfica - Município {MunicipioID}</h1>
      
      <Suspense fallback={<div>Carregando Gráfico Masculino...</div>}>
        <Charte 
          titulo="Quantidade de cadastrados por etnia (Masculino)" 
          data={dadosAgrupados.M} 
        />
      </Suspense>

      <hr />

      <Suspense fallback={<div>Carregando Gráfico Feminino...</div>}>
        <Charte 
          titulo="Quantidade de cadastrados por etnia (Feminino)" 
          data={dadosAgrupados.F} 
        />
      </Suspense>
    </main>
  );
}