import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import Secao from "../components/Secao";
import { EMPRESA, FORMSPREE_ID } from "../data/conteudo";

const CARGOS = [
  "Prefeito(a)",
  "Secretário(a) de Administração",
  "Secretário(a) de Fazenda / Finanças",
  "Controlador(a) interno",
  "Secretário(a) de Meio Ambiente",
  "Outro",
];

export default function Contato() {
  const [estado, setEstado] = useState<"parado" | "enviando" | "ok" | "erro">("parado");

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const form = evento.currentTarget;

    // Sem endpoint configurado, cai para o cliente de e-mail em vez de falhar em silêncio.
    if (FORMSPREE_ID === "SEU_ID_AQUI") {
      window.location.href = `mailto:${EMPRESA.email}?subject=Contato pelo site`;
      return;
    }

    setEstado("enviando");
    try {
      const resposta = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!resposta.ok) throw new Error("falha no envio");
      form.reset();
      setEstado("ok");
    } catch {
      setEstado("erro");
    }
  }

  return (
    <Secao
      id="contato"
      olho="Contato"
      titulo="Comece por uma leitura do seu município"
      intro="Antes de qualquer proposta, lemos o que já é público sobre o município e devolvemos uma página com o que encontramos. Sem custo e sem compromisso."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,26rem)]">
        <form onSubmit={enviar} className="max-w-xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="rotulo" htmlFor="nome">
                Nome
              </label>
              <input className="campo" id="nome" name="nome" required autoComplete="name" />
            </div>

            <div>
              <label className="rotulo" htmlFor="municipio">
                Município
              </label>
              <input className="campo" id="municipio" name="municipio" required />
            </div>

            <div>
              <label className="rotulo" htmlFor="cargo">
                Cargo
              </label>
              <select className="campo" id="cargo" name="cargo" required defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                {CARGOS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="rotulo" htmlFor="email">
                E-mail
              </label>
              <input
                className="campo"
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="rotulo" htmlFor="mensagem">
                O que você precisa resolver
              </label>
              <textarea className="campo min-h-[7rem]" id="mensagem" name="mensagem" rows={4} />
            </div>
          </div>

          <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-cinza">
            <input type="checkbox" name="consentimento" required className="mt-0.5" />
            <span>
              Autorizo a Prisma a usar estes dados para responder a este contato. Não enviamos
              comunicação não solicitada. Veja a{" "}
              <Link to="/privacidade" className="underline hover:text-azul">
                política de privacidade
              </Link>
              .
            </span>
          </label>

          <button type="submit" className="botao-primario mt-6" disabled={estado === "enviando"}>
            {estado === "enviando" ? "Enviando…" : "Enviar"}
          </button>

          {estado === "ok" && (
            <p role="status" className="mt-4 border-l-2 border-ambar bg-azul-nevoa p-4 text-sm">
              Recebido. Respondemos em até dois dias úteis.
            </p>
          )}
          {estado === "erro" && (
            <p
              role="alert"
              className="mt-4 border-l-2 border-destructive bg-destructive/10 p-4 text-sm"
            >
              Não foi possível enviar. Escreva direto para{" "}
              <a href={`mailto:${EMPRESA.email}`} className="underline">
                {EMPRESA.email}
              </a>
              .
            </p>
          )}
        </form>

        <aside className="self-start border border-cinza-borda bg-cinza-claro p-8">
          <h3 className="font-serif text-lg">O que acontece depois</h3>
          <ol className="mt-5 space-y-4 text-sm text-azul-escuro/80">
            <li className="flex gap-3">
              <span className="font-serif text-ambar">1</span>
              Respondemos em até dois dias úteis, com a leitura pública do município em uma página.
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-ambar">2</span>
              Se fizer sentido, marcamos uma conversa de quarenta minutos — presencial ou remota.
            </li>
            <li className="flex gap-3">
              <span className="font-serif text-ambar">3</span>
              Havendo interesse, a proposta chega em até 48 horas, com escopo e exclusões escritos.
            </li>
          </ol>
          <p className="mt-6 border-t border-cinza-borda pt-5 text-xs leading-relaxed text-cinza">
            Também atendemos consórcios públicos e associações de municípios.
          </p>
        </aside>
      </div>
    </Secao>
  );
}
