
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { contactInfo, socialLinks } from "@/data/contact";

export default function Contact() {
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
              Contact the Department
            </Badge>

            <h1
              className="
                text-4xl font-bold tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let's Connect
              <span className="block text-primary">
                With Computer Studies.
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
              Have a question about our programs, faculty, research,
              extension activities, or other departmental concerns?
              Get in touch with the Department of Computer Studies.
              The phone number and address below are for the CvSU Bacoor campus.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            const content = (
              <>
                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-primary">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-lg font-semibold">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </>
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                className="
                  group
                  rounded-2xl
                  border border-border/70
                  bg-card
                  p-6
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-lg
                "
              >
                {content}
              </a>
            ) : (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border border-border/70
                  bg-card
                  p-6
                "
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <a href="https://cvsu.edu.ph/bacoor/" target="_blank" rel="noreferrer" className="group flex flex-col gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-6 transition-colors hover:bg-primary/10 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <span>
            <span className="block text-sm font-semibold text-primary">Official campus information</span>
            <span className="mt-1 block text-sm text-muted-foreground">For campus-wide information and admissions guidance, visit the official CvSU Bacoor website.</span>
          </span>
          <span className="shrink-0 text-sm font-semibold text-primary">Visit CvSU Bacoor</span>
        </a>
      </section>

      {/* Office / Social */}
      <section className="border-y bg-muted/30">
        <div
          className="
            mx-auto grid max-w-7xl
            gap-10
            px-6 py-20
            sm:py-24
            lg:grid-cols-1
          "
        >
          {/* Office Hours */}
          {/* Social */}
          <div className="mx-auto w-full max-w-2xl">
            <p className="text-sm font-semibold text-primary">
              Stay Connected
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              Follow our updates
            </h2>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Follow the department's official social channels for
              announcements, activities, events, and academic updates.
            </p>

            <div className="mt-6 space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      flex items-center gap-4
                      rounded-2xl
                      border border-border/70
                      bg-card
                      p-4
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:border-primary/30
                      hover:shadow-md
                    "
                  >
                    <div
                      className="
                        flex h-10 w-10
                        shrink-0
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

                    <div>
                      <p className="text-sm font-semibold">
                        {social.name}
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {social.label}
                      </p>
                    </div>

                    <ArrowRight
                      className="
                        ml-auto
                        h-4 w-4
                        text-muted-foreground
                        transition-transform duration-200
                        group-hover:translate-x-1
                        group-hover:text-primary
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div
          className="
            rounded-3xl
            border
            border-border/70
            bg-card
            px-6 py-12
            text-center
            shadow-sm
            sm:px-10
          "
        >
          <p className="text-sm font-semibold text-primary">
            Department of Computer Studies
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore what we do
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Learn more about our academic programs, faculty members,
            research activities, and community extension initiatives.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/programs"
              className="
                inline-flex h-11
                items-center justify-center
                rounded-lg
                bg-primary
                px-5
                text-sm font-semibold
                text-primary-foreground
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-primary/90
              "
            >
              Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              to="/faculty"
              className="
                inline-flex h-11
                items-center justify-center
                rounded-lg
                border border-border
                bg-background
                px-5
                text-sm font-semibold
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              Meet the Faculty
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
