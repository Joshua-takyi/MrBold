"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Credits() {
	return (
		<section className="container mx-auto flex flex-col items-center md:my:10 my-5 md:py-10">
			<div className="h-1 w-[80%] bg-white"></div>
			<p className="font-CamptonBold md:text-medium-h1 text-para-small text-center">
				Credits
			</p>
			<section className="container mx-auto p-2 md:my-10 my-5">
				<div className="grid md:grid-cols-3 grid-cols-1 gap-10 ">
					<Card
						text="Our journey began with THE BOLD FONT's innovative approach to typography. Their creativity and vision sparked the idea for mrBold, inspiring us to create a platform where everyone can design custom bold fonts freely."
						header="Inspired by THE BOLD FONT"
						href="https://the-bold-font.com/"
						linkText="the-bold-fonts"
					/>
					<Card
						header="Powered by THE BOLD FONT"
						text="We're proud to feature THE BOLD FONT in our collection. This remarkable typeface, generously shared by its creators, forms the foundation of many designs on mr_bold. We're grateful for their contribution to the typography community"
						href="https://the-bold-font.com/"
						linkText="the-bold-fonts"
					/>
					<Card
						header="Honoring Erik Spiekermann"
						text="We pay tribute to Erik Spiekermann, whose legendary designs and digital typography innovations continue to inspire mrBold"
						href="https://spiekermann.com/en/"
						linkText="spiekermann"
					/>
				</div>
			</section>
			<div className="h-1 w-[80%] bg-white"></div>
		</section>
	);
}

const Card = ({ header, text, href, linkText }) => {
	const cardvariant = {
		hidden: {
			x: 0,
		},
		whileHover: {
			scale: 1.1,
			backgroundColor: "#71F79F",
			color: "#000000",
			transition: {
				duration: 0.3,
				ease: "easeIn",
			},
		},
	};
	return (
		<motion.div
			className="md:w-[300px] md:p-5 p-2"
			variants={cardvariant}
			whileHover="whileHover"
			initial="hidden"
		>
			<div className=" flex flex-col rounded-none md:gap-5 gap-3">
				<p className="font-CamptonBold capitalize text-[37px] ">{header}</p>
				<p className="text-pretty font-campton md:text-para-big text-para-small">
					{text}
				</p>
				<Link
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					passHref
					legacyBehavior
				>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="text-pretty font-campton underline hover:text-red-600 hover:scale-[1.1] transition-all"
					>
						{linkText}
					</a>
				</Link>
			</div>
		</motion.div>
	);
};
