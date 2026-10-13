import { useMemo, useState } from "react";
import { Search } from "lucide-react";

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
  const [query, setQuery] = useState("");
  const allFaculty = useMemo(() => [departmentChair, ...coordinators, ...facultyMembers], []);
  const filteredFaculty = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return allFaculty;
    return allFaculty.filter((person) => [person.name, person.position, person.program, ...(person.specialization ?? [])]
      .filter(Boolean).join(" ").toLowerCase().includes(normalized));
  }, [allFaculty, query]);

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
        <div className="mx-auto mb-16 max-w-3xl text-center">
  <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">
    Department of Computer Studies
  </p>

  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
    Faculty & Coordinators
  </h1>

  <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
    The people behind the programs, instruction, research, and student
    development of the department.
  </p>
</div>
        <label className="mx-auto mb-10 flex max-w-2xl items-center gap-3 rounded-xl border border-border bg-background px-4 focus-within:ring-2 focus-within:ring-primary">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <span className="sr-only">Search faculty by name, role, program, or specialization</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" className="min-h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Search name, role, program, or specialization" />
        </label>

        {query.trim() ? <>
          <p className="mb-6 text-sm text-muted-foreground" aria-live="polite">{filteredFaculty.length} matching {filteredFaculty.length === 1 ? "person" : "people"}</p>
          {filteredFaculty.length ? <FacultyMembersSection facultyMembers={filteredFaculty} onClick={handleFacultyClick} /> : <p className="rounded-xl border border-dashed border-border px-6 py-10 text-center text-sm text-muted-foreground">No faculty match that search. Try a name, program, or specialization.</p>}
        </> : <>
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
        </>}

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
