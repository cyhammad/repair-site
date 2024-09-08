export default function PrimaryButton({ children }) {
  return (
    <button className="bg-primary flex gap-2 items-center border-primary border-2 hover:border-primary2 text-white px-5 hover:bg-primary2 font-bold py-2 rounded-md">
      {children}
    </button>
  );
}
