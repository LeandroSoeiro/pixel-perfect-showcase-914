import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

import Hero from "../sections/Hero";
import Problema from "../sections/Problema";
import Servicos from "../sections/Servicos";
import Metodo from "../sections/Metodo";
import Sobre from "../sections/Sobre";
import Contato from "../sections/Contato";

const TITULO = "Prisma Consultoria em Governança Pública";
const DESCRICAO =
  "A Prisma transforma o que o município já faz em evidência que o Tribunal de Contas aceita e que o edital exige. Governança pública orientada a dados, no Maranhão.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
    ],
  }),
  component: Index,
});

function Index() {
  const { hash } = useLocation();

  // Âncora vinda de outra página (/materiais → /#servicos) precisa de rolagem manual.
  useEffect(() => {
    if (!hash) return;
    const alvo = document.getElementById(hash.replace(/^#/, ""));
    if (alvo) alvo.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <Hero />
      <Problema />
      <Servicos />
      <Metodo />
      <Sobre />
      <Contato />
    </>
  );
}
