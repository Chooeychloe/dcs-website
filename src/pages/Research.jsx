import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  researchAreas,
  researchProjects,
} from "@/data/research";

export default function Research() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b">
        {/* Background grid */}
        <div
          className="
            pointer-events-none absolute inset-0 -z-10
            bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
            bg-size-[48px_48px]
            opacity-35
          "
        />

        {/* Glow */}
        <div
          className="
            pointer-events-none absolute left-1/2 top-0 -z-10
            h-125 w-200
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-3xl
          "
        />

        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-5 border-primary/20 bg-primary/5 text-primary"
            >
              Research & Innovation
            </Badge>

            <h1
              className="
                text-4xl font-bold tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Research That Turns
              <span className="block text-primary">
                Ideas Into Impact.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Discover research initiatives and academic work that explore
              computing technologies, address real-world problems, and create
              opportunities for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">
            Research Areas
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Exploring the many fields of computing
          </h2>

          <p className="mt-4 text-muted-foreground">
            Research activities can span multiple areas as faculty members
            and students investigate new technologies and practical solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => {
            const Icon = area.icon;

            return (
              <Card
                key={area.title}
                className="
                  group
                  h-full
                  border-border/70
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-lg
                "
              >
                <CardHeader>
                  <div
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      bg-primary/10
                      text-primary
                      transition-colors
                      group-hover:bg-primary
                      group-hover:text-primary-foreground
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <CardTitle className="mt-4">
                    {area.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Research Projects */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary">
                Research Outputs
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Featured research
              </h2>

              <p className="mt-4 text-muted-foreground">
                This section can showcase approved faculty research, student
                theses, capstone studies, publications, and collaborative
                projects.
              </p>
            </div>

            <Link
              to="/faculty"
              className="
                group
                inline-flex
                items-center
                text-sm font-semibold
                text-primary
                transition-colors
                hover:text-primary/80
              "
            >
              Meet our researchers
              <ArrowRight
                className="
                  ml-2 h-4 w-4
                  transition-transform duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {researchProjects.map((project) => (
              <Card
                key={project.id}
                className="flex h-full flex-col border-border/70 bg-card"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="secondary">
                      {project.type}
                    </Badge>

                    <span className="text-xs font-medium text-muted-foreground">
                      {project.status}
                    </span>
                  </div>

                  <CardTitle className="pt-2 leading-6">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        mt-auto
                        inline-flex
                        items-center
                        pt-6
                        text-sm font-medium
                        text-primary
                        hover:underline
                      "
                    >
                      View research
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <span
                      className="
                        mt-auto
                        inline-flex
                        items-center
                        pt-6
                        text-sm font-medium
                        text-muted-foreground
                      "
                    >
                      Research details coming soon
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-primary/20
            bg-primary
            px-6 py-12
            text-primary-foreground
            sm:px-10
            lg:px-12
          "
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary-foreground/70">
                Research & Collaboration
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Turning computing research into meaningful solutions.
              </h2>

              <p className="mt-4 text-sm leading-6 text-primary-foreground/75 sm:text-base">
                Connect with the Department of Computer Studies to explore
                research, academic collaboration, and innovation opportunities.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                inline-flex
                h-11
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-background
                px-5
                text-sm font-semibold
                text-foreground
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-background/90
              "
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
