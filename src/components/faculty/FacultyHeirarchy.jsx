import { useState } from "react";

import ChairCard from "./ChairCard";
import CoordinatorSection from "./CoordinatorSection";
import FacultyMembersSection from "./FacultyMembersSection";
import FacultyProfileDialog from "./FacultyProfileDialog";

import {
  departmentChair,
  coordinators,
  facultyMembers,
} from "@/data/faculty";

export default function FacultyHierarchy() {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleFacultyClick = (faculty) => {
    setSelectedFaculty(faculty);
  };

  return (
    <section
      className="
    relative overflow-hidden
    border-y border-border/50
    bg-muted/20
    py-24 sm:py-32
  "
    >
      {/* Background grid */}
      <div
        className="
    pointer-events-none absolute inset-0
    opacity-40
    bg-[linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)]
    bg-size-[40px_40px]
  "
      />

      {/* Radial fade */}
      <div
        className="
    pointer-events-none absolute inset-0
    bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background)/0.7)_75%)]
  "
      />
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Department of Computer Studies
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Meet Our Faculty
          </h2>

          <p className="mt-4 text-muted-foreground">
            The people behind the programs, instruction,
            research, and student development of the department.
          </p>
        </div>

        {/* Department Chair */}
        <ChairCard
          chair={departmentChair}
          onClick={handleFacultyClick}
        />

        {/* Coordinators */}
        <CoordinatorSection
          coordinators={coordinators}
          onClick={handleFacultyClick}
        />

        {/* Faculty */}
        <FacultyMembersSection
          facultyMembers={facultyMembers}
          onClick={handleFacultyClick}
        />

      </div>

      {/* Faculty Profile */}
      <FacultyProfileDialog
        faculty={selectedFaculty}
        open={!!selectedFaculty}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedFaculty(null);
          }
        }}
      />
    </section>
  );
}