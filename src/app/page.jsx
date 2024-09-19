import { Container } from "@/components/container";
import { Hero } from "./hero/hero";
import { Config } from "@/components/config";
import Hope from "@/components/nav";
import Footer from "./footer/footer";

export default function Home() {
	return (
		<div>
			<Container>
				<Hero />
				<Config />
			</Container>
			<Footer />
		</div>
	);
}
