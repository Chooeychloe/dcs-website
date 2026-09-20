import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import FacultySectionHeader from "./FacultySectionHeader";

export default function FacultyCertifications({ items }) {
  if (!items?.length) return null;

  return (
    <section>
      <FacultySectionHeader
        icon={BadgeCheck}
        title="Certifications"
        description="Professional certifications, credentials, and specialized training."
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
            <div className="flex items-start gap-4">
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
                <BadgeCheck className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-semibold leading-6">
                    {item.title}
                  </h3>

                  {item.year && (
                    <Badge variant="secondary">
                      {item.year}
                    </Badge>
                  )}
                </div>

                {item.issuer && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.issuer}
                  </p>
                )}

                {item.type && (
                  <div className="mt-3">
                    <Badge variant="outline">
                      {item.type}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
