"use client";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
export default function History() {
	const targetref = useRef();
	const isInView = useInView(targetref, {
		once: false,
		threshold: 0.5,
	});

	const data = [
		{
			text: "15th Century: Johannes Gutenberg introduces movable type printing in Europe, revolutionizing the spread of information.",
		},
		{
			text: "16th-18th Centuries: Typeface design becomes an art form. Notable designers like Claude Garamond and John Baskerville create influential fonts still used today.",
		},
		{
			text: "19th Century: The Industrial Revolution brings new printing technologies, leading to bolder, more attention-grabbing fonts for advertising.",
		},
		{
			text: "Early 20th Century: Modernist movements influence typography, with sans-serif fonts gaining popularity.",
		},
		{
			text: "Late 20th Century: Digital typography emerges, making font creation and use more accessible than ever before.",
		},
		{
			text: "21st Century: Web fonts and variable fonts offer new possibilities for typography in digital media.",
		},
	];
	const childVariant = {
		hidden: {
			x: 100,
		},
		visible: {
			x: 0,
		},
	};
	return (
		<motion.section
			className="container mx-auto p-2 flex flex-col md:flex-row md:py-10 py-5 md:gap-5 gap-5 overflow-hidden md:my-5"
			ref={targetref}
		>
			<div className="md:w-1/2 w-full">
				<h2 className="font-CamptonBold md:text-large-h2 text-small-h2 ">
					The History of Fonts From Gutenberg to Digital
				</h2>
			</div>
			<div className="md:w-1/2 w-full flex flex-col font-campton gap-5">
				<h3 className="text-[20px]">
					Fonts have a rich history that spans centuries, evolving from
					handwritten scripts to digital typefaces. Here are some key points in
					font history:
				</h3>
				<ul className="flex flex-col gap-4">
					{data.map((n, i) => (
						<motion.li
							className=" md:text-para-big text-para-small capitalize p-1 list-inside list-disc md:list-outside  "
							key={i}
							variants={childVariant}
							initial="hidden"
							animate="visible"
							transition={{
								type: "spring",
								delay: i * 0.5,
							}}
						>
							{n.text}
						</motion.li>
					))}
				</ul>
			</div>
		</motion.section>
	);
}
