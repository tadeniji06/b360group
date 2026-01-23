"use client";

import WhoWeAre from "@/components/WhoWeAre";
import Goal from "@/components/Goal";
import KPI from "@/components/KPI";

export default function About() {
	return (
		<main className='pt-20'>
			<div className='bg-gray-50 py-12 md:py-20 text-center px-4'>
				<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
					About Us
				</h1>
				<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
					Driving growth through innovation and strategic
					partnerships.
				</p>
			</div>
			<WhoWeAre />
			<Goal />
			<KPI />
		</main>
	);
}
