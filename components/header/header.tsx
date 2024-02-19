"use client";

import Link from "next/link";
import { useState } from "react";

import { HeaderLink } from "@/components/header/header-link";
import { HeaderSheetMenu } from "@/components/header/header-sheet-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { headerLinks } from "@/links/header";
import { useRouter } from "next/navigation";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  const [searchData, setSearchData] = useState("");
  const router = useRouter();

  function handleSearch(formData: FormData) {
    if (!searchData.length) return;

    router.push(`/search?q=${searchData}`);

    setSearchData("");
  }

  return (
    <header className="flex items-center px-6 py-4 border-b gap-4">
      <div className="flex-1">
        <Link
          href={"/"}
          className="text-xl font-semibold drop-shadow uppercase"
        >
          Unigest
        </Link>
      </div>

      <div className="sm:hidden">
        <HeaderSheetMenu />
      </div>

      <nav className="hidden sm:flex items-center justify-end gap-4">
        {headerLinks.map((link) => (
          <HeaderLink key={link.href} link={link} />
        ))}

        <form
          action={handleSearch}
          className="hidden lg:flex items-center justify-center gap-4"
        >
          <Input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            type="text"
            placeholder="Buscar"
            className="w-full"
          />
        </form>
      </nav>

      <ThemeToggle />
    </header>
  );
}
