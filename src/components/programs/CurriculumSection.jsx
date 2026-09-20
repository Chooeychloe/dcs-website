
import { BookOpen } from "lucide-react";

import CourseCard from "./CourseCard";

export default function CurriculumSection({
  category,
  courses,
  programId,
}) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl
            bg-primary/10
            text-primary
          "
        >
          <BookOpen className="h-5 w-5" />
        </div>

        <div>
          <h3 className="text-xl font-bold tracking-tight">
            {category}
          </h3>

          <p className="text-sm text-muted-foreground">
            {courses.length}{" "}
            {courses.length === 1 ? "course" : "courses"}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {courses.map((course) => (
          <CourseCard
            key={`${programId}-${course.code}-${course.title}`}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}