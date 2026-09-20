export default function SectionIntro({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-primary
        "
      >
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        {title}
      </h2>

      <p className="mt-4 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
