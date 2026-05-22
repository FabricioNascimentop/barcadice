"use server"
import { Suspense } from "react";
import ChartEtniaSexo from "../components/chartEtniaSexo";
import { MunicipioIdToNome, toTimestamp } from "../utils/utils";
import { Sexo, Etnia } from "@prisma/client";
import { getEtniaSexo, getMoradoresRua, getMunicipiosList, getRegistroRenda } from "../utils/data";
import ChartRenda from "../components/chatRenda";
import {ChartMoradoresRua} from "../components/chartMoradoresRua";
// Definindo a estrutura do retorno para os gráficos
type ChartDataGrouped = {
  [key in Sexo]: {
    [key in Etnia]?: [number, number][];
  };
};


export default async function Home() {
  const MunicipioID = '150130';
  const Municipio = await MunicipioIdToNome(MunicipioID)
  
  const municipios_lst = await getMunicipiosList()
  
  const DataEtniaSexo = await getEtniaSexo(MunicipioID)

  return (
    <main>
      
      <h1>Análise Demográfica - Município {Municipio}</h1>
      
      <Suspense fallback={<div>Carregando Gráfico Masculino...</div>}>
        <ChartEtniaSexo 
          titulo="Quantidade de responsáveis familiar por etnia (Masculino)" 
          data={DataEtniaSexo.M} 
        />
      </Suspense>

      <hr />

      <Suspense fallback={<div>Carregando Gráfico Feminino...</div>}>
        <ChartEtniaSexo 
          titulo="Quantidade de responsáveis familiar por etnia (Feminino)" 
          data={DataEtniaSexo.F} 
        />
      </Suspense>


      <hr />

      <Suspense fallback={<div>Carregando Gráfico Renda...</div>}>
        <ChartRenda 
          titulo=" Pessoas cadastradas no Cadastro Único - por faixa de renda familiar per capita " 
          data={await getRegistroRenda(MunicipioID)} 
        />
      </Suspense>

      <hr />

      <Suspense fallback={<div>Carregando Gráfico Renda...</div>}>
        <ChartMoradoresRua 
          titulo="Número de pessoas em situação de rua inscritas no Cadastro Único" 
          data={await getMoradoresRua(MunicipioID)} 
        />

      </Suspense>

    </main>
  );
}