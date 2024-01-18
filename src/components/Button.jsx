function Button({ title, className, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} relative py-1.5 px-4 w-max rounded-md font-semibold uppercase whitespace-nowrap leading-6 shadow-sm text-base transition-sm border border-solid border-[#18dc87] hover:drop-shadow-md hover:rotate-1 active:scale-95 active:translate-y-1 ${
        icon ? "flex-row gap-3" : ""
      }`}
    >
      {icon && icon}
      {title}
    </button>
  );
}
export default Button;
