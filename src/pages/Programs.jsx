import {
  ArrowRight,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const programs = [
  {
    id: "bscs",
    code: "BSCS",
    title: "Bachelor of Science in Computer Science",
    shortDescription:
      "A program focused on computing concepts, algorithms, software development, and the foundations of modern computer science.",
    icon: Code2,
    highlights: [
      "Programming",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Artificial Intelligence",
    ],
  },
  {
    id: "bsit",
    code: "BSIT",
    title: "Bachelor of Science in Information Technology",
    shortDescription:
      "A program focused on applying computing technologies to develop, manage, and support information systems and digital solutions.",
    icon: Layers3,
    highlights: [
      "Application Development",
      "Database Systems",
      "Networking",
      "Information Security",
    ],
  },
];

const areas = [
  {
    icon: Code2,
    title: "Programming",
    description:
      "Develop computational thinking and practical programming skills.",
  },
  {
    icon: Database,
    title: "Data & Systems",
    description:
      "Work with databases, information systems, and data-driven applications.",
  },
  {
    icon: Network,
    title: "Networks & Infrastructure",
    description:
      "Understand the technologies that connect systems and devices.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Learn principles for protecting information and computing resources.",
  },
];

export default function Programs() {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden border-b">

        {/* Grid */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-40
            bg-[linear-gradient(to_right,hsl(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.18)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />

        {/* Glow */}
        <div
          className="
            pointer-events-none absolute
            left-1/2 top-0
            h-[500px] w-[800px]
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">

          <Badge variant="secondary">
            Academic Programs
          </Badge>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Programs That Build
            <span className="block text-primary">
              Future-Ready Professionals.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Explore the computing programs offered by the
            Department of Computer Studies and discover
            opportunities to develop skills in technology,
            software, systems, and innovation.
          </p>

        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Programs
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Choose Your Path in Computing
          </h2>

          <p className="mt-4 text-muted-foreground">
            Build a strong foundation in computing while
            developing practical skills for today's technology
            industry.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}

        </div>
      </section>

      {/* Areas */}
      <section className="border-y bg-muted/20">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What You'll Learn
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Explore the Computing Landscape
            </h2>

            <p className="mt-4 text-muted-foreground">
              Our programs expose students to a broad range
              of computing disciplines and technologies.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <Card
                  key={area.title}
                  className="
                    border-border/50
                    bg-card/70
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:shadow-lg
                  "
                >
                  <CardContent className="p-6">

                    <div
                      className="
                        flex h-10 w-10 items-center
                        justify-center
                        rounded-lg
                        bg-primary/10
                        text-primary
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 font-semibold">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {area.description}
                    </p>

                  </CardContent>
                </Card>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="h-6 w-6" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            Meet the People Behind the Programs
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Get to know the faculty members who teach,
            mentor, and support our students throughout
            their academic journey.
          </p>

          
            <Link to="/faculty">
              Meet Our Faculty

              <ArrowRight
                className="
                  ml-2 h-4 w-4
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
       

        </div>
      </section>

    </main>
  );
}

function ProgramCard({ program }) {
  const Icon = program.icon;

  return (
    <Card
      className="
        group relative overflow-hidden
        border-border/50
        bg-card
        transition-all duration-500
        hover:-translate-y-2
        hover:border-primary/40
        hover:shadow-2xl
        hover:shadow-primary/10
      "
    >

      {/* Grid overlay */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          bg-[linear-gradient(to_right,hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.04)_1px,transparent_1px)]
          bg-[size:24px_24px]
        "
      />

      <CardContent className="relative p-8 sm:p-10">

        {/* Icon + code */}
        <div className="flex items-start justify-between">

          <div
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              bg-primary/10
              text-primary
              transition-transform duration-500
              group-hover:scale-110
            "
          >
            <Icon className="h-7 w-7" />
          </div>

          <Badge variant="outline">
            {program.code}
          </Badge>

        </div>

        {/* Title */}
        <h3 className="mt-8 text-2xl font-bold tracking-tight">
          {program.title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-muted-foreground">
          {program.shortDescription}
        </p>

        {/* Highlights */}
        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Areas of Focus
          </p>

          <div className="grid gap-2 sm:grid-cols-2">

            {program.highlights.map((highlight) => (
              <div
                key={highlight}
                className="
                  rounded-lg
                  border border-border/50
                  bg-muted/30
                  px-3 py-2.5
                  text-sm
                "
              >
                {highlight}
              </div>
            ))}

          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            h-0.5
            origin-left
            scale-x-0
            bg-primary
            transition-transform duration-500
            group-hover:scale-x-100
          "
        />

      </CardContent>
    </Card>
  );
}