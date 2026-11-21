const projectFacts = ['User accounts and OTP login', 'Razorpay course payments', 'Course progress tracking', 'AWS deployment'];

export default function Projects() {
  return <section id="work" className="border-y border-[#18202b]/10 bg-[#eeeee9] px-5 py-20 dark:border-white/10 dark:bg-[#171b21] sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto max-w-6xl"><div className="reveal"><p className="eyebrow">03 / Work</p><h2 className="section-title mt-5 max-w-3xl">The projects I can talk about.</h2></div><article className="reveal mt-10 overflow-hidden rounded-2xl border border-[#18202b]/10 bg-[#f7f7f3] dark:border-white/10 dark:bg-[#101318]"><div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-[0.75fr_1.25fr] lg:p-12"><div className="grid content-start grid-cols-2 gap-4">{[
  ['home', 'Homepage', 'The Virtual Campus homepage with its learning introduction and course catalogue'],
  ['login', 'Sign in', 'The Virtual Campus sign-in page with email and password fields'],
  ['register', 'Registration', 'The Virtual Campus account registration form'],
  ['about', 'About the platform', 'The Virtual Campus overview explaining how learners use the platform'],
  ['forgot', 'Password recovery', 'The Virtual Campus forgot-password email form'],
].map(([name, caption, alt]) => (
  <figure key={name} className={name === 'home' ? 'col-span-2' : ''}>
    <a href={`/virtual-campus-${name}.png`} target="_blank" rel="noreferrer" aria-label={`View ${caption.toLowerCase()} screenshot at full size`} className="block overflow-hidden rounded-lg border border-[#18202b]/15 focus-visible:outline-2 focus-visible:outline-violet-500 dark:border-white/15">
      <img src={`/virtual-campus-${name}.png`} alt={alt} width="1280" height="800" loading="lazy" className="h-auto w-full" />
    </a>
    <figcaption className="mt-2 text-sm text-[#59616b] dark:text-[#b7bbc2]">{caption} · Click to enlarge</figcaption>
  </figure>
))}</div><div><div className="flex flex-wrap items-center justify-between gap-3"><p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300">Main project</p><a href="https://www.thevirtualcampus.me" target="_blank" rel="noreferrer" className="text-sm font-bold underline decoration-violet-500 underline-offset-4">Live website</a></div><h3 className="mt-4 text-3xl font-bold tracking-tight">The Virtual Campus</h3><p className="mt-4 max-w-xl leading-7 text-[#59616b] dark:text-[#b7bbc2]">An e-learning platform where users can register, buy courses, watch lectures and track progress. I built the frontend, backend APIs, database models, payment flow and deployment.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{projectFacts.map((fact) => <div key={fact} className="text-sm font-semibold">• {fact}</div>)}</div><a href="https://github.com/ChandankumarSunilRay" target="_blank" rel="noreferrer" className="mt-8 inline-block text-sm font-bold underline decoration-violet-500 underline-offset-4">GitHub profile</a></div></div></article><article className="reveal mt-5 grid gap-6 rounded-2xl border border-[#18202b]/10 bg-[#f7f7f3] p-6 dark:border-white/10 dark:bg-[#101318] sm:p-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><p className="eyebrow">Second project</p><h3 className="mt-3 text-2xl font-bold tracking-tight">AWS Cloud Infrastructure Lab</h3></div><p className="leading-7 text-[#59616b] dark:text-[#b7bbc2]">Practised VPC networking, subnets, security groups, EC2, RDS connectivity and CloudWatch monitoring.</p></article></div></section>;
}
