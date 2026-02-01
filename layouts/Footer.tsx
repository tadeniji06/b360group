import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { b360 } from "@/assets";
import { brands, socials } from "@/utils/data";

const Footer = () => {
	return (
		<div className='bg-main text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12'>
				{/* Main Footer Content */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8'>
					{/* Company Info Section */}
					<div className='lg:col-span-2'>
						<div className='mb-6'>
							<Image
								width={120}
								height={30}
								alt='B360 Logo'
								src={b360}
								className='w-20 h-auto mb-4'
							/>
						</div>
						<p className='text-gray-300 text-sm leading-relaxed mb-6 max-w-md'>
							B360 Group is a collection of brands committed to
							redefining Africa's business landscape through
							innovation, strategy, and execution.
						</p>

						{/* Social Icons */}
						<div className='flex space-x-4'>
							{socials.map((social, index) => (
								<a
									key={index}
									href={social.link}
									target='_blank'
									rel='noopener noreferrer'
									className='w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors'
								>
									<Icon icon={social.icon} className='w-4 h-4' />
								</a>
							))}
						</div>
					</div>

					{/* Contact Information Section */}
					<div>
						<h3 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>
							Contact Info
						</h3>
						<div className='space-y-4'>
							{/* Lagos Office */}
							<div className='text-sm'>
								<div className='flex items-start space-x-2 mb-2'>
									<Icon
										icon='mdi:map-marker'
										className='w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0'
									/>
									<div>
										<p className='text-gray-300 leading-relaxed'>
											426a Oluwadamilola Fasade Str,
											<br />
											Omole Phase 1, Lagos
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										icon='mdi:phone'
										className='w-4 h-4 text-gray-300'
									/>
									<a
										href='tel:+2348064968725'
										className='text-gray-300 hover:text-white transition-colors'
									>
										+234 806 496 8725
									</a>
								</div>
							</div>

							{/* Nairobi Office */}
							<div className='text-sm'>
								<div className='flex items-start space-x-2 mb-2'>
									<Icon
										icon='mdi:map-marker'
										className='w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0'
									/>
									<div>
										<p className='text-gray-300 leading-relaxed'>
											132, Manyani East Road,
											<br />
											Lavington Nairobi
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										icon='mdi:phone'
										className='w-4 h-4 text-gray-300'
									/>
									<a
										href='tel:+254726505002'
										className='text-gray-300 hover:text-white transition-colors'
									>
										+254 726 505 002
									</a>
								</div>
							</div>

							{/* Johannesburg Office */}
							<div className='text-sm'>
								<div className='flex items-start space-x-2 mb-2'>
									<Icon
										icon='mdi:map-marker'
										className='w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0'
									/>
									<div>
										<p className='text-gray-300 leading-relaxed'>
											24A Loots Road,
											<br />
											Blairgowrie Randburg, 2194
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										icon='mdi:phone'
										className='w-4 h-4 text-gray-300'
									/>
									<a
										href='tel:+27656946477'
										className='text-gray-300 hover:text-white transition-colors'
									>
										+27 656 946 477
									</a>
								</div>
							</div>

							{/* Email */}
							<div className='text-sm'>
								<div className='flex items-center space-x-2'>
									<Icon
										icon='mdi:email'
										className='w-4 h-4 text-gray-300'
									/>
									<a
										href='mailto:damilola@m360solutionsgroup.com'
										className='text-gray-300 hover:text-white transition-colors'
									>
										damilola@m360solutionsgroup.com
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Brands Section */}
					<div>
						<h3 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>
							Brands
						</h3>
						<ul className='space-y-3'>
							{brands.map((brand, index) => (
								<li key={index}>
									<a
										href={brand.link}
										target='_blank'
										rel='noopener noreferrer'
										className='text-gray-300 hover:text-white transition-colors text-sm'
									>
										{brand.title}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Support Section */}
					<div>
						<h3 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>
							Support
						</h3>
						<ul className='space-y-3'>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors text-sm'
								>
									Help
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors text-sm'
								>
									Send Feedback
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-300 hover:text-white transition-colors text-sm'
								>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Contact Form Section */}
				<div className='mb-8'>
					<h3 className='text-white font-semibold mb-4 text-sm uppercase tracking-wider'>
						Got Questions For Us?
					</h3>
					<div className='max-w-md'>
						<div className='space-y-3'>
							<input
								type='email'
								placeholder='Email'
								className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all'
							/>
							<div className='relative'>
								<textarea
									placeholder='Enter Message'
									rows={4}
									className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all resize-none'
								/>
								<button className='absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors'>
									<Icon
										icon='mdi:send'
										className='w-4 h-4 text-main'
									/>
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='border-t border-white/10 pt-6'>
					<div className='flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
						<p className='text-gray-400 text-xs'>
							© 2025 Business Suite (B360). All rights reserved
						</p>
						<div className='text-gray-400'>
							<span className='text-2xl font-bold opacity-20'>
								TheB360Group
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
