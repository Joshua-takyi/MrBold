import { Campton } from "../../app/layout";
export const Hero = () => {
	return (
		<main
			className={`${Campton.className} flex flex-col justify-center items-center md:leading-tight  md:gap-4 gap-5 md:py-10 p-3 py-6`}
		>
			<h1 className="md:text-[70px] text-[30px] [font-weight:900] md:text-center">
				Font Styler ; Customize and Copy with Ease
			</h1>
			<h2 className="md:text-center  font-medium md:text-lg text-pretty">
				Customize fonts with interactive sliders. Adjust weight, size, and more
				in real-time. Preview and copy your perfect styles instantly—all for
				free.
			</h2>
		</main>
	);
};
