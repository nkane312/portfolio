import Link from 'next/link';
import React from 'react';
// import Particles from "./components/particles";

const navigation = [
	{
		name: 'Resume',
		href: '/nicholas-kane-resume.pdf',
		target: '_blank',
	},
	{ name: 'Projects', href: '/projects', target: '_self' },
	{ name: 'Contact', href: '/contact', target: '_self' },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-slate-950 via-slate-900 to-slate-950">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-lg duration-300 text-zinc-400 font-medium hover:text-zinc-200 hover:underline"
							target={item.target}
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			{/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}
			<h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Nick Kane
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-base text-zinc-400 ">Front End Software Engineer.</h2>
			</div>
		</div>
	);
}
