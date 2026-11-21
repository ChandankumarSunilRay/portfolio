export default function Contact() {
  return (
    <section id="contact" className="px-5 py-12 sm:px-8">
      <div className="page-container grid gap-6 border-t border-[var(--line)] pt-10 sm:grid-cols-2 sm:items-center">
        <div><h2 className="section-title">Get in touch</h2><p className="mt-3 text-sm leading-7 text-[var(--muted)]">Have a role or project in mind? Send me an email.</p></div>
        <div className="sm:justify-self-end">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chandankumarsunilray@gmail.com&su=Portfolio%20enquiry" target="_blank" rel="noreferrer" className="button button-primary">Open Gmail</a>
          <p className="mt-3 break-all text-sm text-[var(--muted)]">chandankumarsunilray@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
