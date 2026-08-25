export type ManagedPageProps = {
  title: string;
  description?: string | null;
  coverImage?: string | null;
  content?: string | null;
};

export function ManagedPageContent({ content, className = "" }: { content?: string | null; className?: string }) {
  const blocks = (content || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!blocks.length) return null;
  return (
    <div className={`managed-page-content ${className}`.trim()}>
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) return <h2 key={index}>{block.slice(3)}</h2>;
        if (block.startsWith("### ")) return <h3 key={index}>{block.slice(4)}</h3>;
        if (block.startsWith("- ")) return <p className="managed-page-bullet" key={index}>{block.slice(2)}</p>;
        return <p key={index}>{block}</p>;
      })}
    </div>
  );
}
