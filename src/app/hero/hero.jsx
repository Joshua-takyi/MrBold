"use client";
import { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
export const Hero = () => {
	const targetRef = useRef();
	const inView = useInView(targetRef);
	// console.log(inView);
	const mainVariant = {
		hidden: {
			opacity: 0,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
		exit: {
			y: -100,
			opacity: 0,
			scale: 0.95,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};
	const childVariant = {
		hidden: {
			x: 100,
		},
		visible: {
			x: 0,
		},
	};
	return (
		<motion.main
			className="font-campton"
			ref={targetRef}
			variants={mainVariant}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<div className="flex flex-col ">
				<h1 className="uppercase lg:text-large-h1 md:text-medium-h1 text-small-h1 text-center text-balance  font-Hola md:tracking-wider tracking-widest leading-normal text-white p-1">
					FontSize Forge
				</h1>
				<div className=" flex flex-col justify-center items-center">
					<div className="flex flex-col gap-2 uppercase text-[12px] ">
						{["W", "E", "L", "C", "O", "M", "E"].map((n, i) => {
							return (
								<motion.span
									className="text-slate-50 uppercase p-1 text-center"
									key={i}
									variants={childVariant}
									initial="hidden"
									animate="visible"
									transition={{
										type: "spring",
										delay: i * 0.5,
									}}
								>
									{n}
								</motion.span>
							);
						})}
					</div>
				</div>
			</div>
		</motion.main>
	);
};
