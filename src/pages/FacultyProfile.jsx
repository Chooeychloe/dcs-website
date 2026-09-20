import {
  ArrowLeft,
  Mail,
  GraduationCap,
  BookOpen,
  FlaskConical,
  BriefcaseBusiness,
  FileText,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";

import {
  departmentChair,
  coordinators,
  facultyMembers,
} from "@/data/faculty";

import { getProfessionalDevelopment } from "@/data/professionalDevelopment";
import { getFacultyResearch} from "@/data/facultuResearch";
import { getPublications } from "@/data/publications";

const allFaculty = [
  departmentChair,
  ...coordinators,
  ...facultyMembers,
];

export default function FacultyProfile() {
  const { id } = useParams();

  const faculty = allFaculty.find(
    (member) => member.id === id
  );

  const development = faculty
    ? getProfessionalDevelopment(faculty.id)
    : {};

  const researchItems = faculty
    ? getFacultyResearch(faculty.id)
    : [];

  const publicationItems = faculty
    ? getPublications(faculty.id)
    : [];

  if (!faculty) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Faculty Member Not Found
          </h1>

          <p className="mt-3 text-muted-foreground">
            The faculty profile you are looking for does not
            exist.
          </p>

          <div className="mt-6">
            <Link
              to="/"
              className="
                group inline-flex items-center gap-2
                rounded-full border
                bg-background/80
                px-4 py-2
                text-sm font-medium
                text-muted-foreground
                shadow-sm
                backdrop-blur
                transition-all duration-200
                hover:bg-muted
                hover:text-foreground
                hover:shadow-md
              "
            >
              <ArrowLeft
                className="
                  h-4 w-4
                  transition-transform duration-200
                  group-hover:-translate-x-1
                "
              />
              Back to Faculty
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative overflow-hidden border-b">

        {/* Grid */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-40
            bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)]
            bg-size-[40px_40px]
          "
        />

        <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-20">

          {/* Back */}
          <div className="mb-10">
            <Link
              to="/"
              className="
                group inline-flex items-center gap-2
                rounded-full border
                bg-background/80
                px-4 py-2
                text-sm font-medium
                text-muted-foreground
                shadow-sm
                backdrop-blur
                transition-all duration-200
                hover:bg-muted
                hover:text-foreground
                hover:shadow-md
              "
            >
              <ArrowLeft
                className="
                  h-4 w-4
                  transition-transform duration-200
                  group-hover:-translate-x-1
                "
              />
              Back to Faculty
            </Link>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[260px_1fr]">

            {/* Photo */}
            <div className="mx-auto w-full max-w-65">
              <div className="aspect-square overflow-hidden rounded-3xl border bg-muted shadow-xl">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Information */}
            <div>
              <Badge variant="secondary">
                {faculty.position}
              </Badge>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                {faculty.name}
              </h1>

              <p className="mt-3 text-lg text-muted-foreground">
                {faculty.program ||
                  "Department of Computer Studies"}
              </p>

              {faculty.email && (
                <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {faculty.email}
                </div>
              )}

              {faculty.bio && (
                <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
                  {faculty.bio}
                </p>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Specialization */}
          {faculty.specialization?.length > 0 && (
            <section>
              <SectionHeading
                icon={FlaskConical}
                title="Areas of Specialization"
              />

              <div className="flex flex-wrap gap-2">
                {faculty.specialization.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="px-3 py-1.5"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {faculty.education?.length > 0 && (
            <section>
              <SectionHeading
                icon={GraduationCap}
                title="Educational Background"
              />

              <div className="space-y-3">
                {faculty.education.map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-xl
                      border
                      bg-muted/20
                      p-4
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Subjects */}
          {faculty.subjects?.length > 0 && (
            <section>
              <SectionHeading
                icon={BookOpen}
                title="Subjects Handled"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {faculty.subjects.map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-xl
                      border
                      p-4
                      text-sm
                      text-muted-foreground
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Research Interests */}
          {faculty.researchInterests?.length > 0 && (
            <section>
              <SectionHeading
                icon={FlaskConical}
                title="Research Interests"
              />

              <div className="flex flex-wrap gap-2">
                {faculty.researchInterests.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="px-3 py-1.5"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </section>
          )}

          {/* Research */}
          {researchItems.length > 0 && (
            <section className="lg:col-span-2">
              <SectionHeading
                icon={FlaskConical}
                title="Research"
              />

              <div className="grid gap-4 md:grid-cols-2">
                {researchItems.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="
                      rounded-2xl
                      border
                      bg-muted/20
                      p-5
                      transition-all
                      duration-200
                      hover:bg-muted/40
                      hover:shadow-sm
                    "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold leading-6">
                        {item.title}
                      </h3>

                      {item.year && (
                        <Badge variant="outline">
                          {item.year}
                        </Badge>
                      )}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.type && (
                        <Badge variant="secondary">
                          {item.type}
                        </Badge>
                      )}

                      {item.status && (
                        <Badge variant="outline">
                          {item.status}
                        </Badge>
                      )}
                    </div>

                    {item.description && (
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Publications */}
          {publicationItems.length > 0 && (
            <section className="lg:col-span-2">
              <SectionHeading
                icon={FileText}
                title="Publications"
              />

              <div className="space-y-4">
                {publicationItems.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="
                      rounded-2xl
                      border
                      bg-muted/20
                      p-5
                      transition-all
                      duration-200
                      hover:bg-muted/40
                      hover:shadow-sm
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="
                          flex h-10 w-10 shrink-0
                          items-center justify-center
                          rounded-xl
                          bg-primary/10
                        "
                      >
                        <FileText className="h-5 w-5 text-primary" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold leading-6">
                          {item.title}
                        </h3>

                        {item.authors?.length > 0 && (
                          <p className="mt-2 text-sm text-muted-foreground">
                            {item.authors.join(", ")}
                          </p>
                        )}

                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.year && (
                            <Badge variant="secondary">
                              {item.year}
                            </Badge>
                          )}

                          {item.type && (
                            <Badge variant="outline">
                              {item.type}
                            </Badge>
                          )}
                        </div>

                        {item.journal && (
                          <p className="mt-3 text-sm text-muted-foreground">
                            {item.journal}
                          </p>
                        )}

                        {(item.url || item.doi) && (
                          <div className="mt-4 flex flex-wrap gap-3">
                            {item.url && (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  text-sm
                                  font-medium
                                  text-primary
                                  hover:underline
                                "
                              >
                                View Publication →
                              </a>
                            )}

                            {item.doi && (
                              <a
                                href={item.doi}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  text-sm
                                  font-medium
                                  text-primary
                                  hover:underline
                                "
                              >
                                DOI →
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Professional Development */}
          {Object.keys(development).length > 0 && (
            <section className="lg:col-span-2">
              <SectionHeading
                icon={BriefcaseBusiness}
                title="Professional Development"
              />

              <div className="relative ml-3 border-l">
                {Object.entries(development).map(
                  ([year, activities]) => (
                    <div
                      key={year}
                      className="relative pb-10 pl-8 last:pb-0"
                    >
                      {/* Timeline dot */}
                      <div
                        className="
                          absolute -left-[9px] top-1
                          h-4 w-4
                          rounded-full
                          border-4
                          border-background
                          bg-primary
                        "
                      />

                      {/* Year */}
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-xl font-bold">
                          {year}
                        </span>

                        {year === "2026" && (
                          <Badge variant="secondary">
                            Current
                          </Badge>
                        )}
                      </div>

                      {/* Activities */}
                      <div className="space-y-3">
                        {activities.map(
                          (activity, index) => (
                            <div
                              key={index}
                              className="
                                rounded-xl
                                border
                                bg-muted/20
                                p-4
                                text-sm
                                leading-6
                                text-muted-foreground
                                transition-colors
                                hover:bg-muted/40
                              "
                            >
                              {activity}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  icon: Icon,
  title,
}) {
  return (
    <div className="mb-5 flex items-center gap-2">
      <Icon className="h-5 w-5 text-primary" />

      <h2 className="text-lg font-semibold">
        {title}
      </h2>
    </div>
  );
}