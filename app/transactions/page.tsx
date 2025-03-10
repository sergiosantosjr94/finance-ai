import { ArrowDownUpIcon } from "lucide-react";
import { db } from "../_lib/prisma";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { TransactionColumns } from "./_columns/page";

const TransactionsPage = async () => {
  // accessing transaction in the database
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* TÍTULO E BOTÃO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="text-bold rounded-full">
          <ArrowDownUpIcon />
          Adicionar Transação
        </Button>
      </div>
      <DataTable columns={TransactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
