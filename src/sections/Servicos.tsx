import { useState } from "react";
import Secao from "../components/Secao";
import { SERVICOS, FATOS_CONTRATACAO } from "../data/conteudo";

export default function Servicos() {
  const [ativo, setAtivo] = useState(SERVICOS[0]!.id);
  const servico = SERVICOS.find((s) => s.id === ativo) ?? SERVICOS[0]!;

  return (
    <Secao
      id="servicos"
      olho="Serviços"
      titulo="Cinco serviços, uma ordem"
      intro="O município não compra tudo de uma vez, e não deveria. Começa pelo diagnóstico — diagnosticar antes de tratar — e cada fase mostra se a seguinte faz sentido."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr]">
        {/* Navegação da esteira */}
        <nav className="flex flex-col" aria-label="Lista de serviços">
          {SERVICOS.map((s, i) => {
            const selecionado = s.id === ativo;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setAtivo(s.id)}
                aria-current={selecionado}
                className={`group flex items-start gap-4 border-l-2 py-4 pl-5 pr-3 text-left transition ${
                  selecionado
                    ? "border-ambar bg-azul-nevoa"
                    : "border-cinza-borda hover:border-azul/40 hover:bg-cinza-claro"
                }`}
              >
                <span
                  className={`mt-0.5 font-serif text-sm ${selecionado ? "text-ambar" : "text-cinza"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span
                    className={`block text-sm font-semibold ${
                      selecionado ? "text-azul" : "text-azul-escuro/80"
                    }`}
                  >
                    {s.nome}
                  </span>
                  <span className="mt-0.5 block text-xs text-cinza">{s.prazo}</span>
                </span>
                {s.porta && (
                  <span className="ml-auto shrink-0 rounded-sm bg-ambar/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ambar-texto">
                    Porta de entrada
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Detalhe do serviço selecionado */}
        <div className="border border-cinza-borda bg-white p-8 sm:p-10">
          <h3 className="font-serif text-2xl">{servico.nome}</h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-cinza">{servico.prazo}</p>
          <p className="mt-5 max-w-leitura leading-relaxed text-azul-escuro/80">{servico.resumo}</p>

          <h4 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-azul">
            O que o município recebe
          </h4>
          <ul className="mt-4 space-y-3">
            {servico.entrega.map((e) => (
              <li key={e} className="flex gap-3 text-sm text-azul-escuro/85">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ambar" aria-hidden />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-10 max-w-leitura text-sm leading-relaxed text-cinza">
        O primeiro contrato é dimensionado para caber no limite de dispensa de licitação —{" "}
        {FATOS_CONTRATACAO.teto} ({FATOS_CONTRATACAO.fonteTeto}) — e a execução só começa depois da
        nota de empenho.
      </p>
    </Secao>
  );
}
