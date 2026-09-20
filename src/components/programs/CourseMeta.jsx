export default function CourseMeta({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div>
      <div
        className="
          flex items-center gap-2
          text-xs
          font-medium
          text-muted-foreground
        "
      >
        <Icon className="h-3.5 w-3.5 text-primary" />
        {label}
      </div>

      <p className="mt-1 text-sm font-medium">
        {value}
      </p>
    </div>
  );
}