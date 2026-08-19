import { Link } from "@tanstack/react-router";
import Logo from "./Logo";
import { EMPRESA } from "../data/conteudo";

export default function Rodape() {
  return (
    <footer className="bg-azul-escuro text-white/70">
      <div className="container-prisma grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Logo invertido />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {EMPRESA.assinatura}. Consultoria para municípios do Maranhão, com sede em{" "}
            {EMPRESA.cidade}.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Navegar
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="/#problema" className="hover:text-white">
                O problema
              </a>
            </li>
            <li>
              <a href="/#servicos" className="hover:text-white">
                Serviços
              </a>
            </li>
            <li>
              <a href="/#metodo" className="hover:text-white">
                Método
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Contato
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${EMPRESA.email}`} className="hover:text-white">
                {EMPRESA.email}
              </a>
            </li>
            {EMPRESA.telefone && <li>{EMPRESA.telefone}</li>}
            <li>
              <Link to="/privacidade" className="hover:text-white">
                Política de privacidade
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prisma flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {EMPRESA.nome}
          </p>
          <p className="text-white/50">
            Dados citados neste site vêm de fontes públicas oficiais, com origem indicada.
          </p>
        </div>
      </div>
    </footer>
  );
}
