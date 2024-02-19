import { Suspense } from "react";

import { SearchFeed } from "@/components/search/search-feed";

interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="flex flex-col w-full gap-y-2 px-6 py-4 overflow-y-auto relative">
      <h1 className="text-xl font-semibold">Buscar</h1>

      <Suspense fallback={<div>Carregando...</div>}>
        <SearchFeed />
      </Suspense>
    </div>
  );
}
