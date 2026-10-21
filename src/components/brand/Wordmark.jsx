/** "bloom" no degradê da marca + "hub" na cor do texto. */
export default function Wordmark({ className = "" }) {
  return (
    <span className={`font-bold tracking-tight ${className}`}>
      <span className="bg-gradient-to-r from-[#ff3fa4] via-[#c04cf5] to-[#8b5cf6] bg-clip-text text-transparent">
        bloom
      </span>
      <span className="text-zinc-900 dark:text-white">hub</span>
    </span>
  );
}
