import Nav from '@/components/Nav';
import Particles from '@/components/Particles';

import Link from 'next/link';
import Image from 'next/image';

import LogoCrimson from '@/public/sondr_logo_crimson.svg';

import content from '@/stores/content.json';

export default function Home() {
	return (
		<main>
			<Nav />
			{/* Hero Section */}
			<section className="flex justify-center rounded-xl m-4 lg:m-12 relative overflow-hidden">
				<div className="container max-w-screen-xl lg:p-12 p-6 text-white z-10">
					<div className="lg:w-3/4 my-12 flex flex-col gap-12">
						<h1 className="text-6xl">{content.headline}</h1>
						<h3 className="text-4xl font-light">{content.subheadline}</h3>
						<Link
							className="z-50 rounded-lg bg-amber-600 hover:bg-amber-400 text-white w-fit transition-all px-5 py-2 text-md font-medium "
							href="/contact"
						>
							Get Started
						</Link>
					</div>
				</div>
				<div className="bg-[#762030] absolute w-full h-full top-0 -z-50 right-0"></div>
				<Particles />
			</section>
			{/* About Section */}
			<section
				id="about"
				className="flex justify-center rounded-xl m-4 lg:m-12 relative z-10 overflow-hidden"
			>
				<div className="container max-w-screen-xl lg:p-12 p-6 z-10">
					<div className="lg:w-3/4 my-12 flex flex-col gap-12">
						<h2 className="text-3xl">{content.about.headline}</h2>
						<p className="text-2xl border-l-2 border-l-[#AE364C] pl-4">{content.about.p}</p>
					</div>
				</div>
			</section>
			{/* Service Section */}
			<section
				id="services"
				className="bg-[#AE364C] text-white flex justify-center rounded-xl m-4 lg:m-12 relative z-10 overflow-hidden"
			>
				<div className="container max-w-screen-xl lg:p-12 p-6 z-10">
					<div className=" my-12 flex flex-col gap-12">
						<h2 className="text-4xl">{content.serviceSection.headline}</h2>
						<p className="text-2xl">{content.serviceSection.p}</p>
						<div className="grid grid-cols-3 gap-8">
							{content.serviceSection.services.map((service) => (
								<div
									key={service.name}
									className="relative text-neutral-900 block bg-neutral-100 rounded-lg border-t-4 border-amber-400 shadow-xl"
								>
									<img
										className="h-32 w-full object-cover rounded-t-lg"
										src={service.href}
										alt={'Image of' + service.name}
									/>
									<div className="sm:p-6 p-4 lg:p-8">
										<h3 className="text-xl font-semibold">{service.name}</h3>
										<p className="mt-4 font-medium text-gray-500">{service.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<footer aria-label="Site Footer" className="bg-gray-100">
				<div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
					<div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
						<a
							className="inline-block rounded-full bg-red-900 p-2 text-white shadow transition hover:bg-red-700 sm:p-3 lg:p-4"
							href="#"
						>
							<span className="sr-only">Back to top</span>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</div>

					<div className="lg:flex lg:items-end lg:justify-between">
						<div>
							<div className="flex justify-center w-64 lg:justify-start">
								<Image src={LogoCrimson} alt="Sondr Logo"></Image>
							</div>

							<p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
								{content.subheadline}
							</p>
						</div>

					</div>

					<p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
						Copyright &copy; 2022. All rights reserved.
					</p>
				</div>
			</footer>
		</main>
	);
}
