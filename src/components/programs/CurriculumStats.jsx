import {
  BookOpen,
  Clock3,
  GraduationCap,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function CurriculumStats({
  totalCourses,
  totalUnits,
  totalCategories,
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <CurriculumStat
        icon={BookOpen}
        value={totalCourses}
        label="Courses"
      />

      <CurriculumStat
        icon={GraduationCap}
        value={totalUnits}
        label="Listed Units"
      />

      <CurriculumStat
        icon={Clock3}
        value={totalCategories}
        label="Curriculum Areas"
      />
    </div>
  );
}

function CurriculumStat({
  icon: Icon,
  value,
  label,
}) {
  return (
    <Card className="border-border/70">
      <CardContent className="flex items-center gap-4 p-5">
        <div
          className="
            flex h-10 w-10
            shrink-0
            items-center justify-center
            rounded-xl
            bg-primary/10
            text-primary
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <p className="text-2xl font-bold tracking-tight">
            {value}
          </p>

          <p className="text-xs text-muted-foreground">
            {label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}