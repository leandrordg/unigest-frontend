import { DashboardCards } from "@/components/dashboard/dashboard-cards";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-y-4 px-6 py-4 overflow-y-auto">
      <h1 className="text-xl font-semibold">Painél Administrativo</h1>

      <DashboardCards />
    </div>
  );
}
