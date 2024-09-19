"use client";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "./ui/button";
import { Toaster, toast } from "sonner";
import { CamptonBold } from "./localfonts";

// ...

export const Config = () => {
	const [fontSize, setFontSize] = useState(30);
	const [fontWeight, setFontWeight] = useState(400);
	const [lineHeight, setLineHeight] = useState(1);
	const [letterSpacing, setLetterSpacing] = useState(0);
	const [copied, setCopied] = useState(false);

	const textStyle = {
		fontSize: `${fontSize}px`,
		fontWeight,
		lineHeight,
		letterSpacing: `${letterSpacing}px`,
	};

	const handleCopy = (format) => {
		let textToCopy;
		if (format === "css") {
			textToCopy = `font-size: ${fontSize}px;
                font-weight: ${fontWeight};
                line-height: ${lineHeight};
                letter-spacing: ${letterSpacing}px;`;
			toast.success("Copied to clipboard");
		} else if (format === "tailwind") {
			textToCopy = `text-[${fontSize}px] font-[${fontWeight}] leading-[${lineHeight}] tracking-[${letterSpacing}px]`;
			toast.success("Copied to clipboard");
		}
		navigator.clipboard.writeText(textToCopy).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<main className="p-3 overflow-hidden">
			<div className="flex flex-col md:gap-20 gap-10">
				<div className="md:py-20 py-10">
					<p
						style={textStyle}
						className={`${CamptonBold.className} text-center`}
					>
						Adjust the sliders to see how the text properties change!
					</p>
				</div>
				<div className="flex flex-col md:gap-5 gap-7 md:flex-row md:flex-wrap md:justify-between">
					<SliderDemo
						value={fontSize}
						setValue={setFontSize}
						min={10}
						max={140}
						step={1}
						id="fontsize"
						label="Font Size"
					/>
					{/* <SliderDemo
						value={fontWeight}
						setValue={setFontWeight}
						min={100}
						max={900}
						step={100}
						id="fontweight"
						label="Font Weight"
					/> */}
					<SliderDemo
						value={lineHeight}
						setValue={setLineHeight}
						min={0.5}
						max={3}
						step={0.1}
						id="lineheight"
						label="Line Height"
					/>
					<SliderDemo
						value={letterSpacing}
						setValue={setLetterSpacing}
						min={-5}
						max={20}
						step={0.5}
						id="letterspacing"
						label="Letter Spacing"
					/>
				</div>
				<div className="flex justify-center gap-4 mt-4  text-white">
					<Button onClick={() => handleCopy("css")}>Copy CSS</Button>
					<Button onClick={() => handleCopy("tailwind")}>Copy Tailwind</Button>
				</div>
				{copied && <p className="text-center mt-2">Copied to clipboard!</p>}
			</div>
			<Toaster richColors position="top-center" />
		</main>
	);
};

function SliderDemo({ value, setValue, min, max, step, id, label, ...props }) {
	return (
		<div className="w-full md:w-[45%]">
			<label htmlFor={id} className="block mb-2">
				{`${label}: ${value}`}
			</label>
			<Slider
				defaultValue={[value]}
				onValueChange={(newValue) => setValue(newValue[0])}
				max={max}
				min={min}
				step={step}
				id={id}
				className="w-full"
				{...props}
			/>
		</div>
	);
}
