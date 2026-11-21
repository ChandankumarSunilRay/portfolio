export default function About() {
  return (
    <section id="about" className="px-5 py-12 sm:px-8 ">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-6 sm:flex-row">
        <img src="/chandankumar-ray-profile.png" alt="Chandankumar Ray" width="80" height="80" className="h-20 w-20 shrink-0 rounded-lg object-cover" />
        <div className="max-w-3xl">
          <h2 className="section-title">A little about me</h2>
          <p className="mt-4 leading-7 text-[var(--muted)]">I graduated in Computer Science in 2026. I enjoy working on both the interface and the backend. Building The Virtual Campus helped me understand how payments, authentication and file storage work together in a real application.</p>
          <p className="mt-3 leading-7 text-[var(--muted)]">I'm interested in full-stack development and small client projects.</p>
        </div>
      </div>
    </section>
  );
}
