import { Hero } from "./hero/hero";
import History from "./history/History";
import FreeToUse from "./freeSection/free";
import Try from "./try/try";
import Config from "@/components/config";
import Para from "./paragraph/para";
import Credits from "./credits/credits";

export default function Home() {
	return (
		<div>
			<Hero />
			<History />
			<FreeToUse />
			<Try />
			<Config />
			<Para />
			<Credits />
		</div>
	);
}
