import { Handshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import FacultySectionHeader from "./FacultySectionHeader";

export default function FacultyAffiliations({ items }) {
  if (!items?.length) return null;

  return (
    <section>
      <FacultySectionHeader
        icon={Handshake}
        title="Professional Affiliations"
        description="Professional organizations, memberships, and academic associations."
      />

      <div className="space-y-3">
        {items.map((item, index) => (
          <article
            key={`${item.organization}-${index}`}
            className="
              group
              flex
              flex-col
              gap-4
              rounded-2xl
              border
              bg-muted/20
              p-5
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-muted/40
              hover:shadow-md
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex min-w-0 items-start gap-4">
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
                <Handshake className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold leading-6">
                  {item.organization}
                </h3>

                {item.role && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.role}
                  </p>
                )}
              </div>
            </div>

            {item.period && (
              <Badge
                variant="secondary"
                className="w-fit shrink-0 sm:self-start"
              >
                {item.period}
              </Badge>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
