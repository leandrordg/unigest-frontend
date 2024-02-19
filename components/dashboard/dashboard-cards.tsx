"use client";

import { sidebarLinks } from "@/links/sidebar";
import { MainCard } from "../ui/main-card";

interface DashboardCardsProps {}

export function DashboardCards({}: DashboardCardsProps) {
  const cards = sidebarLinks.filter((link) => link.href !== "");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-20">
      {cards.map((link) => (
        <MainCard key={link.href} card={link} />
      ))}
    </div>
  );
}
