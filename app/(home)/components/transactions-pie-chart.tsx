"use client";

// import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItems from "./percentage-items";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#fff",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesa",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionPieChartProps {
  typesPercentage: TransactionPercentagePerType;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

export function TransactionPieChart({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPercentage,
}: TransactionPieChartProps) {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
  ];
  return (
    <Card className="flex flex-col p-12">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <PercentageItems
          icon={
            <TrendingUpIcon
              size={16}
              className="h-8 w-8 rounded-md bg-white bg-opacity-5 p-2 text-primary"
            />
          }
          title="Receita"
          percentage={typesPercentage[TransactionType.DEPOSIT]}
        />
        <PercentageItems
          icon={
            <TrendingDownIcon
              size={16}
              className="h-8 w-8 rounded-md bg-white bg-opacity-5 p-2 text-danger"
            />
          }
          title="Despesa"
          percentage={typesPercentage[TransactionType.EXPENSE]}
        />
        <PercentageItems
          icon={
            <PiggyBankIcon
              size={16}
              className="h-8 w-8 rounded-md bg-white bg-opacity-5 p-2 text-white"
            />
          }
          title="Investimento"
          percentage={typesPercentage[TransactionType.INVESTMENT]}
        />
      </CardContent>
    </Card>
  );
}
