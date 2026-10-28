import { useState } from "react";
import Section from "../board/section";
import Polaroid from "../board/polaroid";
import { NAME } from "../../data/profile";
import me from '../../assets/images/photos/me.jpeg'

function Hi() {
  // useState remembers how many times the button was clicked
  const [waves, setWaves] = useState(0);

  return (
    <Section id="hi" title="👋 Say hi" tab="bg-sticky-yellow">
      {/* Two columns on desktop (photo | text), one column on phones */}
      <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <Polaroid
          src={me}
          caption="that's me!"
          cursor="that's me"
          rotate={-3}
          className="mx-auto w-60"
        />

        <div>
          <p className="font-hand text-3xl text-cursor">Hi there, I'm</p>
          <h1 className="mt-1 text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
            {NAME}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Designer, aspiring developer &  amateur photographer who loves turning messy ideas
            into clear, friendly and accessible products.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* Each click adds 1: setWaves((w) => w + 1) */}
            <button
              onClick={() => setWaves((w) => w + 1)}
              className="rounded-full bg-sticky-yellow px-5 py-2.5 font-semibold text-ink shadow-sticky transition-transform hover:-translate-y-0.5"
            >
              Wave back{" "}
              <span className="animate-wave" aria-hidden="true">
                👋
              </span>
            </button>

            {/* Shows only once waves is above 0. aria-live lets screen readers announce the change */}
            <span
              aria-live="polite"
              className="font-hand text-2xl text-muted-foreground"
            >
              {waves > 0 &&
                `${waves} wave${waves > 1 ? "s" : ""} received — thank you!`}
            </span>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Tip: click anywhere on the board to drop a reaction, and drag the
            sticky notes around.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Hi;
