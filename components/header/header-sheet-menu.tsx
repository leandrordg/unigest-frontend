"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerLinks } from "@/links/header";
import { sidebarLinks } from "@/links/sidebar";
import {
  HamburgerMenuIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";

export function HeaderSheetMenu() {
  const [searchData, setSearchData] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function handleSearch() {
    if (!searchData.length) return;

    setIsSheetOpen(false);

    router.push(`/search?q=${searchData}`);

    setSearchData("");
  }

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto p-0">
        <SheetHeader className="p-6 pb-0">
          <SheetTitle className="font-semibold uppercase">Unigest</SheetTitle>
          <SheetDescription>
            Sistema de gestão escolar para instituições de ensino.
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <form action={handleSearch} className="px-6">
            <Input
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              type="text"
              placeholder="Buscar"
              className="w-full"
            />
          </form>

          <div className="flex flex-col divide-y mt-6">
            {headerLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className={`text-sm text-muted-foreground px-6 hover:bg-muted/50 shrink-0 py-4 w-full text-left transition ${
                    pathname === `/${link.href}` &&
                    "bg-muted font-semibold text-black dark:text-white"
                  }`}
                >
                  {link.title}
                </Link>
              </SheetClose>
            ))}
          </div>

          <div className="flex flex-col divide-y mt-6">
            {sidebarLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link
                  href={`/${link.href}`}
                  className={`text-sm text-muted-foreground px-6 hover:bg-muted/50 shrink-0 py-4 w-full text-left transition ${
                    pathname === `/${link.href}` &&
                    "bg-muted font-semibold text-black dark:text-white"
                  }`}
                >
                  {link.title}
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>
        <SheetFooter className="px-6 pb-6">
          <SheetClose asChild>
            <Button type="submit" className="gap-2">
              <QuestionMarkCircledIcon /> Suporte
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
