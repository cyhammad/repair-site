export default function PrimaryButton({ children }) {
  return (
    <button className="bg-primary flex gap-2 items-center border-primary border-2 hover:border-primary text-white px-5 hover:bg-primary font-bold py-2 rounded-md">
      {children}
    </button>
  );
}
