import { Mail, ArrowUpRight } from "lucide-react";
import Section from "../board/section";
import { EMAIL, socials } from "../../data/contact";

function Contact() {
  return (
    // id="contact" is what the "Contact" link in the navbar points to
    <Section id="contact" title="💌 Get in touch" tab="bg-sticky-violet">
      {/* Two columns on desktop: the headline on the left, the stickers on the right */}
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="text-4xl font-extrabold tracking-tight">
            Let's make something together.
          </p>
          <p className="mt-3 text-muted-foreground">
            Open to new projects, collaborations and a good chat.
          </p>
        </div>

        <div className="grid gap-5">
          {/* THE EMAIL STICKER. mailto: opens the visitor's email app with my address filled in.
              "group" lets the arrow react when you hover anywhere on the sticker */}
          <a
            href={`mailto:${EMAIL}`}
            className="sticky-note group flex items-center gap-4 bg-sticky-yellow p-5 transition-transform hover:-translate-y-0.5 hover:-rotate-1"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-card shadow-sticky">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
            {/* min-w-0 is needed so "truncate" can cut a very long email with "…" */}
            <span className="min-w-0">
              <span className="block font-hand text-2xl leading-none">
                Write me
              </span>
              <span className="block truncate font-semibold">{EMAIL}</span>
            </span>
            <ArrowUpRight
              className="ml-auto h-5 w-5 shrink-0 transition-transform group-hover:rotate-45"
              aria-hidden="true"
            />
          </a>

          {/* THE SOCIAL STICKERS */}
          <div>
            <p className="font-hand text-2xl text-muted-foreground">
              or find me on…
            </p>
            <ul className="mt-2 flex flex-wrap gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${social.label} (opens in new tab)`}
                    title={social.label}
                    className={`sticky-note grid h-16 w-16 place-items-center ${social.color} ${social.tilt} transition-transform hover:-translate-y-1 hover:rotate-0`}
                  >
                    {/* IF there is a slug show the brand logo, ELSE show the Lucide icon */}
                    {social.slug ? (
                      <img
                        src={`https://cdn.simpleicons.org/${social.slug}`}
                        alt=""
                        width={28}
                        height={28}
                        className="h-7 w-7"
                      />
                    ) : (
                      <social.Icon className="h-7 w-7" aria-hidden="true" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
