"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
	const footerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const linkHover = {
		hover: { scale: 1.1, color: "#71F79F", transition: { duration: 0.3 } },
	};

	const socials = [
		{
			link: "https://x.com/home",
			name: "twitter",
		},
		{
			link: "https://www.instagram.com/",
			name: "Instagram",
		},
		{
			link: "https://www.linkedin.com/feed/",
			name: "linkedin",
		},
	];

	return (
		<motion.footer
			initial="hidden"
			whileInView="visible"
			variants={footerVariants}
			className="bg-black text-white py-10 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center"
		>
			{/* Logo Section */}
			<div className="mb-6 md:mb-0">
				<h2 className="text-[35px] font-hola">mrBold</h2>
				<p className="text-sm">© 2024 mrBold. All rights reserved.</p>
			</div>

			{/* Navigation Links */}
			<div className="flex flex-col md:flex-row items-center gap-4">
				{["Home", "Services", "About", "Projects", "Contact"].map(
					(item, index) => (
						<motion.div
							key={index}
							variants={linkHover}
							whileHover="hover"
							className="cursor-pointer"
						>
							<Link
								href={`/${item.toLowerCase()}`}
								className="text-sm md:text-md"
							>
								{item}
							</Link>
						</motion.div>
					)
				)}
			</div>

			{/* Social Media Links */}
			<div className="flex gap-5 mt-6 md:mt-0">
				{socials.map((platform, index) => (
					<motion.div
						key={index}
						whileHover="hover"
						variants={linkHover}
						className="cursor-pointer text-xl"
					>
						<Link
							href={platform.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{platform.name}
						</Link>
					</motion.div>
				))}
			</div>
		</motion.footer>
	);
};

export default Footer;
