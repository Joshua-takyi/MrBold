export default function CustomBackground() {
	return (
		<div className="fixed top-0 left-0 w-full h-full -z-10">
			<div
				className="h-full w-full dark:bg-black bg-white relative flex items-center justify-center"
				style={{
					backgroundImage: `
						linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px),  /* Dark gray for light mode */
						linear-gradient(180deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),  /* White for dark mode */
						linear-gradient(180deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
					`,
					backgroundSize: "20px 20px", // Smaller grid size
				}}
			>
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			</div>
		</div>
	);
}
