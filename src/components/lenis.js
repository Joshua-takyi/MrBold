"use client";
// components/Layout.js
import Lenis from "lenis";
import { useEffect } from "react";

const LenisCom = ({ children }) => {
	useEffect(() => {
		// Initialize Lenis
		const lenis = new Lenis({
			smooth: true,
			duration: 1.2, // Customize duration of the smooth scroll
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Customize easing function
		});

		// Create the animation frame loop for Lenis
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		// Cleanup when the component unmounts
		return () => {
			lenis.destroy();
		};
	}, []);

	return <div>{children}</div>;
};

export default LenisCom;
