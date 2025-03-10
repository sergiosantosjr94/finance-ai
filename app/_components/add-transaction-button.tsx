"use client";
import { useState } from "react";
import UpsertTransactionDialog from "./upsert-transaction-dialog";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="text-bold rounded-full"
        onClick={() => setDialogIsOpen(true)}
      >
        <ArrowDownUpIcon />
        Adicionar Transação
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
