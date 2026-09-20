import { Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function FacultyAffiliations({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <div className="mb-5 flex items-center gap-2">
        <Users className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Professional Affiliations
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.organization}-${index}`}
            className="
              rounded-xl
              border
              bg-muted/20
              p-4
            "
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">
                  {item.organization}
                </h3>

                {item.role && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.role}
                  </p>
                )}
              </div>

              {item.period && (
                <Badge variant="outline">
                  {item.period}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
