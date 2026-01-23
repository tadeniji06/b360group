"use client";

import Service from "@/components/Service";

export default function Services() {
	return (
		<main className='pt-20'>
			<div className='bg-main text-white py-12 md:py-20 text-center px-4'>
				<h1 className='text-4xl md:text-5xl font-bold mb-6'>
					Our Services
				</h1>
				<p className='text-xl text-blue-100 max-w-3xl mx-auto'>
					Comprehensive solutions tailored for your business growth.
				</p>
			</div>
			<Service />
		</main>
	);
}
