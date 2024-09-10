export default function TertiaryButton({ children }) {
  return (
    <button className="border-2 border-secondary flex gap-2 items-center px-5 hover:border-secondary bg-secondary transition-all ease-in duration-100 text-white font-bold py-2 rounded-md">
      {children}
    </button>
  );
}
