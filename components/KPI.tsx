const KPI = () => {
	return (
		<section className='bg-gray-50 py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
				{/* Left Text */}
				<div>
					<h3 className='text-2xl font-semibold text-gray-900 mb-4'>
						Our KPIs speak for us
					</h3>
					<p className='text-gray-600 text-base max-w-md'>
						We measure success by the real impact we create for our
						clients, partners, and communities.
					</p>
				</div>

				{/* Right KPIs Grid */}
				<div className='grid grid-cols-2 gap-6'>
					{[
						{ stat: "30+", label: "Projects completed successfully" },
						{ stat: "98%", label: "Client satisfaction rate" },
						{ stat: "20+", label: "Years of experience" },
						{ stat: "10+", label: "Countries served" },
					].map((item, index) => (
						<div
							key={index}
							className='flex flex-col items-center text-center'
						>
							<div className='w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center text-xl font-bold text-black mb-3'>
								{item.stat}
							</div>
							<p className='text-sm text-gray-600 max-w-[8rem]'>
								{item.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default KPI;
