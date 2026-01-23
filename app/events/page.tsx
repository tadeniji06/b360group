"use client";

import { motion } from "framer-motion";

const Events = () => {
	const events = [
		{
			title: "The Executive Mixer",
			date: "Coming Soon",
			type: "Networking",
			desc: "An exclusive gathering of industry leaders and innovators.",
		},
		{
			title: "Lagos Tech Community Meetups",
			date: "Monthly",
			type: "Community",
			desc: "Connecting tech enthusiasts, developers, and founders.",
		},
		{
			title: "Afrique Blockchain Technology Summit",
			date: "Coming Soon",
			type: "Summit",
			desc: "Exploring the future of blockchain technology in Africa.",
		},
	];

	return (
		<main className='min-h-screen bg-white'>
			{/* Hero Section */}
			<div className='relative h-[60vh] bg-main flex items-center justify-center overflow-hidden'>
				<div className='absolute inset-0 bg-blue-900/90' />{" "}
				{/* Fallback color */}
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
				<div className='relative z-10 text-center px-4'>
					<motion.span
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						className='inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold tracking-wider mb-4 border border-orange-500/30 backdrop-blur-sm'
					>
						EVENTS & EXPERIENCES
					</motion.span>
					<motion.h1
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.1 }}
						className='text-5xl md:text-7xl font-bold text-white mb-6'
					>
						Coming Soon
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className='text-blue-100 text-xl max-w-2xl mx-auto'
					>
						We are curating world-class events to connect, inspire,
						and innovate.
					</motion.p>
				</div>
			</div>

			{/* Event List */}
			<div className='max-w-5xl mx-auto px-4 py-24'>
				<div className='space-y-8'>
					{events.map((event, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='bg-white border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:shadow-lg transition-shadow border-gray-100 relative overflow-hidden group'
						>
							<div className='absolute top-0 left-0 w-2 h-full bg-blue-900 group-hover:bg-orange-500 transition-colors' />

							<div className='flex-grow md:pr-8'>
								<div className='flex items-center gap-3 mb-2'>
									<span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>
										{event.type}
									</span>
									<span className='w-1 h-1 bg-gray-300 rounded-full' />
									<span className='text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md'>
										{event.date}
									</span>
								</div>
								<h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors'>
									{event.title}
								</h3>
								<p className='text-gray-600'>{event.desc}</p>
							</div>

							<div className='mt-6 md:mt-0 flex-shrink-0'>
								<button className='px-6 py-3 bg-gray-50 text-gray-900 font-medium rounded-xl group-hover:bg-blue-900 group-hover:text-white transition-all duration-300 transform group-hover:scale-105'>
									Notify Me
								</button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</main>
	);
};

export default Events;
