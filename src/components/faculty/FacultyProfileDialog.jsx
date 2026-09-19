import {
  Mail,
  GraduationCap,
  BookOpen,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function FacultyProfileDialog({
  faculty,
  open,
  onOpenChange,
}) {
  if (!faculty) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-3xl">

        {/* Header */}
        <div className="relative overflow-hidden border-b bg-muted/30">
          {/* Background grid */}
          <div
            className="
              pointer-events-none absolute inset-0
              opacity-40
              bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)]
              bg-size-[24px_24px]
            "
          />

          <div className="relative flex flex-col gap-6 p-6 sm:flex-row sm:p-8">

            {/* Photo */}
            <div className="shrink-0">
              <div className="h-32 w-32 overflow-hidden rounded-2xl border bg-muted shadow-lg sm:h-40 sm:w-40">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Basic Information */}
            <div className="flex flex-1 flex-col justify-center">
              <DialogHeader className="text-left">
                <div className="mb-3">
                  <Badge variant="secondary">
                    {faculty.position}
                  </Badge>
                </div>

                <DialogTitle className="text-2xl sm:text-3xl">
                  {faculty.name}
                </DialogTitle>

                <DialogDescription className="mt-1">
                  {faculty.program ||
                    "Department of Computer Studies"}
                </DialogDescription>
              </DialogHeader>

              {faculty.email && (
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {faculty.email}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-8 p-6 sm:p-8">

          {/* Biography */}
          {faculty.bio && (
            <section>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                About
              </h3>

              <p className="text-sm leading-7 text-muted-foreground">
                {faculty.bio}
              </p>
            </section>
          )}

          {/* Specialization */}
          {faculty.specialization?.length > 0 && (
            <section>
              <div className="mb-3 flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-primary" />

                <h3 className="text-sm font-semibold">
                  Areas of Specialization
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {faculty.specialization.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="px-3 py-1"
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
              <div className="mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />

                <h3 className="text-sm font-semibold">
                  Educational Background
                </h3>
              </div>

              <div className="space-y-2">
                {faculty.education.map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-lg
                      border border-border/50
                      bg-muted/30
                      px-4 py-3
                      text-sm
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
              <div className="mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />

                <h3 className="text-sm font-semibold">
                  Subjects Handled
                </h3>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {faculty.subjects.map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-lg
                      border border-border/50
                      px-4 py-3
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
              <div className="mb-3 flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-primary" />

                <h3 className="text-sm font-semibold">
                  Research Interests
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {faculty.researchInterests.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="px-3 py-1"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </section>
          )}

          {/* Portfolio Button */}
          <div className="border-t pt-6">
            <Link
              to={`/faculty/${faculty.id}`}
              className="
      inline-flex h-10 w-full items-center justify-center
      rounded-md
      bg-primary
      px-4 py-2
      text-sm font-medium
      text-primary-foreground
      transition-colors
      hover:bg-primary/90
      sm:w-auto
    "
            >
              View Full Portfolio
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}