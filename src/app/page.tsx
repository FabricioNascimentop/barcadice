import { Suspense } from "react";
import { prisma } from "../../prisma/lib/prisma";
import Charte from "../components/chart";
import {toTimestamp} from "../utils/utils";

export default async function Home(){
  const MunicipioID = '150130'
  const homens_brancos = await prisma.registroEtniaSexo.findMany({
      where:{Sexo:"M", Etnia:"Branco",MunicipioId:MunicipioID}
    })

    const data: ChartPoint[] = homens_brancos.map((item) =>{
      return [toTimestamp(item.Ano, item.Mes),item.Valor]
    })
    
  return(
    <Suspense fallback={<div>Loading data...</div>}>
      <Charte data={data} />
    </Suspense>
  )
}