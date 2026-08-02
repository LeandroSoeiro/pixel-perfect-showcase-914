import Secao from "../components/Secao";
import { PRINCIPIOS } from "../data/conteudo";

export default function Sobre() {
  return (
    <Secao
      id="sobre"
      fundo="cinza"
      olho="Quem somos"
      titulo="Uma consultoria pequena, com regras públicas"
      intro="A Prisma é uma empresa enxuta, com especialistas acionadas por projeto — administração e saúde no pilar social, contabilidade no pilar fiscal. Preferimos dizer isso a inflar a estrutura: é verificável, e cliente confere."
    >
      <div className="grid gap-px overflow-hidden border border-cinza-borda bg-cinza-borda sm:grid-cols-2">
        {PRINCIPIOS.map((p) => (
          <article key={p.titulo} className="bg-white p-8">
            <h3 className="font-serif text-lg">{p.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-azul-escuro/75">{p.texto}</p>
          </article>
        ))}
      </div>

      <p className="mt-8 max-w-leitura text-sm leading-relaxed text-cinza">
        Não citamos município cliente sem autorização escrita, e não publicamos falha específica de
        município identificável. Achado sensível é comunicado por escrito ao órgão — nunca vira
        conteúdo.
      </p>
    </Secao>
  );
}
