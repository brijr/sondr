import Image from 'next/image';
import Link from 'next/link';
import LogoCrimson from '@/public/sondr_logo_crimson.svg';

const links = [
	{
		name: 'Services',
		href: '#services'
	},
	{
		name: 'Community',
		href: '#community'
	},
	{
		name: 'Contact',
		href: '#contact'
	},
	// {
	// 	name: 'Blog',
	// 	href: '/blog'
	// }
];

export default function Nav() {
	return (
		<header aria-label="Site Header" className="shadow-sm backdrop-blur-md z-50">
			<div className="mx-auto max-w-screen-xl p-4">
				<div className="flex items-center justify-between gap-4 lg:gap-10">
					<div className="flex lg:w-0 lg:flex-1">
						<a href="#">
							<span className="sr-only">Sondr | Digital Marketing for Healthcare</span>
							<span className="inline-block w-32">
								<Image src={LogoCrimson} alt="Sondr Logo"></Image>
							</span>
						</a>
					</div>

					<nav aria-label="Site Nav" className="hidden sticky top-0 gap-8 text-md font-medium z-20 md:flex">
						{links.map((link) => (
							<a
								key={link.name}
								className="text-zinc-700 hover:border-t-2 hover:border-red-900 hover:-mb-2 p-1 transition-all"
								href={link.href}
							>
								{link.name}
							</a>
						))}
					</nav>

					<div className="flex-1 items-center justify-end gap-4 sm:flex">
						<Link
							className="rounded-lg bg-amber-500 hover:bg-amber-400 transition-all px-5 py-2 text-md font-medium text-white"
							href="/contact"
						>
							Get Started
						</Link>
					</div>

					<div className="lg:hidden">
						<button className="rounded-lg bg-gray-100 p-2 text-gray-600" type="button">
							<span className="sr-only">Open menu</span>
							<svg
								aria-hidden="true"
								className="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4 6h16M4 12h16M4 18h16"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
