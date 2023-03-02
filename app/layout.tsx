import './globals.css';

export const metadata = {
	title: 'Sondr | Digital Marketing for Healthcare',
	description: 'Sondr is a digital marketing agency that helps healthcare organizations grow their business online.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="scroll-smooth" lang="en">
			<body>{children}</body>
		</html>
	);
}
