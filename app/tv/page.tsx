"use client";

import { motion } from "framer-motion";

const TV = () => {
	const youtubeLink =
		"https://www.youtube.com/embed?listType=user_uploads&list=thisisunetwork"; // Fallback attempt for channel embed without ID
	// Since channel ID is unknown for legacy embed, we'll try a direct link or just clean UI.
	// User link: https://youtube.com/@thisisunetwork?si=hX6BILYUiKCAgKkv
	// Channel handle: @thisisunetwork

	return (
		<main className='min-h-screen bg-black text-white pt-24 pb-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className='text-center mb-12'
				>
					<span className='text-red-600 font-bold tracking-widest uppercase text-sm'>
						B360 Group TV
					</span>
					<h1 className='text-4xl md:text-6xl font-black mt-2 mb-6'>
						Watch Our Latest{" "}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500'>
							Content
						</span>
					</h1>
					<p className='text-gray-400 text-lg max-w-2xl mx-auto'>
						Exploring the frontiers of business, technology, and
						innovation across Africa and the world.
					</p>
				</motion.div>

				{/* Video Stage */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2 }}
					className='relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl shadow-red-900/20 border border-gray-800'
				>
					{/* Placeholder for Channel Embed - using iframe to channel page or specific video if available */}
					{/* Since we don't have a specific video ID, we will link to the channel or use a placeholder UI */}
					<iframe
						className='w-full h-full'
						src='https://www.youtube.com/embed/videoseries?si=hX6BILYUiKCAgKkv&list=UUqWSaQd4uIcwj4_N-l5pE5g' // Trying upload playlist for channel if possible. Often UU + channelId works.
						// But we don't have channel ID.
						// Let's just use a direct CTA and a clean placeholder if strict embed fails.
						// Actually, let's just use a nice UI that links out if embed is tricky without API key.
						// Or try to embed the user provided link in a way that works? No, typical channel link doesn't embed in iframe directly due to X-Frame-Options.
						// We will place a "featured" placeholder video or a static image that links to the channel.
						title='B360 TV'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
					{/* Note: The src above is a guess (UU...). If it fails, it shows unavailable. 
                        Safer bet: Embed a static "Tune In" visual that links to the channel.
                     */}
					<div className='absolute inset-0 flex items-center justify-center bg-black/80 z-20 pointer-events-none'>
						<div className='text-center'>
							<p className='text-gray-300 mb-4'>
								Click below to visit our channel
							</p>
						</div>
					</div>
					<div className='absolute inset-0 z-30 flex items-center justify-center pointer-events-auto'>
						<a
							href='https://youtube.com/@thisisunetwork?si=hX6BILYUiKCAgKkv'
							target='_blank'
							rel='noopener noreferrer'
							className='group flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all transform hover:scale-105'
						>
							<svg
								className='w-8 h-8 fill-current'
								viewBox='0 0 24 24'
							>
								<path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
							</svg>
							Visit Our YouTube Channel
						</a>
					</div>
				</motion.div>

				{/* Grid of "Recent" (Static Placeholders for visual structure) */}
				<div className='mt-16'>
					<h3 className='text-2xl font-bold mb-8 border-l-4 border-red-600 pl-4'>
						Featured Categories
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{[
							"Business Insights",
							"Tech Reviews",
							"Event Highlights",
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className='bg-gray-900 rounded-xl overflow-hidden group cursor-pointer'
							>
								<div className='h-48 bg-gray-800 relative flex items-center justify-center group-hover:bg-gray-700 transition-colors'>
									<svg
										className='w-12 h-12 text-gray-600 group-hover:text-red-500 transition-colors'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={1.5}
											d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={1.5}
											d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
								<div className='p-4'>
									<h4 className='font-bold text-lg'>{item}</h4>
									<p className='text-gray-500 text-sm mt-2'>
										Watch the latest updates in {item.toLowerCase()}.
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default TV;
