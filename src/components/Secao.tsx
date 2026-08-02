import type { ReactNode } from "react";

/** Casca padrão de seção — mantém o ritmo vertical igual no site inteiro. */
export default function Secao({
  id,
  olho,
  titulo,
  intro,
  children,
  fundo = "branco",
}: {
  id?: string;
  olho?: string;
  titulo?: string;
  intro?: string;
  children?: ReactNode;
  fundo?: "branco" | "nevoa" | "cinza" | "escuro";
}) {
  const fundos = {
    branco: "bg-white",
    nevoa: "bg-azul-nevoa",
    cinza: "bg-cinza-claro",
    escuro: "bg-azul text-white",
  } as const;
  const escuro = fundo === "escuro";

  return (
    <section id={id} className={`${fundos[fundo]} py-20 sm:py-24`}>
      <div className="container-prisma">
        {olho && <p className="olho">{olho}</p>}
        {titulo && (
          <h2 className={`titulo-secao max-w-3xl ${escuro ? "text-white!" : ""}`}>{titulo}</h2>
        )}
        {intro && (
          <p
            className={`mt-4 max-w-leitura text-base leading-relaxed ${
              escuro ? "text-white/75" : "text-azul-escuro/75"
            }`}
          >
            {intro}
          </p>
        )}
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
