import Image from "next/image";
import {
	market,
	travel,
	media,
	IT,
	m360,
	e360,
	btech,
	b360,
	sa,
	atb,
	tech,
} from "@/assets";

const Brands = () => {
	const brands = [
		{
			logo: sa,
			title: "Showcase Africa",
			image: media,
			link: "https://showcaseafricaonline.com",
			desc: "Showcase Africa TV is a media production venture that offers high-end video editing, photography, and creative content services.",
			category: "Media Production",
		},
		{
			logo: atb,
			title: "Africa Tech Business",
			image: tech,
			link: "https://africatechbusiness.com",
			desc: `Decoding Africa’s Tech, Business & Innovation Landscape
We analyze Africa’s startup ecosystem, digital markets, business trends, and regulatory shifts — bringing clear, data-backed storytelling to a rapidly growing innovation economy.`,
			category: "Media Production",
		},
		{
			logo: m360,
			title: "M360 Solutions",
			image: market,
			link: "https://m360solutionsgroup.com/",
			desc: "M360 is a marketing solutions company dedicated to helping businesses grow by providing strategic marketing, branding, and digital solutions that drive results.",
			category: "Marketing Solutions",
		},
		{
			logo: btech,
			title: "IT Services and Solutions",
			image: IT,
			link: "https://tech360online.com/",
			desc: "BTech360 is an IT services and solutions company committed to empowering businesses with innovative technology, software development, and digital transformation strategies.",
			category: "IT Services",
		},
		{
			logo: b360,
			title: "Business Expansion Company",
			image: travel,
			link: "https://thisisbusiness360.com/",
			desc: "Business360 is a business expansion company that specializes in creating memorable business and production experiences for individuals and businesses.",
			category: "Business Expansion",
		},
	];

	return (
		<div className='py-16 md:py-24 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-900 mb-4'>
						Our Brands
					</h2>
					<p className='text-gray-600 text-lg max-w-3xl mx-auto'>
						A diverse group of companies driving growth, innovation,
						and impact across industries
					</p>
				</div>

				{/* Brands Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{brands.map((brand, index) => (
						<div
							key={index}
							className='bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col'
						>
							<div className='relative h-52'>
								<Image
									src={brand.image}
									alt={brand.title}
									fill
									className='object-cover'
								/>
								<div className='absolute inset-0 bg-black/40' />
								{brand.logo && (
									<div className='absolute top-4 left-4'>
										<Image
											src={brand.logo}
											alt={`${brand.title} logo`}
											width={120}
											height={40}
											className='h-auto w-auto max-w-[150px]'
										/>
									</div>
								)}
							</div>

							<div className='p-6 flex flex-col justify-between flex-grow'>
								<div>
									<span className='text-sm text-orange-500 font-semibold uppercase tracking-wide'>
										{brand.category}
									</span>
									<h3 className='text-xl font-bold text-gray-900 mt-2 mb-4'>
										{brand.title}
									</h3>
									<p className='text-gray-600 text-sm leading-relaxed'>
										{brand.desc}
									</p>
								</div>

								{brand.link ? (
									<a
										href={brand.link}
										target='_blank'
										rel='noopener noreferrer'
										className='mt-6 inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors'
									>
										Visit Website
										<svg
											className='ml-1 w-4 h-4'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
											/>
										</svg>
									</a>
								) : (
									<span className='mt-6 inline-block text-gray-400 text-sm italic'>
										Website coming soon
									</span>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Brands;
