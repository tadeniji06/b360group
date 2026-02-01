"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { travel, media, tech, b360, sa, atb } from "@/assets";

const Publications = () => {
	const brands = [
		{
			logo: b360,
			title: "Business360",
			image: travel,
			link: "https://thisisbusiness360.com/",
			desc: "Business360 is a business expansion company that specializes in creating memorable business and production experiences for individuals and businesses.",
			category: "Business Expansion",
		},
		{
			logo: atb,
			title: "Africa Tech Business",
			image: tech,
			link: "https://africatechbusiness.com",
			desc: "Decoding Africa’s Tech, Business & Innovation Landscape. We analyze Africa’s startup ecosystem, digital markets, business trends, and regulatory shifts.",
			category: "Tech & Innovation",
		},
		{
			logo: sa,
			title: "Showcase Africa",
			image: media,
			link: "https://showcaseafricaonline.com",
			desc: "Showcase Africa TV is a media production venture that offers high-end video editing, photography, and creative content services.",
			category: "Media Production",
		},
	];

	return (
		<main className='min-h-screen bg-gray-50 pt-24 pb-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
					>
						Our Publications
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className='text-xl text-gray-600 max-w-3xl mx-auto'
					>
						Discover our portfolio of industry-leading brands driving
						conversations in business, technology, and culture across
						Africa.
					</motion.p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
					{brands.map((brand, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 + 0.2 }}
							className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full'
						>
							{/* Cover Image */}
							<div className='relative h-64 overflow-hidden'>
								<Image
									src={brand.image}
									alt={brand.title}
									fill
									className='object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

								{/* Logo Overlay */}
								<div className='absolute bottom-4 left-4 right-4'>
									<div
										className={`${brand.title === "Showcase Africa" ? "bg-gray-800/90" : "bg-white/90"} backdrop-blur-sm p-3 rounded-xl inline-block mb-2 shadow-lg`}
									>
										<Image
											src={brand.logo}
											alt={`${brand.title} logo`}
											width={100}
											height={40}
											className='h-8 w-auto object-contain'
										/>
									</div>
									<h2 className='text-white text-2xl font-bold drop-shadow-md'>
										{brand.title}
									</h2>
								</div>
							</div>

							<div className='p-6 flex flex-col flex-grow'>
								<span className='text-xs font-bold text-orange-500 tracking-wider uppercase mb-3'>
									{brand.category}
								</span>
								<p className='text-gray-600 mb-6 flex-grow leading-relaxed'>
									{brand.desc}
								</p>

								<a
									href={brand.link}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-orange-600 transition-colors duration-300 group-hover:translate-x-1'
								>
									Visit Website
									<svg
										className='ml-2 w-4 h-4'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M14 5l7 7m0 0l-7 7m7-7H3'
										/>
									</svg>
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Publications;
