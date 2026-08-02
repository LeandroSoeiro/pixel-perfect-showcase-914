import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import Logo from "./Logo";

const LINKS = [
  { href: "/#problema", rotulo: "O problema" },
  { href: "/#servicos", rotulo: "Serviços" },
  { href: "/#metodo", rotulo: "Método" },
  { href: "/materiais", rotulo: "Materiais" },
];

export default function Cabecalho() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  // Fecha o menu ao trocar de página — sem isso o menu fica aberto no mobile.
  useEffect(() => setAberto(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur transition ${
        rolou ? "border-b border-cinza-borda shadow-sm" : ""
      }`}
    >
      <div className="container-prisma flex h-20 items-center justify-between">
        <Link to="/" aria-label="Prisma — página inicial">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="link-nav">
              {l.rotulo}
            </a>
          ))}
          <a href="/#contato" className="botao-primario px-5! py-2.5!">
            Falar com a Prisma
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="p-2 md:hidden"
          aria-expanded={aberto}
          aria-label="Abrir menu"
        >
          <span className="block h-px w-6 bg-azul" />
          <span className="mt-1.5 block h-px w-6 bg-azul" />
          <span className="mt-1.5 block h-px w-6 bg-azul" />
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-cinza-borda bg-white px-5 py-4 md:hidden">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="block py-2.5 text-sm text-azul-escuro">
              {l.rotulo}
            </a>
          ))}
          <a href="/#contato" className="botao-primario mt-3 w-full">
            Falar com a Prisma
          </a>
        </nav>
      )}
    </header>
  );
}
