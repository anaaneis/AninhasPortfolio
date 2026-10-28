function Section({ id, title, tab, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="section-frame scroll-mt-8 px-5 pb-10 pt-14 sm:px-10"
    >
      <h2
        id={`${id}-title`}
        className={`absolute -top-4 left-6 rounded-md px-3 py-1 text-sm font-bold text-ink shadow-sticky ${tab}`}
      >
        {title}
      </h2>

      {/* children = whatever I put between <Section> and </Section> */}
      {children}
    </section>
  );
}

export default Section;
