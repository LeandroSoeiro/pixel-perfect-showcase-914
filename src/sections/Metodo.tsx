import Secao from "../components/Secao";
import { METODO } from "../data/conteudo";

export default function Metodo() {
  return (
    <Secao
      id="metodo"
      fundo="escuro"
      olho="Método"
      titulo="Como trabalhamos"
      intro="Quatro etapas, e uma regra que atravessa todas: a evidência fica separada da interpretação, para que o gestor possa discordar da leitura sem precisar duvidar do dado."
    >
      <ol className="grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
        {METODO.map((m) => (
          <li key={m.passo} className="bg-azul p-8">
            <span className="font-serif text-3xl text-ambar">{m.passo}</span>
            <h3 className="mt-3 font-serif text-lg text-white!">{m.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{m.texto}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
