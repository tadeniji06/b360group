import Image from "next/image";
import { goal } from "@/assets";

const Goal = () => {
	return (
		<section className='bg-white py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
				{/* Image */}
				<div className='relative w-full h-96 lg:h-[520px] rounded-2xl overflow-hidden shadow-lg'>
					<Image
						src={goal}
						alt='Group of professionals networking'
						fill
						className='object-cover'
						priority
					/>
				</div>

				{/* Text */}
				<div>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight'>
						Four Brands, One Goal,<br />
						One Voice, One Company
					</h2>
					<p className='text-gray-700 text-lg leading-relaxed max-w-xl'>
						From business growth to technology, urban development, and
						exploration, we believe true progress lies in connecting these
						diverse fields. Through these connections, we create opportunities,
						drive innovation, and build a stronger future together.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Goal;
