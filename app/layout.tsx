import './globals.css';

export const metadata = {
	title: 'Sondr | Digital Marketing for Healthcare',
	description:
		'Sondr is a digital marketing agency that helps healthcare organizations grow their business online.',
	keywords: ['Digital Marketing', 'Assisted Living', 'Hospice', 'Home Care'],
	openGraph: {
		title: 'Sondr | Digital Marketing for Healthcare',
		description:
			'Sondr is a digital marketing agency that helps healthcare organizations grow their business online.',
		url: 'https://sondrmarketing.com',
		siteName: 'Sondr | Digital Marketing for Healthcare',
		images: [
			{
				url: '/og.jpg',
				width: 629,
				height: 324
			}
		],
		locale: 'en-US',
		type: 'website'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="scroll-smooth" lang="en">
			<body>{children}</body>
		</html>
	);
}
