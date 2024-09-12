import { cn } from "@/lib/utils";

export default function SecondaryButton({ children, company = "" }) {
  return (
    <button
      className={cn(
        "border-2 flex gap-2 items-center px-5 transition-all ease-in duration-100 font-bold py-2 rounded-md",
        company === "Siemens"
          ? "border-siemensPrimary text-siemensPrimary hover:bg-siemensPrimary hover:border-siemensPrimary hover:text-white"
          : company === "Bosch"
          ? "border-boschPrimary text-boschPrimary hover:bg-boschPrimary hover:border-boschPrimary hover:text-white"
          : company === "Samsung"
          ? "border-samsungPrimary text-samsungPrimary hover:bg-samsungPrimary hover:border-samsungPrimary hover:text-white"
          : company === "Lg"
          ? "border-lgSecondary text-lgSecondary hover:bg-lgSecondary hover:border-lgSecondary hover:text-white"
          : "border-secondary text-secondary hover:bg-secondary hover:border-secondary hover:text-white"
      )}
    >
      {children}
    </button>
  );
}
