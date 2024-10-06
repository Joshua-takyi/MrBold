"use client";
import { Slider } from "@/components/ui/slider";
import { Button } from "./ui/button";
import { Toaster, toast } from "sonner";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export default function Config() {
	const [text, setText] = useState("Enter Any Text Here");
	const [fontSize, setFontSize] = useState(60);

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
			<div className="flex flex-wrap md:gap-10 gap-5 p-2">
				<SliderDemo
					value={fontSize}
					setValue={setFontSize}
					min={10}
					max={140}
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

			{copied && <p className="text-center mt-2">Copied to clipboard!</p>}
			<div>
				<div className="md:pt-14 pt-10">
					<Textarea
						style={textStyle}
						value={text}
						onChange={(e) => setText(e.target.value)}
						className={`font-Hola  text-small-h1 text-center resize-none focus:outline-none focus:border-none focus:ring-0 uppercase `}
					/>
					{/* Adjust the sliders to see how the text properties change! */}
				</div>
			</div>
			<div className="flex justify-center gap-4 my-14  text-white">
				<Button onClick={() => handleCopy("tailwind")}>Copy Tailwind</Button>
				<Button onClick={() => handleCopy("css")}>Copy css</Button>
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
				className="w-full cursor-pointer"
				{...props}
			/>
		</div>
	);
}
