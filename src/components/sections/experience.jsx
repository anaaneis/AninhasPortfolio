import Section from "../board/section";
import Draggable from "../board/draggable";
import { experience, certifications } from "../../data/experience";

// The skill notes cycle through these 5 colours
const SKILL_COLORS = [
  "bg-sticky-yellow",
  "bg-sticky-green",
  "bg-sticky-pink",
  "bg-sticky-blue",
  "bg-sticky-violet",
];

function Experience() {
  return (
    <Section id="experience" title="🚀 Experience" tab="bg-sticky-green">
      {/* <ol> = ordered list. Its left dashed border is the vertical line of the timeline */}
      <ol className="relative ml-3 border-l-2 border-dashed border-ink/30">
        {/* OUTER .map(): one card per role. i = the role's position (0, 1, 2) */}
        {experience.map((job, i) => (
          <li key={job.when} className="relative mb-10 ml-8 last:mb-0">
            {/* The blue dot sitting on the timeline line */}
            <span
              aria-hidden="true"
              className="absolute -left-[2.6rem] top-1 h-5 w-5 rounded-full border-4 border-card bg-primary shadow"
            />

            <div className="sticky-note relative rounded-xl bg-card p-5 pt-8 shadow-sticky sm:p-6 sm:pt-9">
              {/* The date label on the card's top edge. i % 2 alternates the tilt */}
              <h3
                className={`absolute -top-5 left-5 sticky-note rounded-md px-3 py-1 font-hand text-xl shadow-sticky ${job.color} ${
                  i % 2 ? "rotate-[1.5deg]" : "-rotate-2"
                }`}
              >
                {job.when}
              </h3>

              <p className="text-lg font-bold">
                {job.role} ·{" "}
                <span className="font-medium text-muted-foreground">
                  {job.org}
                </span>
              </p>
              <p className="mt-1 text-muted-foreground">{job.text}</p>

              <h4 className="mt-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                Soft skills I learned here
              </h4>

              <ul className="mt-2 flex flex-wrap gap-2">
                {job.skills.map((skill, si) => (
                  <li key={skill}>
                    <Draggable
                      label={skill}
                      rotate={((si * 7) % 5) - 2}
                      className={`sticky-note rounded-lg px-3 py-1.5 text-xs font-semibold ${SKILL_COLORS[(si + i) % 5]}`}
                    >
                      {skill}
                    </Draggable>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {/* ---------- CERTIFICATIONS ---------- */}
      <div className="section-frame relative mt-16 p-5 pt-12">
        <h3 className="sticky-note absolute -top-5 left-5 -rotate-2 rounded-md bg-sticky-violet px-4 py-1.5 font-hand text-2xl shadow-sticky">
          🎓 Certifications
        </h3>
        <p className="mt-1 text-muted-foreground">
          Courses and certificates I collected along the way.
        </p>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <li key={i}>
              <Draggable
                label={cert.name}
                rotate={((i * 13) % 5) - 2}
                className={`${cert.color} h-full p-4`}
              >
                {/* A dashed box where the certificate's image will go (aspect-video = 16:9) */}

                {/* IF this certificate has an image, show it. ELSE keep the dashed placeholder */}
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    loading="lazy"
                    draggable={false}
                    className="aspect-video w-full rounded-md bg-card object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex aspect-video items-center justify-center rounded-md border-2 border-dashed border-ink/30 bg-card/60"
                  >
                    <span className="px-2 text-center text-[11px] font-semibold text-ink/60">
                      certificate image here
                    </span>
                  </span>
                )}
                <p className="mt-3 text-sm font-bold leading-tight">
                  {cert.name}
                </p>
                <p className="text-xs text-ink/70">
                  {cert.org} · {cert.when}
                </p>
              </Draggable>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Experience;
