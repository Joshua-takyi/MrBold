"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			"relative flex w-full touch-none select-none items-center",
			className
		)}
		{...props}
	>
		<SliderPrimitive.Track className="relative md:h-0.5 h-3 w-full grow overflow-hidden rounded-full bg-black">
			<SliderPrimitive.Range className="absolute h-full bg-white" />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className="block md:size-3 size-5 rounded-full  md:bg-white bg-white md:border-none border-primary/50  shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
	</SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
