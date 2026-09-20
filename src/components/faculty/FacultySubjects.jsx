import { BookOpen } from "lucide-react";

export default function FacultySubjects({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <div className="mb-5 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Subjects Handled
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="
              rounded-xl
              border
              p-4
              text-sm
              text-muted-foreground
            "
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
