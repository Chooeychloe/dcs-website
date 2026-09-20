import FacultyCard from "./faculty_profile/FacultyCard";

export default function FacultyMembersSection({
  facultyMembers,
  onClick,
}) {
  return (
    <section>
      <div className="mx-auto mb-10 max-w-xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Our Educators
        </p>

        <h3 className="text-2xl font-bold tracking-tight">
          Faculty Members
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Meet the educators and professionals who guide
          our students in their academic journey.
        </p>
      </div>

      <div
        className="
          grid grid-cols-1 gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {facultyMembers.map((faculty) => (
          <FacultyCard
            key={faculty.id}
            faculty={faculty}
            onClick={onClick}
          />
        ))}
      </div>
    </section>
  );
}