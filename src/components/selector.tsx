'use client'



export default function SeletorMunicipio({Municipios_list}: {Municipios_list: {value: string, label: string}[]}) {
    
    return (
    <select name="municipio" id="municipio">
      <option value="">Escolha o Município</option>

      {Municipios_list.map(municipio => (
        <option
          key={municipio.value}
          value={municipio.value}
        >
          {municipio.label}
        </option>
      ))}
    </select>
    
    )
}