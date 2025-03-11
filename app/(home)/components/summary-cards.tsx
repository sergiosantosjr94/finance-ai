import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";

interface SummaryCardsProps {
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-6">
      {/* Primeiro Card */}
      <SummaryCard
        icon={
          <WalletIcon
            size={16}
            className="h-8 w-8 rounded-md bg-black bg-opacity-45 p-2 text-white"
          />
        }
        title="Saldo"
        amount={balance}
        size="large"
        bg={true}
      />
      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={
            <PiggyBankIcon
              size={16}
              className="h-8 w-8 rounded-md bg-white bg-opacity-5 p-2 text-white"
            />
          }
          title="Investido"
          amount={investmentsTotal}
          bg={true}
        />
        <SummaryCard
          icon={
            <TrendingUpIcon
              className="h-8 w-8 rounded-md bg-green-500 bg-opacity-5 p-2 text-primary"
              size={16}
            />
          }
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryCard
          icon={
            <TrendingDownIcon
              className="h-8 w-8 rounded-md bg-red-500 bg-opacity-5 p-2 text-red-500"
              size={16}
            />
          }
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
