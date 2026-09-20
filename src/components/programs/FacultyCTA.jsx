import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function FacultyCTA() {
  return (
    <section>
      <div
        className="
          mx-auto max-w-5xl
          px-6 py-20
          text-center
          sm:py-28
        "
      >
        <div
          className="
            mx-auto
            flex h-12 w-12
            items-center justify-center
            rounded-xl
            bg-primary/10
            text-primary
          "
        >
          <GraduationCap className="h-6 w-6" />
        </div>

        <h2 className="mt-6 text-3xl font-bold tracking-tight">
          Meet the People Behind the Programs
        </h2>

        <p
          className="
            mx-auto mt-4
            max-w-xl
            text-muted-foreground
          "
        >
          Get to know the faculty members who teach,
          mentor, and support our students throughout
          their academic journey.
        </p>

        <Link
          to="/faculty"
          className="
            group
            mt-8
            inline-flex
            h-11
            items-center
            justify-center
            rounded-lg
            bg-primary
            px-5
            text-sm
            font-semibold
            text-primary-foreground
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-primary/90
            hover:shadow-md
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
          "
        >
          Meet Our Faculty

          <ArrowRight
            className="
              ml-2
              h-4 w-4
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>
    </section>
  );
}
