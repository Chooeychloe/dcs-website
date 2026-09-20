import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Faculty", href: "/faculty" },
  { label: "Research", href: "/research" },
  { label: "Extension", href: "/extension" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t bg-muted/20">
      {/* Main Footer */}
      <div
        className="
          mx-auto grid max-w-7xl
          gap-8
          px-6 py-8
          sm:py-10
          md:grid-cols-[1fr_auto_auto]
          md:items-start
        "
      >
        {/* Department */}
        <div className="max-w-lg">
          <Link
            to="/"
            className="inline-flex items-center gap-3"
          >
            <img
              src="/dcs-logo.svg"
              alt="Department of Computer Studies"
              className="h-10 w-auto"
            />

            <div>
              <p className="text-sm font-semibold">
                Department of Computer Studies
              </p>

              <p className="mt-0.5 text-[11px] text-muted-foreground">
                Computer Science & Information Technology
              </p>
            </div>
          </Link>

          <p className="mt-4 max-w-md text-sm leading-5 text-muted-foreground">
            Developing future-ready computing professionals through
            instruction, research, innovation, and community engagement.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold">
            Quick Links
          </h3>

          <nav className="mt-3 grid grid-cols-2 gap-x-8 gap-y-2">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="
                  text-sm
                  text-muted-foreground
                  transition-colors
                  hover:text-primary
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-sm font-semibold">
            Connect
          </h3>

          <a
            href="https://www.facebook.com/CvSUBacoorDCS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Department of Computer Studies on Facebook"
            className="
              mt-3
              inline-flex
              h-9 w-9
              items-center justify-center
              rounded-lg
              border
              border-border
              text-muted-foreground
              transition-all duration-200
              hover:border-primary/30
              hover:bg-primary/10
              hover:text-primary
            "
          >
            <FaFacebookF className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t">
        <div
          className="
            mx-auto flex max-w-7xl
            flex-col gap-1.5
            px-6 py-4
            text-xs text-muted-foreground
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Department of Computer Studies.
            All rights reserved.
          </p>

          <p>
            Cavite State University – Bacoor City Campus
          </p>
        </div>
      </div>
    </footer>
  );
}
