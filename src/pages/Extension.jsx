import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  extensionAreas,
  extensionPrograms,
} from "@/data/extension";

export default function Extension() {
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
            h-[500px] w-[800px]
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
              Extension & Community Engagement
            </Badge>

            <h1
              className="
                text-4xl font-bold tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Computing Beyond
              <span className="block text-primary">
                the Classroom.
              </span>
            </h1>

            <p
              className="
                mt-6 max-w-2xl
                text-base leading-7
                text-muted-foreground
                sm:text-lg
              "
            >
              Bringing knowledge, technology, and practical computing skills
              to communities through training, collaboration, technical
              services, and other extension activities.
            </p>
          </div>
        </div>
      </section>

      {/* Extension Areas */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">
            Extension Areas
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology applied to community needs
          </h2>

          <p className="mt-4 text-muted-foreground">
            Extension activities can connect academic knowledge with practical
            needs by providing opportunities for learning, collaboration, and
            technology-driven community engagement.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {extensionAreas.map((area) => {
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

      {/* Programs / Activities */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">
              Extension Programs
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured activities
            </h2>

            <p className="mt-4 text-muted-foreground">
              This section can showcase the department's actual extension
              programs, training activities, outreach initiatives, and
              community partnerships.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {extensionPrograms.map((program) => (
              <Card
                key={program.id}
                className="flex h-full flex-col border-border/70 bg-card"
              >
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="secondary">
                      {program.category}
                    </Badge>

                    <span className="text-xs font-medium text-muted-foreground">
                      {program.status}
                    </span>
                  </div>

                  <CardTitle className="pt-2 leading-6">
                    {program.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {program.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <p className="text-xs text-muted-foreground">
                      Intended beneficiaries
                    </p>

                    <p className="mt-1 text-sm font-medium">
                      {program.beneficiaries}
                    </p>
                  </div>
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
            border border-primary/20
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
                Community & Collaboration
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Let technology create opportunities beyond the classroom.
              </h2>

              <p className="mt-4 text-sm leading-6 text-primary-foreground/75 sm:text-base">
                Explore opportunities for collaboration, training, technical
                assistance, and other computing-related extension activities.
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
