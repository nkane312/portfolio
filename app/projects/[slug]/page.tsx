import { notFound } from 'next/navigation';
import data from '../../content/projects/project-list.json';
import { Navigation } from '@/app/components/Navigation';
import Image from 'next/image';
import { Suspense } from 'react';

type Params = Promise<{ slug: string }>;

export default async function PostPage({ params }: { params: Params }) {
	const { slug } = await params;

	const projects = [];
	projects.push(data.projects);
	const project = projects[0].find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="min-h-screen">
			<Navigation />
			<main className="relative min-h-screen bg-gradient-to-tl from-slate-950 via-slate-900 to-slate-950">
				<Suspense
					fallback={
						<div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
							Loading...
						</div>
					}
				>
					<div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
						<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
							<div className="mx-auto max-w-2xl lg:mx-0">
								<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
									{project.title}
								</h1>
								<p className="mt-6 text-lg leading-8 text-zinc-300">{project.description}</p>
							</div>

							<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
								<div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
									<a target="_blank" href={`https://github.com/${project.repository}`}>
										GitHub <span aria-hidden="true">→</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-zinc-50 px-4 py-12 mx-auto flex justify-center">
						<Image
							className="rounded-md border border-zinc-200"
							width={800}
							height={800}
							alt={'Screenshot of ' + project.title}
							src={'/images/' + project.slug + '.png'}
						/>
					</div>
				</Suspense>
			</main>
		</div>
	);
}
