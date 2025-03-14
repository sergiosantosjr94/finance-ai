import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";
import SummaryCards from "./(home)/components/summary-cards";
import TimeSelect from "./(home)/components/time-select";
import { isMatch } from "date-fns";
import { TransactionsPieChart } from "./(home)/components/transactions-pie-chart";
import getDashboard from "./_data/get-dashboard";
import ExpensesPerCategory from "./(home)/components/expenses-per-category";
import LastTransactions from "./(home)/components/last-transactions";
import AiReportButton from "./(home)/components/ai-report-button";

interface HomeProps {
  searchParams: { month: string };
}

export default async function Home({ searchParams: { month } }: HomeProps) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsValid = !month || !isMatch(month, "MM");
  if (monthIsValid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }

  const dashboard = await getDashboard(month);
  const user = await clerkClient().users.getUser(userId);

  return (
    <>
      <Navbar />
      <div className="flex h-[912px] flex-col space-y-6 overflow-hidden p-6 2xl:h-full">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex gap-3">
            <AiReportButton
              month={month}
              hasPremiumPlan={
                user.publicMetadata.subscriptionPlan === "premium"
              }
            />
            <TimeSelect />
          </div>
        </div>
        <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards {...dashboard} />
            <div className="flex gap-6 overflow-hidden">
              <div className="w-full">
                <TransactionsPieChart {...dashboard} />
              </div>
              <div className="w-full">
                <ExpensesPerCategory
                  expensesPerCategory={dashboard.totalExpensePerCategory}
                />
              </div>
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
}
