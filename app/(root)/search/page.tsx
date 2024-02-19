"use client";

import { redirect, useSearchParams } from "next/navigation";

import { SearchFeed } from "@/components/search/search-feed";

interface PageProps {}

export default function Page({}: PageProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  if (!query) redirect("/");

  return (
    <div className="flex flex-col w-full gap-y-2 px-6 py-4 overflow-y-auto relative">
      <h1 className="text-xl font-semibold">Buscar</h1>

      <p className="text-muted-foreground">
        Exibindo resultados para:{" "}
        <span className="text-lg font-semibold">{query}</span>
      </p>

      <SearchFeed query={query} />
    </div>
  );
}
