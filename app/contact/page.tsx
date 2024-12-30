'use client';
import { Mail, User, Code } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';

const socials = [
	{
		icon: <User size={20} />,
		href: 'https://www.linkedin.com/in/nicholas-kane-chicago/',
		label: 'LinkedIn',
		handle: 'Nicholas Kane',
	},
	{
		icon: <Mail size={20} />,
		href: 'mailto:nkane312@gmail.com',
		label: 'Email',
		handle: 'nkane312@gmail.com',
	},
	{
		icon: <Code size={20} />,
		href: 'https://github.com/nkane312',
		label: 'Github',
		handle: 'nkane312',
	},
];

export default function Contact() {
	return (
		<div className="bg-gradient-to-tl from-slate-950 via-slate-900 to-slate-950">
			<Navigation />
			<main className="min-h-screen px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Contact</h1>
				</div>
				<div className="w-full h-px bg-zinc-800" />
				<div className="container flex items-center justify-center  px-4 mx-auto">
					<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
						{socials.map((s) => (
							<Card key={s.handle}>
								<Link
									href={s.href}
									target="_blank"
									className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-8"
								>
									{/* <span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/> */}
									<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
										{s.icon}
									</span>{' '}
									<div className="z-10 flex flex-col items-center">
										<span className="lg:text-xl font-normal duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
											{s.handle}
										</span>
										<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
											{s.label}
										</span>
									</div>
								</Link>
							</Card>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
