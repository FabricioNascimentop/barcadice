import { prisma } from "@/prisma/lib/prisma"

// transforma ano e mes em timestamp, data em milissegudos
export function toTimestamp(ano: number, mes: number) {
  return new Date(ano, mes - 1).getTime()
}

export async function MunicipioIdToNome(Id:string) {
  const data = await prisma.municipio.findUnique({where:{Id:Id}})
  return data?.Nome
}