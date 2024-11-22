import feature1 from '@/assets/uploads/feature2.jpg';
import feature3 from '@/assets/uploads/feature3.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceMedia() {
	return (
		<div className=" flex gap-2">
			<div className="hidden md:flex w-80 h-fit">
				<img src="/images/brand.webp" alt="" />
			</div>
			<div className="space-y-4">
				<h1 className=" text-3xl md:text-5xl font-medium text-tertiary font-oswald">
					Media Production{' '}
				</h1>
				<p>
					We bring stories to life through dynamic, impactful visual and audio
					content that sparks change. Our media production services include:
				</p>
				<div className=" pt-8 space-y-8">
					<div className="flex flex-col gap-2">
						<Link className=" hover:underline" href={'/works'}>
							<h4 className="text-xl md:text-2xl font-normal font-oswald">
								Documentaries and Short Films
							</h4>
						</Link>
						<p className=" md:w-[80%]">
							Powerful storytelling through documentaries that highlight social
							impact and drive change.
						</p>
						<div>
							<div className="grid md:grid-cols-2 gap-6">
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={feature1}
										alt="Feature Images"
										className=" object-cover w-full h-48 md:h-80 bg-center"
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={feature3}
										alt="Feature Images"
										className=" object-cover w-full h-48 md:h-80 bg-center"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl md:text-2xl font-normal font-oswald">
							Photography
						</h4>
						<p className=" md:w-[80%]">
							Capturing moments that tell a story, whether it’s for advocacy
							campaigns, documentaries or brand narratives.
						</p>
						<div>
							<div className="grid md:grid-cols-2 gap-6">
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={feature1}
										alt="Feature Images"
										className=" object-cover w-full h-48 md:h-80 bg-center"
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={feature3}
										alt="Feature Images"
										className=" object-cover w-full h-48 md:h-80 bg-center"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h4 className="text-xl md:text-2xl font-normal font-oswald">
							Podcast Production
						</h4>
						<p className=" md:w-[80%]">
							Creating engaging podcasts that give a voice to your cause,
							facilitating meaningful conversations.
						</p>
						<div>
							<div className="grid md:grid-cols-2 gap-6">
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={feature1}
										alt="Feature Images"
										className=" object-cover w-full h-48 md:h-80 bg-center"
									/>
								</div>
								<div className=" w-full max-w-sm overflow-hidden h-48 md:h-80">
									<Image
										src={feature3}
										alt="Feature Images"
										className=" object-cover w-full h-48 md:h-80 bg-center"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}