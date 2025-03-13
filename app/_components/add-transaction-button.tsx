"use client";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            className="text-bold rounded-full"
            onClick={() => setDialogIsOpen(true)}
            disabled={!userCanAddTransaction}
          >
            <ArrowDownUpIcon />
            Adicionar Transação
          </Button>
          <UpsertTransactionDialog
            isOpen={dialogIsOpen}
            setIsOpen={setDialogIsOpen}
          />
        </TooltipTrigger>
        <TooltipContent></TooltipContent>
        {!userCanAddTransaction && (
          <TooltipContent>
            Você já atingiu o limite de transações. Atualize seu plano para
            criar mais.
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddTransactionButton;
