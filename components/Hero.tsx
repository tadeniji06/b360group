import Image from "next/image";
import { home } from "@/assets";

const Hero = () => {
	return (
		<div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<Image
					src={home}
					alt='Modern city buildings'
					fill
					className='object-cover'
					priority
				/>
				{/* Dark overlay */}
				<div className='absolute inset-0 bg-black/50'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<h1 className='text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8'>
					A group of companies driving business growth through
					<span className='block mt-2'>
						Strategic Marketing, technology, Business expansion and
					</span>
					<span className='block mt-2'>Content Solutions</span>
				</h1>

				{/* CTA Buttons */}
				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-12'>
					<button className='w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 min-w-[160px]'>
						Contact Us
					</button>
					<button className='w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 min-w-[180px]'>
						Explore Companies
					</button>
				</div>
			</div>

			{/* Optional: Scroll indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
				<div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
					<div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse'></div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
