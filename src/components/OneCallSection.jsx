import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

export default function OneCallSection() {
  return (
    <div className="flex items-center justify-center w-full flex-col px-5">
      <div className="max-w-7xl w-full px-10 py-20 rounded-2xl bg-blob flex flex-col gap-5 items-center justify-center text-center">
        <h1 className="text-4xl font-black max-w-md">
          One Call can solve all your appliance problems
        </h1>
        <span className="font-medium max-w-lg">
          Sometimes you need to call in the skilled and most qualified person
          for perfect repair. This is where the handyman comes in handy.
        </span>
        <div className="flex items-center gap-3">
          <PrimaryButton>Call Us</PrimaryButton>
          <SecondaryButton>Whatsapp Us</SecondaryButton>
        </div>
      </div>
    </div>
  );
}
