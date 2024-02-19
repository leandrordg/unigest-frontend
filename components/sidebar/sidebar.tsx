"use client";

import { sidebarLinks } from "@/links/sidebar";
import { SidebarLink } from "@/components/sidebar/sidebar-link";

interface SidebarProps {}

export function Sidebar({}: SidebarProps) {
  return (
    <aside className="hidden sm:block w-fit md:min-w-64 lg:min-w-96 border-r overflow-y-auto pb-2">
      <div className="flex flex-col divide-y">
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.href} link={link} />
        ))}
      </div>
    </aside>
  );
}
