"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isTop, setIsTop] = useState(true);

	const pathname = usePathname();

	const isActive = (href) => pathname === href;

	const menuToggle = () => {
		setIsOpen(!isOpen);
	};
	const handleScroll = () => {
		// Set isTop to false when scrolled down
		setIsTop(window.scrollY > 0);
	};

	useEffect(() => {
		// Attach scroll event listener on mount
		window.addEventListener("scroll", handleScroll);
		// Clean up the event listener on unmount
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<header
			className={`flex items-center justify-between p-4 md:px-16 z-50 sticky top-0 backdrop-blur-md transition-colors duration-500`}
		>
			<nav className="flex justify-between items-center gap-4">
				<h2 className="z-50">
					<Link
						href="/"
						className="font-CamptonBold text-3xl uppercase text-white"
					>
						MrBold &nbsp;
						<sup>®</sup>
					</Link>
				</h2>
			</nav>
			<div onClick={menuToggle} className="cursor-pointer z-50 p-2">
				<HamburgerIcon isOpen={isOpen} />
			</div>
			<AnimatePresence>
				{isOpen && <MobileMenu isActive={isActive} />}
			</AnimatePresence>
		</header>
	);
};

// !hamburger
const HamburgerIcon = ({ isOpen }) => {
	return (
		<div className="flex flex-col gap-2">
			<motion.div
				className="h-1 w-14 bg-white"
				animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
				transition={{ duration: 0.3 }}
			/>
			<motion.div
				className="h-1 w-14 bg-white"
				animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
				transition={{ duration: 0.3 }}
			/>
		</div>
	);
};

const MobileMenu = ({ isActive }) => {
	const navigation = [
		{ id: 1, name: "Home", href: "/" },
		{ id: 2, name: "Services", href: "/services" },
		{ id: 3, name: "About", href: "/about" },
		{ id: 4, name: "Projects", href: "/projects" },
		{ id: 5, name: "Contact", href: "/contact" },
	];
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
	return (
		<motion.div
			className="fixed bottom-0 left-0 right-0 top-0 w-full h-screen  bg-[#000000] z-40 flex flex-col justify-center items-center "
			variants={mainVariant}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<nav className="flex flex-col gap-8 text-center ">
				{navigation.map((item, index) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						<Link
							href={item.href}
							className={`text-2xl ${
								isActive(item.href) ? "text-white font-bold" : "text-slate-50"
							}`}
						>
							{item.name}
						</Link>
					</motion.div>
				))}
			</nav>
		</motion.div>
	);
};
