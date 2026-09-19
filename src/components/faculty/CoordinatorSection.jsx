import CoordinatorCard from "./CoordinatorCard";

export default function CoordinatorSection({
  coordinators,
  onClick,
}) {
  return (
    <section className="mb-24">
      <div className="mx-auto mb-10 max-w-xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Department Operations
        </p>

        <h3 className="text-2xl font-bold tracking-tight">
          Program & Office Coordinators
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Faculty members responsible for coordinating
          academic programs and student services.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coordinators.map((coordinator) => (
          <CoordinatorCard
            key={coordinator.id}
            coordinator={coordinator}
            onClick={onClick}
          />
        ))}
      </div>
    </section>
  );
}