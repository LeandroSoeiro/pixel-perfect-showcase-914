import Secao from "../components/Secao";
import { PROVA } from "../data/conteudo";

export default function Problema() {
  return (
    <Secao
      id="problema"
      fundo="nevoa"
      olho="O problema"
      titulo="A distância entre executar e comprovar"
      intro="Não é um problema de esforço nem de boa vontade. É um problema de registro — e ele aparece com clareza nos números que os próprios órgãos de controle publicam."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {PROVA.map((p) => (
          <article
            key={p.fonte}
            className="flex flex-col border-t-2 border-ambar bg-white p-7 shadow-sm"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl font-semibold text-azul">{p.numero}</span>
              <span className="text-sm text-cinza">{p.de}</span>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-azul-escuro/80">{p.texto}</p>
            <p className="mt-5 border-t border-cinza-borda pt-3 text-[11px] uppercase tracking-wide text-cinza">
              Fonte: {p.fonte}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 max-w-leitura border-l-2 border-azul pl-6">
        <p className="font-serif text-lg leading-relaxed text-azul">
          Um município pode ter o melhor programa ambiental da região e ainda assim tirar zero no
          eixo ambiental do índice. Não porque não fez — porque não registrou no formato que o
          avaliador lê.
        </p>
      </div>
    </Secao>
  );
}
