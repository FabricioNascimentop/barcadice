"use server"
import { Suspense } from "react";
import ChartEtniaSexo from "../../../components/chartEtniaSexo";
import {NometoIdMunicipio} from "../../../utils/utils";
import { getEtniaSexo, getMoradoresRua, getRegistroRenda, getAttCadastro, getAcompanhamentoEscolar, getAcompanhamentoSaude, getFamiliasTrabalhoInfantil, getPessoasTrabalhoInfantil } from "../../../utils/data";
import ChartRenda from "../../../components/chatRenda";
import {ChartMoradoresRua} from "../../../components/chartMoradoresRua";
import { ChartAttCadastro, ChartAcompanhamentoEscolar, ChartAcompanhamentoSaude} from "../../../components/chartTaxas";
import { ChartFamiliasTrabalhoInfantil, ChartPessoasTrabalhoInfantil } from "@/src/components/chartTrabalhoInfantil";

export default async function Home({params}: {params: Promise<{ local: string }>;}) {

  const { local } = await params;
  const municipio =  decodeURIComponent(local);
  const MunicipioID = await NometoIdMunicipio(municipio)
  console.log("Municipio selecionado:", municipio, MunicipioID);

  
  const DataEtniaSexo = await getEtniaSexo(MunicipioID)
 
  return (
    <main>
          
          <h1>Análise Demográfica - Município {municipio}</h1>
          
          <Suspense fallback={<div>Carregando Gráfico</div>}>
            <ChartEtniaSexo 
              titulo="Quantidade de responsáveis familiar por etnia (Masculino)" 
              data={DataEtniaSexo.M} 
            />
          </Suspense>
    
          <hr />
    
          <Suspense fallback={<div>Carregando Gráfico</div>}>
            <ChartEtniaSexo 
              titulo="Quantidade de responsáveis familiar por etnia (Feminino)" 
              data={DataEtniaSexo.F} 
            />
          </Suspense>
    
    
          <hr />
    
          <Suspense fallback={<div>Carregando Gráfico</div>}>
            <ChartRenda 
              titulo=" Pessoas cadastradas no Cadastro Único - por faixa de renda familiar per capita " 
              data={await getRegistroRenda(MunicipioID)} 
            />
          </Suspense>
    
          <hr />
    
          <Suspense fallback={<div>Carregando Gráfico</div>}>
            <ChartMoradoresRua 
              titulo="Número de pessoas em situação de rua inscritas no Cadastro Único" 
              data={await getMoradoresRua(MunicipioID)} 
            />
          </Suspense>

          <Suspense fallback={<div>Carregando Gráfico</div>}>
            <ChartAttCadastro
              titulo="Taxa de Atualização Cadastral"
              data={await getAttCadastro(MunicipioID)}
            />
          </Suspense>

          <Suspense fallback={<div>Carregando Gráfico</div>}>
            <ChartAcompanhamentoEscolar
              titulo="Taxa de Acompanhamento Escolar"
              data={await getAcompanhamentoEscolar(MunicipioID)}
            />
          </Suspense>

           <Suspense fallback={<div>Carregando Gráfico</div>}>
            <ChartAcompanhamentoSaude
              titulo="Taxa de Acompanhamento de Saúde"
              data={await getAcompanhamentoSaude(MunicipioID)}
            />
          </Suspense>

          <Suspense fallback={<div>Carregando Gráfico</div>}>
            <ChartFamiliasTrabalhoInfantil
              titulo="Famílias com crianças em situação de trabalho infantil"
              data={await getFamiliasTrabalhoInfantil(MunicipioID)}
            />
          </Suspense>

          <Suspense fallback={<div>Carregando Gráfico</div>}>
            <ChartPessoasTrabalhoInfantil
              titulo="Pessoas em situação de trabalho infantil"
              data={await getPessoasTrabalhoInfantil(MunicipioID)}
            />
          </Suspense>

    
        </main>
  );
}