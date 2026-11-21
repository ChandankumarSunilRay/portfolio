const screenshots = [
  ['home', 'Homepage'],
  ['login', 'Sign in'],
  ['register', 'Registration'],
  ['about', 'About the platform'],
  ['forgot', 'Password recovery'],
];
const projectFacts = ['Accounts with email OTP verification', 'Razorpay course payments', 'Private lectures and progress tracking', 'AWS hosting and media storage'];

export default function Projects() {
  return (
    <section id="work" className="border-y border-[var(--line)] bg-[var(--surface)] px-5 py-12 sm:px-8">
      <div className="page-container">
        <h2 className="section-title">Selected projects</h2>
        <article className="mt-8 grid items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="grid grid-cols-2 content-start gap-4">
            {screenshots.map(([name, caption]) => (
              <figure key={name} className={name === 'home' ? 'col-span-2' : ''}>
                <a href={`/virtual-campus-${name}.png`} target="_blank" rel="noreferrer" aria-label={`Enlarge ${caption} screenshot`} className="block overflow-hidden rounded border border-[var(--line)]">
                  <img src={`/virtual-campus-${name}.png`} alt={`The Virtual Campus: ${caption}`} width="1280" height="800" loading="lazy" className="h-auto w-full" />
                </a>
                <figcaption className="mt-2 text-xs text-[var(--muted)]">{caption}</figcaption>
              </figure>
            ))}
            <p className="col-span-2 text-xs text-[var(--muted)]">Select a screenshot to view it at full size.</p>
          </div>
          <div>
            <p className="eyebrow">Full-stack application</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight">The Virtual Campus</h3>
            <p className="mt-4 leading-7 text-[var(--muted)]">An e-learning platform where users can register, buy courses, watch lectures and track progress.</p>
            <p className="mt-3 leading-7 text-[var(--muted)]">I built the React frontend, Express APIs, MongoDB models, payment flow and AWS deployment.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="https://www.thevirtualcampus.me" target="_blank" rel="noreferrer" className="button button-primary">Live website</a>
              <a href="https://github.com/ChandankumarSunilRay" target="_blank" rel="noreferrer" className="button">GitHub profile</a>
            </div>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">
              {projectFacts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
            <div className="mt-6 border-t border-[var(--line)] pt-5">
              <h4 className="text-sm font-semibold">Handling interrupted course deletion</h4>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">Deleting a course means cleaning up MongoDB records and S3 files. I hide the course first and keep its deletion state, so an administrator can retry if cleanup is interrupted.</p>
            </div>
            <p className="mt-5 text-xs leading-6 text-[var(--muted)]">React / Node.js / Express / MongoDB / Tailwind CSS / AWS / Razorpay</p>
          </div>
        </article>
        <article className="mt-10 grid gap-3 border-t border-[var(--line)] pt-7 md:grid-cols-[1fr_1.4fr] md:gap-10">
          <div><p className="eyebrow">Infrastructure practice</p><h3 className="mt-2 text-lg font-semibold">AWS Cloud Infrastructure Lab</h3></div>
          <p className="text-sm leading-7 text-[var(--muted)]">Practised VPC networking, public and private subnets, security groups, EC2, RDS connectivity and CloudWatch monitoring.</p>
        </article>
      </div>
    </section>
  );
}
