import { prisma } from "@/prisma/lib/prisma"

// transforma ano e mes em timestamp, data em milissegudos
export function toTimestamp(ano: number, mes: number) {
  return new Date(ano, mes - 1).getTime()
}

export async function MunicipioIdToNome(Id:string) {
  const data = await prisma.municipio.findUnique({where:{Id:Id}})
  if(!data){
      throw new Error(`Municipio com nome ${Id} não encontrado.`)
    }
    else{
      return data.Nome
  }
}

export async function NometoIdMunicipio(Nome:string) {
  const data = await prisma.municipio.findFirst({where:{Nome:Nome}})
    if(!data){
      throw new Error(`Municipio com nome ${Nome} não encontrado.`)
    }
    else{
      return data.Id
  }
}