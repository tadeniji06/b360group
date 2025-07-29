import Brands from "@/components/Brands";
import Goal from "@/components/Goal";
import Hero from "@/components/Hero";
import KPI from "@/components/KPI";
import Service from "@/components/Service";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
	return (
		<div className=''>
			<Hero />
			<WhoWeAre />
			<Brands />
			<Goal />
			<KPI />
			<Service />
		</div>
	);
}
