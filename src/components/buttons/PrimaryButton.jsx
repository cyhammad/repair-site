import { cn } from "@/lib/utils";

export default function PrimaryButton({
  children,
  company = "",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex gap-2 items-center border-2 text-white px-5 font-bold py-2 rounded-md",
        company === "Siemens"
          ? "bg-siemensPrimary border-siemensPrimary hover:border-siemensPrimary hover:bg-siemensPrimary"
          : company === "Bosch"
          ? "bg-boschPrimary border-boschPrimary hover:border-boschPrimary hover:bg-boschPrimary"
          : company === "Lg"
          ? "bg-lgPrimary border-lgPrimary hover:border-lgPrimary hover:bg-lgPrimary"
          : company === "Samsung"
          ? "bg-samsungPrimary border-samsungPrimary hover:border-samsungPrimary hover:bg-samsungPrimary"
          : "bg-primary border-primary hover:border-primary hover:bg-primary"
      )}
    >
      {children}
    </button>
  );
}
