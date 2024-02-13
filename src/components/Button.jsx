import { twMerge } from "tailwind-merge";

function Button({ title, className, icon, onClick }) {
	return (
		<button
			onClick={onClick}
			className={twMerge(
				`relative py-1.5 px-4 w-max rounded-md font-semibold capitalize whitespace-nowrap leading-6 shadow-sm text-base transition-sm bg-[#00FF66] bg-opacity-90 border border-solid border-[#B0FFD0] overflow-hidden hover:drop-shadow-md hover:rotate-1 active:scale-95 active:translate-y-1 ${
					icon ? "flex-row gap-3" : ""
				}
			`,
				className
			)}
		>
			{icon && icon}
			{title}
		</button>
	);
}
export default Button;
