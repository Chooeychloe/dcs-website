import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-muted/20">

      <div
        className="
          mx-auto grid max-w-7xl gap-10
          px-6 py-12
          md:grid-cols-2
          lg:grid-cols-4
        "
      >

        {/* Department */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center"
            >
              <img
                src="/dcs-logo.svg"
                alt="Department of Computer Studies"
                className="h-12 w-auto"
              />
            </Link>

            <div>
              <p className="font-semibold">
                Department of Computer Studies
              </p>

              <p className="text-xs text-muted-foreground">
                Computer Science & Information Technology
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">
            Developing future-ready computing professionals
            through quality instruction, research, innovation,
            and community engagement.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>About</li>
            <li>Programs</li>
            <li>Faculty</li>
            <li>Research</li>
            <li>Extension</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-sm font-semibold">
            Connect
          </h3>

          <div className="mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
        inline-flex h-9 w-9 items-center justify-center
        rounded-lg
        border
        text-muted-foreground
        transition-all duration-300
        hover:border-primary/30
        hover:bg-primary/10
        hover:text-primary
      "
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Department of
            Computer Studies. All rights reserved.
          </p>

          <p>
            Built with modern web technologies.
          </p>
        </div>
      </div>

    </footer>
  );
}