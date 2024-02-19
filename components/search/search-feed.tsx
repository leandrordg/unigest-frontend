"use client";

import { sidebarLinks } from "@/links/sidebar";
import { MainCard } from "@/components/ui/main-card";
import { useSearchParams } from "next/navigation";

interface SearchFeedProps {}

export function SearchFeed({}: SearchFeedProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const data = sidebarLinks.filter((link) =>
    link.title.toLowerCase().includes(query?.toLowerCase()!!)
  );

  return (
    <>
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
    </>
  );
}
