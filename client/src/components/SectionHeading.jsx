export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="reveal mb-12 max-w-3xl">
      <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl dark:text-white">
        {title}
      </h2>
    </div>
  );
}
