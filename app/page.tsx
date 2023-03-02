import Nav from '@/components/Nav';
import Particles from '@/components/Particles';

import Link from 'next/link';

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
						<h3 className="text-2xl">{content.subheadline}</h3>
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
						<p>{content.about.p}</p>
					</div>
				</div>
			</section>
			{/* Service Section */}
			<section
				id="services"
				className="bg-red-900 text-white flex justify-center rounded-xl m-4 lg:m-12 relative z-10 overflow-hidden"
			>
				<div className="container max-w-screen-xl lg:p-12 p-6 z-10">
					<div className=" my-12 flex flex-col gap-12">
						<h2 className="text-3xl">{content.serviceSection.headline}</h2>
						<p>{content.serviceSection.p}</p>
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
		</main>
	);
}
