"use client";
import DeleteTransaction from "@/app/_actions/delete-transaction";
import { Button } from "@/app/_components/ui/button";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface EditTransactionButtonProps {
  id: string;
}

const DeleteTransactionButton = ({ id }: EditTransactionButtonProps) => {
  const router = useRouter();

  const handleOnDelete = (id: string) => {
    DeleteTransaction({ id });
    router.refresh();
  };

  return (
    <Button
      onClick={() => handleOnDelete(id)}
      variant="ghost"
      size="icon"
      className="text-muted-foreground"
    >
      <TrashIcon />
    </Button>
  );
};

export default DeleteTransactionButton;
