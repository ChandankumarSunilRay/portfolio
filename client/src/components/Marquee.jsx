const skills = ['JavaScript', 'Java', 'React', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Git'];

export default function Marquee() {
  const repeated = [...skills, ...skills];
  return (
    <div className="overflow-hidden border-y border-slate-200 bg-white py-5 dark:border-white/10 dark:bg-slate-950">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {repeated.map((skill, index) => (
          <div key={`${skill}-${index}`} className="flex items-center">
            <span className="mx-6 text-sm font-extrabold uppercase tracking-[0.2em] text-slate-800 dark:text-slate-200">{skill}</span>
            <span className="text-violet-500">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
