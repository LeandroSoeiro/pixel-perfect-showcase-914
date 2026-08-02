import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MATERIAIS, EMPRESA, FORMSPREE_ID } from "../data/conteudo";

const TITULO = "Materiais — Prisma Consultoria em Governança Pública";
const DESCRICAO =
  "Guias, checklists e minutas que a Prisma usa no trabalho, disponíveis para municípios que queiram dar o primeiro passo por conta própria.";

export const Route = createFileRoute("/materiais")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
    ],
  }),
  component: Materiais,
});

function Materiais() {
  const [pedido, setPedido] = useState<string | null>(null);
  const [estado, setEstado] = useState<"parado" | "enviando" | "ok" | "erro">("parado");

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const form = evento.currentTarget;
    if (FORMSPREE_ID === "SEU_ID_AQUI") {
      window.location.href = `mailto:${EMPRESA.email}?subject=Material: ${pedido}`;
      return;
    }
    setEstado("enviando");
    try {
      const r = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!r.ok) throw new Error();
      setEstado("ok");
    } catch {
      setEstado("erro");
    }
  }

  return (
    <>
      <header className="bg-azul pt-32 pb-16 text-white sm:pt-40">
        <div className="container-prisma">
          <p className="olho text-ambar!">Materiais</p>
          <h1 className="max-w-3xl font-serif text-3xl leading-tight text-white! sm:text-4xl">
            O que usamos no trabalho, disponível para quem quiser aplicar sozinho
          </h1>
          <p className="mt-6 max-w-leitura text-lg text-white/80">
            Nada aqui substitui um diagnóstico. Mas boa parte do primeiro passo um município
            consegue dar por conta própria — e preferimos que dê.
          </p>
        </div>
      </header>

      <section className="py-20">
        <div className="container-prisma grid gap-6 md:grid-cols-3">
          {MATERIAIS.map((m) => (
            <article key={m.id} className="flex flex-col border border-cinza-borda p-7">
              <p className="text-[11px] uppercase tracking-wide text-cinza">{m.formato}</p>
              <h2 className="mt-2 font-serif text-lg">{m.titulo}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-azul-escuro/75">{m.resumo}</p>
              <button
                type="button"
                onClick={() => {
                  setPedido(m.titulo);
                  setEstado("parado");
                }}
                className="botao-secundario mt-6 w-full"
              >
                {m.disponivel ? "Receber por e-mail" : "Avisar quando sair"}
              </button>
            </article>
          ))}
        </div>

        {pedido && (
          <div className="container-prisma mt-14">
            <form onSubmit={enviar} className="max-w-xl border-l-2 border-ambar bg-azul-nevoa p-8">
              <h2 className="font-serif text-xl">{pedido}</h2>
              <p className="mt-2 text-sm text-azul-escuro/75">
                Informe o e-mail e enviamos assim que estiver disponível.
              </p>

              <input type="hidden" name="material" value={pedido} />

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="rotulo" htmlFor="m-nome">
                    Nome
                  </label>
                  <input className="campo" id="m-nome" name="nome" required />
                </div>
                <div>
                  <label className="rotulo" htmlFor="m-municipio">
                    Município
                  </label>
                  <input className="campo" id="m-municipio" name="municipio" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="rotulo" htmlFor="m-email">
                    E-mail
                  </label>
                  <input className="campo" id="m-email" name="email" type="email" required />
                </div>
              </div>

              <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-cinza">
                <input type="checkbox" name="consentimento" required className="mt-0.5" />
                <span>
                  Autorizo o uso do meu e-mail para o envio deste material. Posso pedir a exclusão a
                  qualquer momento — veja a{" "}
                  <Link to="/privacidade" className="underline hover:text-azul">
                    política de privacidade
                  </Link>
                  .
                </span>
              </label>

              <button className="botao-primario mt-6" disabled={estado === "enviando"}>
                {estado === "enviando" ? "Enviando…" : "Quero receber"}
              </button>

              {estado === "ok" && (
                <p role="status" className="mt-4 text-sm text-azul">
                  Anotado. Você recebe assim que o material sair.
                </p>
              )}
              {estado === "erro" && (
                <p role="alert" className="mt-4 text-sm text-destructive">
                  Não foi possível enviar. Escreva para {EMPRESA.email}.
                </p>
              )}
            </form>
          </div>
        )}
      </section>
    </>
  );
}
