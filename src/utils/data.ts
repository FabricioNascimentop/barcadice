import { prisma } from "../../prisma/lib/prisma";
import { toTimestamp } from "./utils";


export async function  getEtniaSexo(MunicipioID: string){
  const data = await prisma.registroEtniaSexo.findMany({
    where: { MunicipioId: MunicipioID }
  });

  const dados: any = {M:{},F:{}}
  data.forEach((dado) => {
    if (dado.Sexo == "M"){
      console.log(dado.Sexo, dado.Etnia)
    }
    const timestamp = toTimestamp(dado.Ano,dado.Mes)
    
    if (!dados[dado.Sexo][dado.Etnia]) {
      dados[dado.Sexo][dado.Etnia] = [];
    }
    dados[dado.Sexo][dado.Etnia].push([timestamp, dado.Valor]);
  })

  return dados
}

export async function getMunicipiosList(): Promise<{value:string, label:string}[]>{
   const data = await prisma.municipio.findMany({
    select: {
      Id: true,
      Nome: true
    }})


  return data.map(({ Id, Nome }) => ({
  value: Id,
  label: Nome
  }))
}

export async function getRegistroRenda(MunicipioID: string) {
  try{

    const data = await prisma.registroRenda.findMany({
      where: { MunicipioId: MunicipioID },
      orderBy: [
        { Ano: 'asc' }, 
        { Mes: 'asc' }
      ]
    });
  
    const dados: Record<string, [number, number][]> = {};
  
    data.forEach((dado) => {
      const timestamp = toTimestamp(dado.Ano, dado.Mes);
      
      if (!dados[dado.Categoria_renda]) {
        dados[dado.Categoria_renda] = [];
      }
      
      dados[dado.Categoria_renda].push([timestamp, dado.Valor]);
    });
    return dados;
  }
  catch(error){
    console.error("Erro ao buscar dados de renda:", error);
    return {};
  }

}


export async function getMoradoresRua(MunicipioID: string) {

  const data = await prisma.registroMoradoresRua.findMany({
    where: {
      MunicipioId: MunicipioID
    },
    orderBy: [
      { Ano: "asc" },
      { Mes: "asc" }
    ]
  });

  const dados: [number, number][] = [];

  data.forEach((dado) => {
    const timestamp = toTimestamp(dado.Ano, dado.Mes);

    dados.push([timestamp, dado.MoradoresRua]);
  });

  return dados;
}