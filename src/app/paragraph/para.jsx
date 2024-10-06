"use client";
import { Slider } from "@/components/ui/slider";
// import { Button } from "./ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";

export default function Para() {
	const [text, setText] = useState(
		"Create custom fonts for any project at no cost. No hidden fees or licensing restrictions. Use freely for personal or commercial work. Join mr_bold and unleash your creativity without limits. Great typography, accessible to all."
	);
	const [fontSize, setFontSize] = useState(15);

	const [lineHeight, setLineHeight] = useState(1);

	const [letterSpacing, setLetterSpacing] = useState(3);
	const [copied, setCopied] = useState(false);

	const textStyle = {
		fontSize: `${fontSize}px`,
		lineHeight,
		letterSpacing: `${letterSpacing}px`,
	};

	const handleCopy = (format) => {
		let textToCopy;
		if (format === "css") {
			textToCopy = `font-size: ${fontSize}px;
                line-height: ${lineHeight};
                letter-spacing: ${letterSpacing}px;`;
			toast.success("Copied to clipboard");
		} else if (format === "tailwind") {
			textToCopy = `text-[${fontSize}px]  leading-[${lineHeight}] tracking-[${letterSpacing}px]`;
			toast.success("Copied to clipboard");
		}
		navigator.clipboard.writeText(textToCopy).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<section className="container mx-auto">
			<div className="flex md:flex-row flex-col md:gap-5 p-2">
				<div className="md:w-1/2 flex flex-col w-full">
					<h6 className="text-large-h2 font-CamptonBold uppercase">
						try it out on paragraphs
					</h6>
				</div>
				<div className="md:w-1/2 flex flex-col w-full gap-2 p-2">
					<div className="flex flex-wrap gap-5">
						<SliderDemo
							value={fontSize}
							setValue={setFontSize}
							min={10}
							max={50}
							step={1}
							id="fontsize"
							label="Font Size"
						/>

						<SliderDemo
							value={lineHeight}
							setValue={setLineHeight}
							min={0.5}
							max={10}
							step={0.1}
							id="lineheight"
							label="Line Height"
						/>
						<SliderDemo
							value={letterSpacing}
							setValue={setLetterSpacing}
							min={2}
							max={15}
							step={1}
							id="letterspacing"
							label="Letter Spacing"
						/>
					</div>
					<div className="md:py-5 py-10">
						<Textarea
							style={textStyle}
							value={text}
							onChange={(e) => setText(e.target.value)}
							className={`font-campton p-0 rounded-none overflow-hidden w-full text-para-small  resize-none focus:outline-none focus:border-none focus:ring-0 text-pretty`}
						/>
						{/* Adjust the sliders to see how the text properties change! */}
					</div>
					<div className="flex justify-center gap-4 my-14  text-white">
						<Button onClick={() => handleCopy("tailwind")}>
							Copy Tailwind
						</Button>
						<Button onClick={() => handleCopy("css")}>Copy css</Button>
					</div>
				</div>
			</div>
			<Toaster richColors position="top-center" />
		</section>
	);
}

function SliderDemo({ value, setValue, min, max, step, id, label, ...props }) {
	return (
		<div className="w-full md:w-[45%]">
			<div className=" flex justify-between">
				<label htmlFor={id} className="block mb-2">
					{label}
				</label>
				<span>{value}px</span>
			</div>
			<Slider
				defaultValue={[value]}
				onValueChange={(newValue) => setValue(newValue[0])}
				max={max}
				min={min}
				step={step}
				id={id}
				className="w-[100%] cursor-pointer "
				{...props}
			/>
		</div>
	);
}
