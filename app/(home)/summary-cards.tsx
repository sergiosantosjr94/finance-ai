import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../_components/ui/card";

const SummaryCards = () => {
  return (
    <div className="space-y-6">
      {/* Primeiro Card */}
      <Card>
        <CardHeader>
          <WalletIcon size={16} />
          <p className="text-white opacity-70">Saldo</p>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">R$2.700</p>
        </CardContent>
      </Card>

      {/* Outros cards */}
      <div className="grid grid-cols-3">
        <Card>
          <CardHeader className="flex-row items-center gap-2">
            <PiggyBankIcon size={14} />
            <p className="text-muted-foreground">Investido</p>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$2.700</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TrendingUpIcon size={14} />
            <p className="text-muted-foreground">Receita</p>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$3.500</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <TrendingDownIcon size={14} />
            <p className="text-muted-foreground">Despesa</p>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$1.200</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SummaryCards;
