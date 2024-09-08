export default function SecondaryButton({ children }) {
  return (
    <button className="border-2 border-secondary flex gap-2 items-center text-secondary px-5 hover:border-secondary hover:bg-secondary transition-all ease-in duration-100 hover:text-white font-bold py-2 rounded-md">
      {children}
    </button>
  );
}
