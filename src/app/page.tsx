import { redirect } from "next/navigation";
import { getMunicipiosList } from "../utils/data";

export default async function App() {

  const municipios_lst = await getMunicipiosList();

  async function selecionarMunicipio(formData: FormData) {
    "use server";

    const municipio = formData.get("municipio") as string;

    redirect(`/municipio/${encodeURIComponent(municipio)}`);
  }

  return (
    <main>

      <form action={selecionarMunicipio}>

        <select name="municipio">

          {municipios_lst.map((municipio) => (
            <option
              key={municipio.value}
              value={municipio.label}
            >
              {municipio.label}
            </option>
          ))}

        </select>

        <button type="submit">
          Entrar
        </button>

      </form>

    </main>
  );
}