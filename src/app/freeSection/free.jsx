"use client";
import { motion, spring } from "framer-motion";
export default function FreeToUse() {
	const data = [
		{
			text: "Say goodbye to font fees and hello to boundless design. With mr_bold, create striking typography that's 100% yours to use. No restrictions, no hidden costs – just pure typographic freedom.",
		},

		{
			text: "Let your imagination run wild and make a statement that truly stands out – all without spending a dime. Welcome to mr_bold, where creativity meets accessibility.",
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
		<section className="container mx-auto p-2 flex flex-col md:flex-row md:py-10 py-5 md:gap-5 gap-5 overflow-hidden md:my-10 my-5">
			<div className="md:w-1/2 w-full">
				<h4 className="text-large-h2 font-CamptonBold">
					Unleash Your Creativity, Completely Free
				</h4>
			</div>
			<div className="md:w-1/2 w-full font-campton">
				<div className="flex flex-col md:gap-8 gap-4">
					{data.map((n, i) => (
						<motion.p
							className=" md:text-para-big text-para-small capitalize p-1"
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
						</motion.p>
					))}
				</div>
			</div>
		</section>
	);
}
