import { Folder, ArrowUpRight } from "lucide-react";
import Section from "../board/Section";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <Section id="projects" title="📁 Projects" tab="bg-sticky-orange">
      <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.slug}>
            {/* O cartão inteiro é um link.*/}
            <a
              href={`/projects/${p.slug}`}
              aria-label={`View ${p.title} case study`}
              className={`group relative block h-full pt-7 text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:rotate-0 ${
                i % 2 ? "rotate-1" : "-rotate-1"
              }`}
            >
              {/* A "orelha" da pasta, com o número e o ano */}
              <span
                className={`absolute left-0 top-0 flex h-8 items-center gap-2 rounded-t-lg px-4 text-xs font-bold text-ink ${p.color}`}
              >
                <Folder className="size-4" aria-hidden="true" />
                <span>
                  0{i + 1} / {p.year}
                </span>
              </span>

              <span
                className={`relative flex h-full flex-col rounded-lg rounded-tl-none p-3 shadow-sticky sm:p-4 ${p.color}`}
              >
                <span className="block aspect-[4/3] overflow-hidden rounded-md bg-card">
                  <img
                    src={p.img}
                    alt={`Project preview of ${p.title}`}
                    width={944}
                    height={704}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </span>

                <span className="flex items-center justify-between gap-4 pt-4">
                  <span className="font-hand text-3xl font-bold text-ink">
                    {p.title}
                  </span>

                  <ArrowUpRight
                    className="size-5 shrink-0 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>

                <span className="mt-1 block text-sm text-ink/80">
                  {p.summary}
                </span>

                <span className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm bg-card/70 px-2 py-1 text-xs font-semibold text-ink"
                    >
                      {s}
                    </span>
                  ))}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;
