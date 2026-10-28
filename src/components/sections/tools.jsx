import Section from "../board/section";
import Draggable from "../board/draggable";
import { toolGroups } from "../../data/tools";

function Tools() {
  return (
    <Section id="tech" title="🧰 Tools & technologies" tab="bg-sticky-blue">
      <p className="mb-10 text-muted-foreground">
        An affinity diagram of my tools - feel free to drag them around!
      </p>

      {/* Three groups side by side on desktop, stacked on smaller screens */}
      <div className="grid gap-12 lg:grid-cols-3">
        {/* OUTER .map(): one dashed frame per group. gi = the group's position (0, 1, 2) */}
        {toolGroups.map((group, gi) => (
          // section-frame is the same dashed frame style the sections use
          <div
            key={group.group}
            className="section-frame relative p-4 pt-10 sm:p-5"
          >
            {/* The group's label, sitting on the frame's top edge.
                gi % 2 alternates the tilt: even groups tilt left, odd groups tilt right */}
            <h3
              className={`sticky-note absolute -top-5 left-4 rounded-md px-4 py-1.5 font-hand text-2xl ${group.tab} ${
                gi % 2 ? "rotate-[1.5deg]" : "-rotate-2"
              }`}
            >
              {group.group}
            </h3>

            <ul className="grid gap-4 sm:grid-cols-2">
              {/* INNER .map(): one draggable note per tool in this group */}
              {group.items.map((tool, i) => (
                <li key={tool.name}>
                  <Draggable
                    label={tool.name}
                    rotate={((i * 29) % 5) - 2}
                    className={`${tool.color} flex h-full flex-col items-center gap-2 p-4 text-center`}
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-card shadow-sticky">
                      {/* IF the tool has a slug show its brand logo,
                          ELSE show its Lucide icon. <tool.Icon /> works because Icon is a component */}
                      {tool.slug ? (
                        <img
                          src={`https://cdn.simpleicons.org/${tool.slug}`}
                          alt=""
                          width={32}
                          height={32}
                          loading="lazy"
                          draggable={false}
                          className="h-8 w-8"
                        />
                      ) : (
                        tool.Icon && (
                          <tool.Icon className="h-7 w-7" aria-hidden="true" />
                        )
                      )}
                    </span>
                    <span className="text-sm font-bold leading-tight">
                      {tool.name}
                    </span>
                    <span className="-mt-1.5 text-[11px] text-ink/70">
                      {tool.note}
                    </span>
                  </Draggable>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Tools;
