import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  FileText,
  FlaskConical,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Wrench,
} from "lucide-react";

const sections = [
  {
    id: "education",
    number: "01",
    title: "Education",
    description: "Academic background",
    icon: GraduationCap,
  },
  {
    id: "experience",
    number: "02",
    title: "Experience",
    description: "Professional experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "research",
    number: "03",
    title: "Research",
    description: "Research activities",
    icon: FlaskConical,
  },
  {
    id: "publications",
    number: "04",
    title: "Publications",
    description: "Published works",
    icon: FileText,
  },
  {
    id: "certifications",
    number: "05",
    title: "Certifications",
    description: "Training & credentials",
    icon: BadgeCheck,
  },
  {
    id: "awards",
    number: "06",
    title: "Awards",
    description: "Recognition",
    icon: Award,
  },
  {
    id: "affiliations",
    number: "07",
    title: "Affiliations",
    description: "Professional organizations",
    icon: Handshake,
  },
  {
    id: "extension",
    number: "08",
    title: "Extension",
    description: "Community engagement",
    icon: HeartHandshake,
  },
  {
    id: "development",
    number: "09",
    title: "Development",
    description: "Professional development",
    icon: Wrench,
  },
];

export default function FacultySectionNavigator({
  activeSection,
  onSelect,
}) {
  return (
    <section>
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            Explore Profile
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Academic & Professional
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Browse through the faculty member's academic background,
            professional experience, research, and other activities.
          </p>
        </div>

        <div className="hidden text-right text-xs text-muted-foreground sm:block">
          <span className="font-medium text-foreground">
            {sections.findIndex(
              (section) => section.id === activeSection
            ) + 1}
          </span>
          <span className="mx-1">/</span>
          {sections.length}
        </div>
      </div>

      {/* Section Cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelect(section.id)}
              className={`
                group relative overflow-hidden
                rounded-2xl border
                p-5
                text-left
                transition-all duration-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary
                focus-visible:ring-offset-2

                ${
                  isActive
                    ? "border-primary bg-primary/[0.06] shadow-md"
                    : "bg-background hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                }
              `}
            >
              {/* Active indicator */}
              <div
                className={`
                  absolute inset-x-0 top-0 h-0.5
                  origin-left
                  transition-transform duration-300
                  ${
                    isActive
                      ? "scale-x-100 bg-primary"
                      : "scale-x-0 bg-primary group-hover:scale-x-100"
                  }
                `}
              />

              <div className="flex items-start justify-between gap-4">
                {/* Number */}
                <span
                  className={`
                    text-xs font-medium tracking-widest
                    transition-colors
                    ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground/60 group-hover:text-primary"
                    }
                  `}
                >
                  {section.number}
                </span>

                {/* Arrow */}
                <ArrowUpRight
                  className={`
                    h-4 w-4
                    transition-all duration-300
                    ${
                      isActive
                        ? "translate-x-0 -translate-y-0 text-primary opacity-100"
                        : "translate-x-1 translate-y-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }
                  `}
                />
              </div>

              {/* Icon */}
              <div
                className={`
                  mt-8 flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  }
                `}
              >
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-base font-semibold">
                  {section.title}
                </h3>

                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  {section.description}
                </p>
              </div>

              {/* Bottom active line */}
              <div
                className={`
                  mt-5 h-px w-full
                  transition-colors duration-300
                  ${
                    isActive
                      ? "bg-primary/30"
                      : "bg-border group-hover:bg-primary/20"
                  }
                `}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
