import { Suspense } from "react";
import { prisma } from "../../prisma/lib/prisma";
import Charte from "../components/chart";
import {toTimestamp} from "../utils/utils";

export default async function Home(){
  const MunicipioID = '150130'
  const dados = await prisma.registroEtniaSexo.findMany({
    where:{
      MunicipioId: MunicipioID, Sexo:'M',Etnia: 'Branco'
    }
  })
  const data: ChartPoint[] = dados.map((registro) => {
      return [toTimestamp(registro.Ano,registro.Mes), registro.Valor]
    })

  return(
    <Suspense fallback={<div>Loading data...</div>}>
      <Charte data={data} />
    </Suspense>
  )
}