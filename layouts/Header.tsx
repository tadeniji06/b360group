"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { logo } from "@/assets";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	const navLinks = [
		{ name: "Home", href: "/", icon: "lucide:home" },
		{
			name: "Publications",
			href: "/publications",
			icon: "lucide:book-open",
		},
		{ name: "TV", href: "/tv", icon: "lucide:tv" },
		{ name: "Events", href: "/events", icon: "lucide:calendar" },
		{ name: "About Us", href: "/about", icon: "lucide:info" },
		{ name: "Services", href: "/services", icon: "lucide:briefcase" },
	];

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					scrolled ? "bg-main shadow-lg py-3" : "bg-main/95 py-4"
				} text-white`}
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center'>
						{/* Logo */}
						<Link
							href='/'
							className='flex-shrink-0 relative z-50 flex items-center gap-2'
						>
							<div className='bg-white/10 p-2 rounded-lg backdrop-blur-sm'>
								<Image
									src={logo}
									alt='B360 Group'
									width={180}
									height={50}
									className='w-28 sm:w-36 h-auto brightness-0 invert'
								/>
							</div>
						</Link>

						{/* Desktop Navigation */}
						<nav className='hidden lg:flex items-center space-x-6'>
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className={`group flex items-center space-x-2 text-sm font-medium transition-all px-3 py-2 rounded-full hover:bg-white/10 ${
										pathname === link.href
											? "text-orange-400 bg-white/5"
											: "text-gray-200 hover:text-white"
									}`}
								>
									<Icon
										icon={link.icon}
										className={`w-4 h-4 transition-transform group-hover:scale-110 ${pathname === link.href ? "text-orange-400" : "text-gray-400 group-hover:text-white"}`}
									/>
									<span>{link.name}</span>
								</Link>
							))}

							<div className='h-6 w-px bg-white/20 mx-2' />

							<button className='bg-white text-main px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2'>
								<Icon icon='lucide:phone-call' className='w-4 h-4' />
								Book Consultation
							</button>
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='lg:hidden relative z-50 p-2 text-white focus:outline-none bg-white/10 rounded-lg hover:bg-white/20 transition-colors'
						>
							<div className='w-6 h-5 flex flex-col justify-between'>
								<span
									className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
										isOpen ? "rotate-45 translate-y-2.5" : ""
									}`}
								/>
								<span
									className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
										isOpen ? "opacity-0" : ""
									}`}
								/>
								<span
									className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
										isOpen ? "-rotate-45 -translate-y-2" : ""
									}`}
								/>
							</div>
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Navigation Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{
							type: "spring",
							damping: 25,
							stiffness: 200,
						}}
						className='fixed inset-0 z-40 bg-main pt-28 px-6 pb-6 lg:hidden flex flex-col h-screen border-l border-white/10'
					>
						{/* Background Decoration */}
						<div className='absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10' />

						<nav className='flex flex-col space-y-2'>
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className={`flex items-center space-x-4 p-4 rounded-xl transition-all ${
										pathname === link.href
											? "bg-white/15 text-orange-400"
											: "text-white hover:bg-white/5"
									}`}
								>
									<div
										className={`p-2 rounded-lg ${pathname === link.href ? "bg-orange-500/20" : "bg-white/5"}`}
									>
										<Icon icon={link.icon} className='w-6 h-6' />
									</div>
									<span className='text-lg font-medium'>
										{link.name}
									</span>
								</Link>
							))}

							<div className='pt-8 mt-auto'>
								<button className='w-full bg-white text-main py-4 rounded-xl text-lg font-bold shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform'>
									<Icon
										icon='lucide:calendar-check'
										className='w-5 h-5'
									/>
									Book Consultation
								</button>
							</div>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
