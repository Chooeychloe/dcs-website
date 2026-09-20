import { Card, CardContent } from "@/components/ui/card";

export default function AreaCard({ area }) {
  const Icon = area.icon;

  return (
    <Card
      className="
        border-border/50
        bg-card/70
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-lg
      "
    >
      <CardContent className="p-6">
        <div
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-lg
            bg-primary/10
            text-primary
          "
        >
          <Icon className="h-5 w-5" />
        </div>

        <h3 className="mt-5 font-semibold">
          {area.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {area.description}
        </p>
      </CardContent>
    </Card>
  );
}
