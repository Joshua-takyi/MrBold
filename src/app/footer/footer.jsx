import React from "react";

export default function Footer() {
	return (
		<footer className="bg-black text-white md:py-20 py-10 ">
			<div className="container mx-auto px-4">
				<div className="mt-4 text-center text-sm">
					<p>@CodeWithJosh</p>
					<p>
						&copy; {new Date().getFullYear()} Your Company. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
