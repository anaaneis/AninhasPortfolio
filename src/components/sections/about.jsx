import { Camera, BookOpen, PawPrint } from "lucide-react";
import Section from "../board/section";
import Polaroid from "../board/polaroid";
import Draggable from "../board/draggable";
import { photos, hobbies, pets } from "../../data/about";
import baby_me from "../../assets/images/photos/baby_me.jpeg";

function About() {
  return (
    <Section id="about" title="📝 About me" tab="bg-sticky-pink">
      <div className="grid gap-12">
        {/* ---------- STORY + BABY PHOTO ---------- */}
        <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
          <div className="relative mx-auto">
            <Polaroid
              src={baby_me}
              caption="baby me"
              cursor="baby me 🍼"
              rotate={-4}
              tape="bg-sticky-pink/80"
              className="w-56"
            />
            {/* A handwritten note placed next to the polaroid */}
            <span
              aria-hidden="true"
              className="absolute -right-10 -top-6 rotate-12 font-hand text-2xl text-cursor"
            >
              where it all began ↙
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Draggable
              label="My story"
              rotate={-1.5}
              className="bg-sticky-yellow p-6 sm:col-span-2"
            >
              <h3 className="font-hand text-3xl">My story</h3>
              <p className="mt-2">
                Little did this tiny human with oversized sunglasses know that
                one day, <b><em>curiosity</em></b>  would become a career. I’ve always been
                fascinated by people, how they think, what they feel, and why
                they do the things they do. Turns out, being a little nosy (in
                the name of research, of course) can actually be a professional
                skill!
              </p>
            </Draggable>

            <Draggable
              label="What I care about"
              rotate={1.5}
              className="bg-sticky-violet p-6"
            >
              <p className="mt-2">
                {" "}
                Today, I channel that{" "}
                <b>
                  <em>curiosity</em>
                </b>{" "}
                into Product Design, combining{" "}
                <b>
                  <em>empathy</em>
                </b>
                ,{" "}
                <b>
                  <em>creativity</em>
                </b>
                , and{" "}
                <b>
                  <em>problem-solving</em>
                </b>{" "}
                to understand people’s needs and turn them into meaningful
                digital experiences.
              </p>
            </Draggable>

            <Draggable
              label="Right now"
              rotate={-1}
              className="bg-sticky-green p-6"
            >
              <p className="mt-2">
                The sunglasses may have changed, but the curiosity is still very
                much there.
              </p>
            </Draggable>
          </div>
        </div>

        {/* ---------- PHOTOGRAPHY ---------- */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold">
            <Camera className="h-5 w-5" aria-hidden="true" /> Through my lens
          </h3>
          <p className="mt-1 text-muted-foreground">
            I'm also an amateur photographer — a few favourites.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {/* One polaroid per category. The maths gives each a different tilt between -4 and +4 degrees */}
            {photos.map((photo, i) => (
              <li key={photo.caption}>
                <Polaroid
                  caption={photo.caption}
                  src={photo.src}
                  alt={photo.alt}
                  cursor="stunning"
                  rotate={((i * 47) % 9) - 4}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- HOBBIES + ANIMALS ---------- */}
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <BookOpen className="h-5 w-5" aria-hidden="true" /> Things I love
            </h3>
            <ul className="mt-6 grid grid-cols-2 gap-5">
              {hobbies.map(({ title, text, Icon, color, tilt }) => (
                <li key={title}>
                  <Draggable
                    label={title}
                    rotate={tilt}
                    className={`${color} h-full p-5`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <p className="mt-2 font-hand text-2xl">{title}</p>
                    <p className="text-sm">{text}</p>
                  </Draggable>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold">
              <PawPrint className="h-5 w-5" aria-hidden="true" /> The loves of
              my life
            </h3>
            <p className="mt-1 text-muted-foreground">
              My animals — more than anything in the world. 💛
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {pets.map((pet) => (
                <li key={pet.name}>
                  <Polaroid
                    caption={pet.name}
                    src={pet.src}
                    alt={pet.alt}
                    cursor="so cute 🐾"
                    rotate={pet.tilt}
                    tape="bg-sticky-yellow/80"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
