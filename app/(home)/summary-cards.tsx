import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "../_lib/prisma";
import { auth } from "@clerk/nextjs/server";

const SummaryCards = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const depositTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "DEPOSIT", userId: userId },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "INVESTMENT", userId: userId },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { type: "EXPENSE", userId: userId },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const balance = depositTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      {/* Primeiro Card */}
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />
      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={investmentsTotal}
        />
        <SummaryCard
          icon={<TrendingUpIcon className="text-primary" size={16} />}
          title="Receita"
          amount={depositTotal}
        />
        <SummaryCard
          icon={<TrendingDownIcon className="text-red-500" size={16} />}
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
