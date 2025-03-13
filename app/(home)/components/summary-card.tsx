import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { canUserAddTransaction } from "@/app/_data/can-user-add-transaction";

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  bg?: boolean;
}

const SummaryCard = async ({
  icon,
  title,
  amount,
  size = "small",
  bg = false,
}: SummaryCardProps) => {
  const userCanAddTransaction = await canUserAddTransaction();

  return (
    <div className={`${bg ? "rounded-md bg-white bg-opacity-5" : ""}`}>
      <Card>
        <CardHeader className="flex-row items-center gap-4">
          {icon}
          <p
            className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
          >
            {title}
          </p>
        </CardHeader>
        <CardContent className="flex justify-between">
          <p
            className={`${size === "small" ? "text-2xl" : "text-4xl"} font-bold`}
          >
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(amount || 0)}
          </p>

          {size === "large" && (
            <AddTransactionButton
              userCanAddTransaction={userCanAddTransaction}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCard;
