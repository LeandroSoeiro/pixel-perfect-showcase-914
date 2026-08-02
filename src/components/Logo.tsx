/**
 * Logo da Prisma — desenhada em SVG, não importada como imagem.
 * Geometria idêntica à do Manual de Identidade Visual (triângulo + 3 barras,
 * a barra do meio em âmbar). Não alterar proporções sem atualizar o manual.
 */

export function Simbolo({
  className = "h-9 w-auto",
  invertido = false,
}: {
  className?: string;
  invertido?: boolean;
}) {
  const corTri = invertido ? "#FFFFFF" : "#1F3864";
  const corBarra = invertido ? "rgba(255,255,255,0.75)" : "#6B7C8C";
  return (
    <svg viewBox="0 0 130 96" className={className} role="img" aria-label="Símbolo da Prisma">
      <polygon points="6,84 40,12 74,84" fill={corTri} />
      <rect x="82" y="24" width="42" height="11" fill={corBarra} />
      <rect x="82" y="42" width="32" height="11" fill="#E4A11B" />
      <rect x="82" y="60" width="22" height="11" fill={corBarra} />
    </svg>
  );
}

export default function Logo({
  invertido = false,
  compacto = false,
}: {
  invertido?: boolean;
  compacto?: boolean;
}) {
  const corTexto = invertido ? "text-white" : "text-azul";
  const corDesc = invertido ? "text-white/70" : "text-cinza";
  return (
    <span className="flex items-center gap-3">
      <Simbolo className={compacto ? "h-7 w-auto" : "h-9 w-auto"} invertido={invertido} />
      <span className="leading-none">
        <span className={`block font-serif text-lg font-semibold tracking-tight ${corTexto}`}>
          Prisma
        </span>
        {!compacto && (
          <span className={`mt-1 block text-[10px] uppercase tracking-[0.2em] ${corDesc}`}>
            Governança Pública
          </span>
        )}
      </span>
    </span>
  );
}
