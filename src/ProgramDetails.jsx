import { ArrowLeft, BookOpen, Clock3, GraduationCap } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getProgramById } from "@/data/programs";

export default function ProgramDetails() {
  const { programId } = useParams();
  const program = getProgramById(programId);

  if (!program) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">
          Program Not Found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The requested academic program could not be found.
        </p>

        <Link
          to="/programs"
          className="
            mt-8
            inline-flex h-11
            items-center justify-center
            rounded-lg
            bg-primary
            px-5
            text-sm font-semibold
            text-primary-foreground
          "
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Programs
        </Link>
      </main>
    );
  }

  const groupedCourses = program.curriculum.reduce((groups, course) => {
    const key = course.section
      ? `${course.category} — ${course.section}`
      : course.category;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(course);
    return groups;
  }, {});

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b">
        <div
          className="
            pointer-events-none absolute inset-0 -z-10
            bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
            bg-size-[48px_48px]
            opacity-35
          "
        />

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

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <Link
            to="/programs"
            className="
              group
              inline-flex items-center
              text-sm font-medium
              text-muted-foreground
              transition-colors
              hover:text-primary
            "
          >
            <ArrowLeft
              className="
                mr-2 h-4 w-4
                transition-transform duration-200
                group-hover:-translate-x-1
              "
            />
            Back to Programs
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5 text-primary"
              >
                {program.code}
              </Badge>

              <span className="text-sm text-muted-foreground">
                Four-Year Program
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {program.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="mb-10">
          <p className="text-sm font-semibold text-primary">
            Curriculum
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Course Contents
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Explore the courses included in the {program.code} curriculum,
            together with their descriptions, units, contact hours, and
            prerequisites.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedCourses).map(
            ([category, courses]) => (
              <section key={category}>
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-xl
                      bg-primary/10
                      text-primary
                    "
                  >
                    <BookOpen className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {category}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {courses.length} course
                      {courses.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {courses.map((course) => (
                    <Card
                      key={`${program.id}-${course.code}-${course.title}`}
                      className="
                        border-border/70
                        transition-colors
                        hover:border-primary/25
                      "
                    >
                      <CardHeader>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <Badge variant="secondary">
                              {course.code}
                            </Badge>

                            <CardTitle className="mt-3 text-lg">
                              {course.title}
                            </CardTitle>
                          </div>

                          <Badge variant="outline">
                            {course.units}{" "}
                            {course.units === 1 ? "unit" : "units"}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {course.description}
                        </p>

                        <div
                          className="
                            mt-6 grid gap-4
                            border-t border-border
                            pt-5
                            sm:grid-cols-3
                          "
                        >
                          <CourseMeta
                            icon={Clock3}
                            label="Lecture"
                            value={course.lecture}
                          />

                          <CourseMeta
                            icon={BookOpen}
                            label="Laboratory"
                            value={course.laboratory}
                          />

                          <CourseMeta
                            icon={GraduationCap}
                            label="Prerequisite"
                            value={course.prerequisite}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )
          )}
        </div>
      </section>
    </main>
  );
}

function CourseMeta({ icon: Icon, label, value }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" />
        {label}
      </div>

      <p className="mt-1 text-sm font-medium">
        {value}
      </p>
    </div>
  );
}
