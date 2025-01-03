import Link from 'next/link';
import React from 'react';
import data from '../content/projects/project-list.json';
import { Navigation } from '../components/Navigation';
import { Card } from '../components/Card';

export default async function ProjectsPage() {
	const projects = [];
	projects.push(data.projects);

	return (
		<div className="relative pb-16">
			<Navigation />
			<main className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Projects</h1>
					<p className="mt-4 text-zinc-400">
						Some of the projects are freelance work and some are on my own time.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					{projects[0].map((project) => (
						<Card key={project.slug}>
							<Link href={`/projects/${project.slug}`}>
								<article className="relative w-full h-full p-4 md:p-8">
									<div className="flex items-center justify-between gap-2">
										<div className="text-xs text-zinc-100">
											{project.date ? (
												<time dateTime={new Date(project.date).toISOString()}>
													{Intl.DateTimeFormat(undefined, {
														dateStyle: 'medium',
													}).format(new Date(project.date))}
												</time>
											) : (
												<span>Ongoing</span>
											)}
										</div>
									</div>

									<h2
										id="featured-post"
										className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
									>
										{project.title}
									</h2>
									<p className="mt-4 font-semibold leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300 mb-7">
										{project.description}
									</p>
									<div className="absolute bottom-4 md:bottom-8">
										<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
											Read more <span aria-hidden="true">&rarr;</span>
										</p>
									</div>
								</article>
							</Link>
						</Card>
					))}
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />
			</main>
		</div>
	);
}
