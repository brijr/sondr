import './globals.css';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="scroll-smooth" lang="en">
			<body>{children}</body>
		</html>
	);
}
