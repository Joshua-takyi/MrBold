import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				"flex w-full rounded-md bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			ref={(element) => {
				if (element) {
					const resizeTextarea = () => {
						element.style.height = "auto";
						element.style.height = element.scrollHeight + "px";
					};
					element.addEventListener("input", resizeTextarea);
					resizeTextarea(); // Initial resize
				}
				if (typeof ref === "function") ref(element);
				else if (ref) ref.current = element;
			}}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
