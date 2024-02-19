"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarLinksProps } from "@/links/sidebar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface MainCardProps {
  card: SidebarLinksProps;
}

export function MainCard({ card }: MainCardProps) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/${card.href}`)}
      className="hover:bg-muted/50 transition cursor-pointer"
    >
      <CardHeader className="flex-row items-center gap-4">
        <card.icon className="h-8 w-8"/>
        <div>
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>/{card.href}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{card.description}</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="secondary">
          Clique para visualizar
        </Button>
      </CardFooter>
    </Card>
  );
}
