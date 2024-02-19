"use client";

import { useSearchParams } from "next/navigation";

import { MainCard } from "@/components/ui/main-card";
import { sidebarLinks } from "@/links/sidebar";

interface PageProps {}

export default function Page({}: PageProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const data = sidebarLinks.filter((link) =>
    link.title.toLowerCase().includes(query?.toLowerCase()!!)
  );

  return (
    <div className="flex flex-col w-full gap-y-2 px-6 py-4 overflow-y-auto relative">
      <h1 className="text-xl font-semibold">Buscar</h1>

      <p className="text-muted-foreground">
        Exibindo resultados para:{" "}
        <span className="text-lg font-semibold">{query}</span>
      </p>

      {data.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-20">
          {data.map((link) => (
            <MainCard key={link.href} card={link} />
          ))}
        </div>
      ) : (
        <div className="flex h-[50%] items-center justify-center text-sm text-muted-foreground">
          Nenhum resultado encontrado, tente por outro termo...
        </div>
      )}
    </div>
  );
}
