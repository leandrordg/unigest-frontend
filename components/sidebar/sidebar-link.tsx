import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { SidebarLinksProps } from "@/links/sidebar";

interface SidebarLinkProps {
  link: SidebarLinksProps;
}

export function SidebarLink({ link }: SidebarLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/${link.href}`);
      }}
      className={`flex justify-between items-center px-6 py-3 hover:bg-muted/50 transition cursor-pointer ${
        pathname === `/${link.href}` && "bg-muted hover:bg-muted"
      }`}
    >
      <div className="hidden md:flex flex-col items-start">
        <span className="text-sm">{link.title}</span>
        <p className="text-xs text-muted-foreground">/{link.href}</p>
      </div>

      <link.icon className={`h-4 w-4 shrink-0`} />
    </div>
  );
}
