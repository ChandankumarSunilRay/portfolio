export default function Journey() {
  return (
    <section className="px-5 py-12 sm:px-8 ">
      <div className="mx-auto grid max-w-[1080px] gap-10 border-t border-[var(--line)] pt-10  md:grid-cols-2">
        <div>
          <h2 className="section-title">Education</h2>
          <h3 className="mt-5 font-semibold">B.Sc. Computer Science</h3>
          <p className="mt-2 leading-7 text-[var(--muted)]">L.D. Sonawane College, University of Mumbai</p>
          <p className="mt-2 text-sm">2026 · CGPA 8.3/10</p>
        </div>
        <div>
          <h2 className="section-title">Certifications & training</h2>
          <ul className="mt-5 list-inside list-disc space-y-3 text-[var(--muted)]">
            <li>AWS Certified Cloud Practitioner</li>
            <li>GitHub Copilot certification</li>
            <li>Cisco Networking Academy training</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
