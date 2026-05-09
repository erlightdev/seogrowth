import { Link } from "@tanstack/react-router";

export interface FooterLinkGroup {
  heading: string;
  links: { label: string; to: string }[];
}

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: "Product",
    links: [
      { label: "Home", to: "/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/" },
      { label: "Blog", to: "/" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/" },
      { label: "Terms of Service", to: "/" },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      {FOOTER_LINK_GROUPS.map(({ heading, links }) => (
        <div key={heading} className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
            {heading}
          </h3>
          <ul className="flex flex-col gap-2">
            {links.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
