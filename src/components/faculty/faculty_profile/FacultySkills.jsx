import { Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function FacultySkills({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <div className="mb-5 flex items-center gap-2">
        <Wrench className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Skills & Competencies
        </h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
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
  );
}
