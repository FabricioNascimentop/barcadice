// transforma ano e mes em timestamp, data em milissegudos
export function toTimestamp(ano: number, mes: number) {
  return new Date(ano, mes - 1).getTime()
}