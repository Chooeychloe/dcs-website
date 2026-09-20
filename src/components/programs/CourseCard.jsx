import { BookOpen, ChevronDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CourseMeta from "./CourseMeta";

export default function CourseCard({ course }) {
  return (
    <Card
      className="
        border-border/70
        transition-all duration-200
        hover:border-primary/25
        hover:shadow-sm
      "
    >
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">
                {course.code}
              </Badge>

              <Badge variant="outline">
                {course.units}{" "}
                {course.units === 1 ? "unit" : "units"}
              </Badge>
            </div>

            <CardTitle className="mt-3 text-base leading-6 sm:text-lg">
              {course.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div
          className="
            grid gap-3
            border-b border-border
            pb-4
            sm:grid-cols-3
          "
        >
          <CourseMeta
            icon={BookOpen}
            label="Lecture"
            value={course.lecture}
          />

          <CourseMeta
            icon={BookOpen}
            label="Laboratory"
            value={course.laboratory}
          />

          <CourseMeta
            icon={BookOpen}
            label="Prerequisite"
            value={course.prerequisite}
          />
        </div>

        <details className="group mt-4">
          <summary
            className="
              flex cursor-pointer
              items-center justify-between
              text-sm font-medium
              text-primary
              outline-none
              hover:underline
            "
          >
            <span>
              View course description
            </span>

            <ChevronDown
              className="
                h-4 w-4
                text-muted-foreground
                transition-transform duration-200
                group-open:rotate-180
              "
            />
          </summary>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {course.description}
          </p>
        </details>
      </CardContent>
    </Card>
  );
}