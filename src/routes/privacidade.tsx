import { createFileRoute } from "@tanstack/react-router";
import { EMPRESA } from "../data/conteudo";

const TITULO = "Política de privacidade — Prisma Consultoria";
const DESCRICAO =
  "Como a Prisma Consultoria trata os dados pessoais coletados nos formulários do site, com base na Lei nº 13.709/2018 (LGPD).";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
    ],
  }),
  component: Privacidade,
});

/**
 * Política de privacidade da própria Prisma — obrigatória a partir do momento
 * em que o site coleta e-mail. É minuta: deve ser revisada por advogado antes
 * de publicar, e atualizada se o site passar a usar analytics ou cookies.
 */
function Privacidade() {
  return (
    <article className="pt-32 pb-20 sm:pt-40">
      <div className="container-prisma max-w-leitura">
        <h1 className="font-serif text-3xl">Política de privacidade</h1>
        <p className="mt-3 text-sm text-cinza">
          Última atualização: [DATA]. Documento sujeito a revisão jurídica antes da publicação.
        </p>

        <h2 className="mt-10 font-serif text-xl">Quem trata os dados</h2>
        <p className="mt-3">
          {EMPRESA.nome}, inscrita no CNPJ [CNPJ], com sede em {EMPRESA.cidade}, é a controladora
          dos dados pessoais coletados neste site. Contato: {EMPRESA.email}.
        </p>

        <h2 className="mt-8 font-serif text-xl">Que dados coletamos</h2>
        <p className="mt-3">
          Apenas o que você digita nos formulários: nome, e-mail, município, cargo e a mensagem
          enviada. Não coletamos dado sensível, não usamos cookies de rastreamento de terceiros e
          não fazemos perfilamento.
        </p>

        <h2 className="mt-8 font-serif text-xl">Para que usamos</h2>
        <p className="mt-3">
          Exclusivamente para responder ao seu contato ou enviar o material solicitado. A base legal
          é o consentimento que você fornece ao marcar a caixa no formulário (art. 7º, I, da Lei nº
          13.709/2018).
        </p>

        <h2 className="mt-8 font-serif text-xl">Com quem compartilhamos</h2>
        <p className="mt-3">
          Com ninguém, exceto o serviço que processa o envio do formulário e o provedor de e-mail,
          na medida necessária para a entrega da mensagem. Não vendemos nem cedemos dados.
        </p>

        <h2 className="mt-8 font-serif text-xl">Por quanto tempo guardamos</h2>
        <p className="mt-3">
          Enquanto durar a relação ou até você pedir a exclusão, o que ocorrer primeiro. Contatos
          sem desdobramento são eliminados em 24 meses.
        </p>

        <h2 className="mt-8 font-serif text-xl">Seus direitos</h2>
        <p className="mt-3">
          O art. 18 da LGPD garante a você confirmação do tratamento, acesso, correção, anonimização,
          portabilidade, eliminação e revogação do consentimento. Para exercer qualquer um deles,
          escreva para {EMPRESA.email} — respondemos em até 15 dias.
        </p>

        <h2 className="mt-8 font-serif text-xl">Segurança</h2>
        <p className="mt-3">
          Adotamos controle de acesso, transmissão criptografada e limitação de retenção. Em caso de
          incidente com risco relevante, comunicamos os titulares afetados e a Autoridade Nacional
          de Proteção de Dados, na forma do art. 48 da LGPD.
        </p>
      </div>
    </article>
  );
}
