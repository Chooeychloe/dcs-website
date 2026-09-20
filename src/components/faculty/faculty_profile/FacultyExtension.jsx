import {  HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import FacultySectionHeader from "./FacultySectionHeader";

export default function FacultyExtension({ items }) {
  if (!items?.length) return null;

  return (
    <section>
      <FacultySectionHeader
        icon={HeartHandshake}
        title="Extension & Community Engagement"
        description="Extension programs, community projects, and outreach activities."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="
              group
              rounded-2xl
              border
              bg-muted/20
              p-5
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-muted/40
              hover:shadow-md
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-primary-foreground
                "
              >
                <HeartHandshake className="h-5 w-5" />
              </div>

              {item.year && (
                <Badge variant="secondary">
                  {item.year}
                </Badge>
              )}
            </div>

            <div className="mt-5">
              <h3 className="font-semibold leading-6">
                {item.title}
              </h3>

              {item.organization && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.organization}
                </p>
              )}

              {item.role && (
                <Badge
                  variant="outline"
                  className="mt-3"
                >
                  {item.role}
                </Badge>
              )}

              {item.description && (
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
