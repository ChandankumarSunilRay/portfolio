export default function Hero() {
  return (
    <section id="top" className="px-5 py-12 sm:px-8  lg:py-16">
      <div className="page-container">
        <p className="eyebrow">MERN Stack Developer</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-[2.75rem]">Hi, I'm Chandankumar Ray.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">I'm a computer science graduate. I build web applications with React, Node.js and MongoDB, and deploy them on AWS.</p>
        <div className="mt-7 flex flex-wrap items-center gap-4 text-sm font-semibold">
          <a href="#work" className="button button-primary">View projects</a>
          <a href="/resumepage.html" target="_blank" rel="noopener" className="button">View resume</a>
          <a href="https://github.com/ChandankumarSunilRay" target="_blank" rel="noreferrer" className="text-link">GitHub</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chandankumarsunilray@gmail.com" target="_blank" rel="noreferrer" className="text-link">Email me</a>
        </div>
      </div>
    </section>
  );
}
