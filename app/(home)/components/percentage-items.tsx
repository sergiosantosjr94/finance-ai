interface PercentageItemsProps {
  title: string;
  percentage: number;
  icon: React.ReactNode;
}

const PercentageItems = ({ title, percentage, icon }: PercentageItemsProps) => {
  return (
    <div className="mb-2 space-y-2">
      <div className="flex items-center justify-between">
        {/* ICONE */}
        <div className="center flex items-center gap-2">
          {icon}
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
        <p className="font-bold">{percentage}%</p>
      </div>
    </div>
  );
};

export default PercentageItems;
