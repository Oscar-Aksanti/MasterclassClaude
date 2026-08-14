import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Rendu Markdown stylé charte graphique (GFM activé — le contenu source contient
// beaucoup de tableaux). Les commentaires de production <!-- Contenu Phase X --> doivent
// être retirés AVANT d'atteindre ce composant (voir lib/content.js#stripProductionComments).
const components = {
  h1: ({ children, ...props }) => (
    <h1 className="font-titres mt-2 mb-4 text-2xl font-extrabold text-ink sm:text-3xl" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="font-titres mt-10 mb-3 border-b border-ink/10 pb-2 text-xl font-bold text-ink sm:text-2xl"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="font-titres mt-7 mb-2 text-lg font-bold text-violet sm:text-xl" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="mt-5 mb-2 text-base font-bold text-ink" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 text-[15px] leading-7 text-ink/90" {...props}>
      {children}
    </p>
  ),
  a: ({ children, ...props }) => (
    <a className="font-semibold text-violet underline decoration-violet/40 hover:text-corail" {...props}>
      {children}
    </a>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-bold text-ink" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="text-ink/80" {...props}>
      {children}
    </em>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mb-4 list-disc space-y-1.5 pl-5 marker:text-corail" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 list-decimal space-y-1.5 pl-5 marker:font-bold marker:text-violet" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-[15px] leading-7 text-ink/90" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mb-4 rounded-2xl border-l-4 border-corail bg-white/70 px-4 py-3 italic text-ink/80"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props) => <hr className="my-8 border-ink/10" {...props} />,
  code: ({ inline, className, children, ...props }) => {
    if (inline) {
      return (
        <code className="rounded-md bg-ink/8 px-1.5 py-0.5 font-mono text-[13px] text-ink" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className={`font-mono text-[13px] ${className ?? ""}`} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => (
    <pre
      className="scroll-thin mb-4 overflow-x-auto rounded-2xl bg-ink px-4 py-4 text-cream"
      {...props}
    >
      {children}
    </pre>
  ),
  table: ({ children, ...props }) => (
    <div className="scroll-thin mb-6 overflow-x-auto rounded-2xl border border-ink/10">
      <table className="w-full min-w-[480px] text-left text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-ink text-cream" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th className="whitespace-nowrap px-3 py-2 font-titres text-xs font-bold uppercase tracking-wide" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border-t border-ink/10 px-3 py-2 align-top text-ink/90" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }) => (
    <tr className="odd:bg-white/40 even:bg-transparent" {...props}>
      {children}
    </tr>
  ),
  img: ({ ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-4 rounded-2xl border border-ink/10" {...props} alt={props.alt ?? ""} />
  ),
  input: ({ ...props }) => (
    <input className="mr-2 accent-corail" {...props} disabled />
  ),
};

export default function Markdown({ content }) {
  if (!content) return null;
  return (
    <div className="markdown-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
