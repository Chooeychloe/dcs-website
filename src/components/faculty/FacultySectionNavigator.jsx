import {
  Award,
  BadgeCheck,
  BookOpen,
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
    title: "Education",
    description: "Academic background",
    icon: GraduationCap,
  },
  {
    id: "experience",
    title: "Experience",
    description: "Professional experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "research",
    title: "Research",
    description: "Research activities",
    icon: FlaskConical,
  },
  {
    id: "publications",
    title: "Publications",
    description: "Published works",
    icon: FileText,
  },
  {
    id: "certifications",
    title: "Certifications",
    description: "Training & credentials",
    icon: BadgeCheck,
  },
  {
    id: "awards",
    title: "Awards",
    description: "Recognition",
    icon: Award,
  },
  {
    id: "affiliations",
    title: "Affiliations",
    description: "Professional organizations",
    icon: Handshake,
  },
  {
    id: "extension",
    title: "Extension",
    description: "Community engagement",
    icon: HeartHandshake,
  },
  {
    id: "development",
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
      {/* Heading */}
      <div className="mb-6">
        <p className="text-sm font-medium text-primary">
          Explore Profile
        </p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight">
          Academic & Professional Information
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Explore the faculty member's academic background,
          professional experience, research, and other
          professional activities.
        </p>
      </div>

      {/* Navigation Cards */}
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
                group
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                duration-200

                ${
                  isActive
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "bg-background hover:border-primary/40 hover:bg-muted/40 hover:shadow-sm"
                }
              `}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-xl
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="font-semibold">
                    {section.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
