import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";
import SummaryCards from "./(home)/components/summary-cards";
import TimeSelect from "./(home)/components/time-select";
import { isMatch } from "date-fns";
import { TransactionPieChart } from "./(home)/components/transactions-pie-chart";
import getDashboard from "./_data/get-dashboard";

interface HomeProps {
  searchParams: { month: string };
}

export default async function Home({ searchParams: { month } }: HomeProps) {
  const currentMonth = new Date().getMonth() + 1;
  const formattedMonth = currentMonth.toString().padStart(2, "0");
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsValid = !month || !isMatch(month, "MM");
  if (monthIsValid) {
    redirect(`?month=${formattedMonth}`);
  }

  const dashboard = await getDashboard(month);

  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <div className="grid grid-cols-[2fr,1fr]">
          <SummaryCards {...dashboard} />
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-6">
          <TransactionPieChart {...dashboard} />
        </div>
      </div>
    </>
  );
}
