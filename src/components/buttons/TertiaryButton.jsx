import { cn } from "@/lib/utils";

export default function TertiaryButton({ children, company = "" }) {
  return (
    <button
      className={cn(
        "border-2 flex gap-2 items-center px-5 transition-all ease-in duration-100 text-white font-bold py-2 rounded-md",
        company === "Lg"
          ? "border-lgSecondary bg-lgSecondary"
          : company === "Samsung"
          ? "border-samsungPrimary bg-samsungSecondary text-samsungPrimary"
          : company === "Bosch"
          ? "border-boschSecondary bg-boschSecondary"
          : company === "Siemens"
          ? "border-siemensPrimary text-siemensPrimary bg-siemensSecondary"
          : "border-secondary bg-secondary"
      )}
    >
      {children}
    </button>
  );
}
