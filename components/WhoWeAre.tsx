const WhoWeAre = () => {
	const services = [
		{
			title: "Marketing Solutions",
			position: "top-left",
		},
		{
			title: "IT Services and solutions",
			position: "top-right",
		},
		{
			title: "Media Production",
			position: "bottom-left",
		},
		{
			title: "Business Expansion Services",
			position: "bottom-right",
		},
	];

	return (
		<div className='py-16 md:py-24 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='mb-16'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
						Who we are
					</h2>
					<p className='text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed'>
						B360 Group is a collection of brands committed to
						redefining Africa's business landscape through innovation,
						strategy, and execution
					</p>
				</div>

				{/* Services Diagram */}
				<div className='flex justify-center'>
					<div className='relative w-full max-w-4xl'>
						{/* Desktop Layout */}
						<div className='hidden md:block'>
							<div className='relative h-96 flex items-center justify-center'>
								{/* Central Circle */}
								<div className='absolute inset-0 flex items-center justify-center'>
									<div className='w-48 h-48 bg-main rounded-full flex items-center justify-center shadow-2xl'>
										<div className='text-center text-white'>
											<div className='text-3xl font-bold mb-1'>
												B360
											</div>
											<div className='text-xl font-medium'>Group</div>
										</div>
									</div>
								</div>

								{/* Service Cards */}
								{/* Marketing Solutions - Top Left */}
								<div className='absolute top-0 left-0 w-64'>
									<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center'>
										<h3 className='text-gray-800 font-semibold text-lg'>
											Marketing Solutions
										</h3>
									</div>
									{/* Connection Line */}
									<div className='absolute top-1/2 left-full w-20 h-px bg-gray-300 transform -translate-y-1/2'></div>
								</div>

								{/* IT Services - Top Right */}
								<div className='absolute top-0 right-0 w-64'>
									<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center'>
										<h3 className='text-gray-800 font-semibold text-lg'>
											IT Services and solutions
										</h3>
									</div>
									{/* Connection Line */}
									<div className='absolute top-1/2 right-full w-20 h-px bg-gray-300 transform -translate-y-1/2'></div>
								</div>

								{/* Media Production - Bottom Left */}
								<div className='absolute bottom-0 left-0 w-64'>
									<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center'>
										<h3 className='text-gray-800 font-semibold text-lg'>
											Media Production
										</h3>
									</div>
									{/* Connection Line */}
									<div className='absolute top-1/2 left-full w-20 h-px bg-gray-300 transform -translate-y-1/2'></div>
								</div>

								{/* Business Expansion - Bottom Right */}
								<div className='absolute bottom-0 right-0 w-64'>
									<div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center'>
										<h3 className='text-gray-800 font-semibold text-lg'>
											Business Expansion Services
										</h3>
									</div>
									{/* Connection Line */}
									<div className='absolute top-1/2 right-full w-20 h-px bg-gray-300 transform -translate-y-1/2'></div>
								</div>
							</div>
						</div>

						{/* Mobile Layout */}
						<div className='md:hidden'>
							<div className='space-y-8'>
								{/* Central Circle */}
								<div className='flex justify-center mb-8'>
									<div className='w-32 h-32 bg-main rounded-full flex items-center justify-center shadow-2xl'>
										<div className='text-center text-white'>
											<div className='text-xl font-bold mb-1'>
												B360
											</div>
											<div className='text-sm font-medium'>Group</div>
										</div>
									</div>
								</div>

								{/* Service Cards - Stacked */}
								<div className='space-y-4'>
									{services.map((service, index) => (
										<div
											key={index}
											className='bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center'
										>
											<h3 className='text-gray-800 font-semibold text-lg'>
												{service.title}
											</h3>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
