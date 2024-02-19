import { HeaderLinksProps } from "@/links/header";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  link: HeaderLinksProps;
}
export function HeaderLink({ link }: HeaderLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={`/${link.href}`}
      key={link.href}
      className={`text-sm text-muted-foreground hover:text-black dark:hover:text-white shrink-0 ${
        pathname === `/${link.href}` && "text-black dark:text-white font-semibold"
      }`}
    >
      {link.title}
    </Link>
  );
}
