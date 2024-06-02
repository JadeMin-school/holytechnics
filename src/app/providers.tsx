'use client';



export default function Providers(
	{
		children,
	}: Readonly<{
		children: React.ReactNode;
	}>
): JSX.Element {
	return (
		<>
			{ children }
		</>
	);
}