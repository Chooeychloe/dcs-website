import {
  BookOpen,
  Building2,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Supporting students in developing the knowledge and skills needed for their chosen computing field.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Encouraging exploration, creativity, and the practical application of computing technologies.",
  },
  {
    icon: Users,
    title: "Student Development",
    description:
      "Creating opportunities for students to grow through academic, technical, and collaborative experiences.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Promoting lifelong learning and continuous development in a rapidly changing technology landscape.",
  },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        {/* Subtle background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in_srgb,var(--border)_45%,transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in_srgb,var(--border)_45%,transparent) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary">
              <Building2 className="h-4 w-4" />
              About the Department
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Empowering students through{" "}
              <span className="text-primary">computing.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              The Department of Computer Studies is committed to providing
              students with meaningful opportunities to learn, create, and
              apply computing knowledge in an evolving technological
              environment.
            </p>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Department
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Building foundations for the digital future.
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground leading-7">
              <p>
                The Department of Computer Studies provides an academic
                environment where students can develop their understanding of
                computing concepts, technologies, and practices.
              </p>

              <p>
                Through classroom instruction, laboratory activities,
                projects, research, and other learning experiences, students
                are encouraged to develop both technical competence and
                problem-solving skills.
              </p>

              <p>
                The department also recognizes the importance of adapting to
                emerging technologies and preparing students to contribute
                responsibly to the communities and organizations they serve.
              </p>
            </div>
          </div>

          <Card className="relative overflow-hidden border-border/60">
            <CardContent className="p-8">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Department of Computer Studies
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Cavite State University – Bacoor City Campus
                </p>

                <div className="mt-8 h-px bg-border" />

                <p className="mt-6 text-sm leading-6 text-muted-foreground">
                  This section can later include the department's official
                  history, establishment information, and other institutional
                  details.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Direction
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Vision & Mission
            </h2>

            <p className="mt-4 text-muted-foreground">
              Official institutional statements can be placed here to ensure
              that the website reflects the department's approved wording.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Vision */}
            <Card className="border-border/60 bg-background">
              <CardContent className="p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">Vision</h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Official DCS/CvSU vision statement goes here.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-border/60 bg-background">
              <CardContent className="p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">Mission</h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Official DCS/CvSU mission statement goes here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What We Value
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Learning beyond the classroom.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Our academic environment encourages students to combine
            foundational knowledge with practical experience and continuous
            learning.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group border-border/60 transition-colors hover:border-primary/30"
              >
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="rounded-2xl border border-primary/15 bg-primary/5 p-8 sm:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Explore DCS
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Discover our programs and faculty.
              </h2>

              <p className="mt-3 text-muted-foreground">
                Learn more about the academic programs offered by the
                department and meet the faculty members who support our
                students' learning journey.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/programs"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View Programs
                </Link>

                <Link
                  to="/faculty"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Meet the Faculty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

