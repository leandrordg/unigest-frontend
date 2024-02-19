"use client";

import {
  BookmarkIcon,
  CardStackMinusIcon,
  CubeIcon,
  DashboardIcon,
  GlobeIcon,
  IdCardIcon,
  LayoutIcon,
  MixIcon,
  MoonIcon,
  PersonIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export interface SidebarLinksProps {
  title: string;
  href: string;
  description?: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const sidebarLinks: SidebarLinksProps[] = [
  {
    title: "Dashboard",
    href: "",
    description: "Painel de controle",
    icon: DashboardIcon,
  },
  {
    title: "Departamentos",
    href: "departamentos",
    description: "Departamentos e setores",
    icon: LayoutIcon,
  },
  {
    title: "Cursos",
    href: "cursos",
    description: "Cursos e disciplinas",
    icon: BookmarkIcon,
  },
  {
    title: "Turnos",
    href: "turnos",
    description: "Turnos e horários",
    icon: MoonIcon,
  },
  {
    title: "Turmas",
    href: "turmas",
    description: "Turmas e salas",
    icon: GlobeIcon,
  },
  {
    title: "Estudantes",
    href: "estudantes",
    description: "Estudantes e responsáveis",
    icon: PersonIcon,
  },
  {
    title: "Docentes",
    href: "docentes",
    description: "Professores e funcionários",
    icon: IdCardIcon,
  },
  {
    title: "Devedores",
    href: "devedores",
    description: "Devedores e inadimplentes",
    icon: CardStackMinusIcon,
  },
  {
    title: "Biblioteca",
    href: "biblioteca",
    description: "Biblioteca e acervo",
    icon: MixIcon,
  },
  {
    title: "Credores",
    href: "credores",
    description: "Credores e fornecedores",
    icon: CubeIcon,
  },
  {
    title: "Emolumentos",
    href: "emolumentos",
    description: "Emolumentos e taxas",
    icon: ReaderIcon,
  },
];
