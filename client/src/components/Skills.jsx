const groups = [
  ['Frontend', 'JavaScript, React, Redux Toolkit, Context API, HTML, CSS, Tailwind CSS'],
  ['Backend & data', 'Node.js, Express, REST APIs, JWT, MongoDB, Mongoose, MySQL'],
  ['Tools & deployment', 'Git, GitHub Actions, Postman, Linux, AWS EC2, S3, Nginx'],
];

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-12 sm:px-8 ">
      <div className="page-container">
        <h2 className="section-title">Skills</h2>
        <dl className="mt-6 divide-y divide-[#18202b]/10 dark:divide-white/10">
          {groups.map(([title, description]) => (
            <div key={title} className="grid gap-2 py-4 sm:grid-cols-[190px_1fr]">
              <dt className="font-semibold">{title}</dt>
              <dd className="leading-7 text-[var(--muted)]">{description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
