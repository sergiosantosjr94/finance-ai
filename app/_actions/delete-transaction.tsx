"use server";
import { db } from "../_lib/prisma";

interface DeleteTransactionProps {
  id: string;
}

const DeleteTransaction = async ({ id }: DeleteTransactionProps) => {
  await db.transaction.delete({
    where: {
      id: id,
    },
  });
};

export default DeleteTransaction;
