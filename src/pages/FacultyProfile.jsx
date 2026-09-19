import {
  ArrowLeft,
  Mail,
  GraduationCap,
  BookOpen,
  FlaskConical,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";

import {
  departmentChair,
  coordinators,
  facultyMembers,
} from "@/data/faculty";

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

         
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Faculty
            </Link>
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
        
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Faculty
            </Link>

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

          {/* Research */}
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