import { logo } from "@/assets";
import Image from "next/image";

const Header = () => {
	return (
		<div className='sticky top-0 z-50 flex justify-between items-center bg-main p-3 md:p-6'>
			<div className='flex-shrink-0'>
				<Image
					width={250}
					height={60}
					alt='Company logo'
					src={logo}
					className='w-32 h-auto sm:w-40 md:w-52 lg:w-60'
					priority
				/>
			</div>

			<div className='flex-shrink-0'>
				<button className='bg-white py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-5 rounded-lg sm:rounded-xl text-main font-medium text-sm sm:text-base whitespace-nowrap'>
					<span className='hidden sm:inline'>Book Consultation</span>
					<span className='sm:hidden'>Book</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
