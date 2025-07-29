import Image from "next/image";
import { cas, mobil, may, jac, vedura } from "@/assets";

const logos = [mobil, vedura, jac, cas, may];

const Service = () => {
	return (
		<section className='bg-gray-400 py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Logos Section */}
				<h3 className='text-2xl font-semibold text-black text-center mb-2'>
					Brands We’ve Served
				</h3>
				<p className='text-sm text-gray-700 text-center mb-10'>
					Trusted by leading brands across industries
				</p>

				<div className='flex flex-wrap justify-center items-center gap-10'>
					{logos.map((logo, idx) => (
						<Image
							key={idx}
							src={logo}
							alt={`Brand logo ${idx}`}
							width={100}
							height={60}
							className='h-auto object-contain transition duration-300 ease-in-out'
						/>
					))}
				</div>

				{/* CTA Section */}
				<div className='mt-20 bg-gray-50 rounded-xl p-10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left'>
					<h4 className='text-lg font-semibold text-gray-800 mb-4 sm:mb-0'>
						Ready to expand your business?
					</h4>
					<a
						href='#contact'
						className='inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium'
					>
						Contact Us
						<svg
							className='w-4 h-4'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M17 8l4 4m0 0l-4 4m4-4H3'
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Service;
