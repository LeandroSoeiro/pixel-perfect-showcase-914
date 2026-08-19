import Secao from "../components/Secao";
import { PRINCIPIOS } from "../data/conteudo";

export default function Sobre() {
  return (
    <Secao
      id="sobre"
      fundo="cinza"
      olho="Quem somos"
      titulo="Uma consultoria com regras públicas"
      intro="A estrutura da Prisma é enxuta por desenho: especialistas acionadas por ordem de serviço, conforme o escopo de cada projeto — administração e saúde no pilar social, engenharia ambiental e contabilidade no pilar fiscal. A composição societária consta em contrato e é verificável por qualquer cliente antes da contratação."
    >
      <div className="grid gap-px overflow-hidden border border-cinza-borda bg-cinza-borda sm:grid-cols-2">
        {PRINCIPIOS.map((p) => (
          <article key={p.titulo} className="bg-white p-8">
            <h3 className="font-serif text-lg">{p.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-azul-escuro/75">{p.texto}</p>
          </article>
        ))}
      </div>

    </Secao>
  );
}
