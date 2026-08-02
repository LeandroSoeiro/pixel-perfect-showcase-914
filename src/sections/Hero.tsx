import { Simbolo } from "../components/Logo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-azul pt-32 pb-24 text-white sm:pt-40 sm:pb-28">
      {/* Marca d'água decorativa — aria-hidden porque não carrega informação */}
      <div className="pointer-events-none absolute -right-16 top-10 opacity-[0.06]" aria-hidden>
        <Simbolo className="h-96 w-auto" invertido />
      </div>

      <div className="container-prisma relative">
        <p className="olho text-ambar!">Governança pública orientada a dados</p>

        <h1 className="max-w-4xl font-serif text-3xl leading-[1.15] text-white! sm:text-5xl">
          O município faz o trabalho todos os dias.
          <br className="hidden sm:block" /> O problema é provar que fez.
        </h1>

        <p className="mt-7 max-w-leitura text-lg leading-relaxed text-white/80">
          Vacina, recolhe resíduo, matricula, fiscaliza. Quando chega a auditoria, o edital ou o
          índice de avaliação, não há o que apresentar — e o trabalho real vira nota zero.
        </p>

        <p className="mt-5 max-w-leitura text-lg leading-relaxed text-white/80">
          A Prisma transforma o que o município já faz em{" "}
          <strong className="font-semibold text-white">
            evidência que o Tribunal de Contas aceita e que o edital exige
          </strong>
          .
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contato"
            className="botao bg-ambar! text-azul-escuro! hover:bg-ambar-escuro!"
          >
            Pedir uma leitura do seu município
          </a>
          <a
            href="#servicos"
            className="botao border border-white/30 text-white hover:border-white hover:bg-white/10"
          >
            Ver os serviços
          </a>
        </div>
      </div>
    </section>
  );
}
