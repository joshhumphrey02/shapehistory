'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import banner from '@/assets/uploads/feature3.jpg';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';

export function Projects() {
	const cardsRef = useRef<HTMLDivElement[]>([]);

	const addToRefs = (el: any) => {
		if (el && !cardsRef.current.includes(el)) {
			cardsRef.current.push(el);
		}
	};

	useEffect(() => {
		cardsRef.current.forEach((card, index) => {
			gsap.fromTo(
				card,
				{ opacity: 0, y: 80 },
				{
					opacity: 1,
					y: 0,
					duration: 2,
					stagger: 0.6 * index,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: card,
						start: 'top 80%',
						end: 'bottom 20%',
						toggleActions: 'play none none reset',
					},
				}
			);
		});
	}, []);
	const cards = projects.map((card, index) => (
		<Card
			key={card.media.images[0].src}
			card={{
				title: card.name,
				src: card.media.images[0].src,
				des: card.description,
			}}
			index={index}
		/>
	));

	return (
		<div className="w-full pl-4 sm:pl-[8rem] h-full py-10 md:py-20">
			<h2
				ref={addToRefs}
				className="  text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
				OUR WORK (what We Do)
			</h2>
			<Carousel items={cards} />
		</div>
	);
}

const projects = [
	{
		name: 'The IWMI PhotoVoice Research Project',
		organization: 'International Water Management Institute (IWMI)',
		description:
			'At Dinovate Solutions, we are committed to showcasing the profound impact of the International Water Management Institute (IWMI) in addressing water security challenges faced by communities in Adamawa State, Nigeria. The IWMI project has played a pivotal role in highlighting the stark realities faced by these communities grappling with severe water scarcity due to socio-economic and environmental factors. This initiative has empowered community members to voice their experiences, fostering greater global awareness and advocacy. The research, conducted in four different communities in Adamawa State, Nigeria, sheds light on the challenges of accessing clean water and sanitation facilities amid displacement. Collaborating with Dinovate, IWMI facilitated workshops where community members used cameras and media tools to capture compelling images that depict both the challenges and resilience in their daily lives. This project empowered community members to become their own narrators, using cameras to document their water journeys and harsh water realities. The photos serve as poignant reminders of the ongoing struggle and the aspirations for a better future.',
		media: {
			images: [banner],
			links: ['Hyperlink-blog post & Videos'],
		},
	},
	{
		name: 'Phase II- IWMI Photovoice Project',
		organization: 'International Water Management Institute (IWMI)',
		description:
			"Building on the success of the Photovoice Research Project in Adamawa State, Dinovate Solutions elevated the IWMI Photovoice Project in its second phase by creating two impactful storytelling mediums: a three-episode podcast series and a visually compelling photo essay book. These initiatives amplified the voices of fragile and conflict-affected communities, bringing their stories to a broader audience. The podcast series, recorded at Dinovate’s state-of-the-art studio, featured members of the community and an IWMI representative. Through heartfelt conversations, the episodes highlighted personal experiences, challenges, and resilience while weaving in expert perspectives. Complementing this, the photo essay book showcased powerful images captured by community participants, enriched with concise narratives and case studies. Designed for advocacy, the book provided a visually engaging and accessible tool to inspire empathy, awareness, and action among stakeholders and policymakers. Both mediums served as platforms for storytelling and advocacy, reinforcing the project's mission to shed light on water system vulnerabilities in Adamawa State.",
		media: {
			images: [banner],
		},
	},
	{
		name: 'Borderland Documentaries Series',
		organization: 'United Nations Development Programme (UNDP)',
		description:
			"Dinovate Solutions partnered with the UNDP to produce the Borderland Documentary Series, an 11-episode exploration of resilience and innovation in Africa's border communities set in multiple African countries. Each episode highlights unique stories of individuals and communities overcoming challenges through ingenuity, cooperation, and determination. The series aimed to raise awareness, inspire policy change, and promote development by showcasing real voices and authentic experiences. This series effectively supports UNDP’s mission of fostering sustainable development and resilience in Africa’s borderlands.",
		media: {
			video: 'Upload 1 of the trailers here',
			images: [banner],
		},
	},
	{
		name: 'Redesign and Graphical Illustration of the National Standing Order',
		organization: 'Banyan Global',
		description:
			'Elevating Community Health Practices with Dinovate Solutions. Community Health Practitioners (CHPs) play a critical role in rural healthcare, serving as the first point of contact for millions. To bolster their work, the Community Health Practitioners’ Registration Board of Nigeria, in partnership with Banyan Global and the USAID Health Workforce Management Activity, introduced the 2024 revised National Standing Orders. Dinovate Solutions was proud to enhance this essential guide by integrating visually engaging aids that simplify complex medical procedures and conditions. These illustrations not only improve understanding but also promote the practical application of life-saving protocols, ensuring CHPs can deliver high-quality care effectively.',
		keyBenefits: [
			'Enhanced Understanding: Simplifies intricate medical concepts through visuals.',
			'Improved Retention: Combines text and images to strengthen learning.',
			'Practical Application: Provides step-by-step visuals for emergencies and routine care.',
			'Accessibility: Overcomes language barriers with visual content.',
			'Engagement: Encourages frequent use and active referencing.',
		],
		media: {
			images: [banner],
		},
	},
	{
		name: 'Documentary of the Revised National Standing Order',
		organization: 'Banyan Global',
		description:
			'Following the success of the design phase, Dinovate Solutions documented the process that led to the revision and launch of the 2024 revised National Standing Orders, capturing this milestone in an engaging and impactful documentary. The film celebrated the collaborative efforts of Banyan Global, USAID, and the Community Health Practitioners’ Registration Board in revolutionizing healthcare delivery. Through interviews with stakeholders, real-life testimonies from CHPs, and comprehensive event coverage, the documentary showcased the guide’s potential to transform rural healthcare practices. This project highlights Dinovate’s ability to tell powerful stories that inspire change while amplifying the impact of critical healthcare initiatives.',
		media: {
			images: [banner],
			video: 'Upload a trailer to the documentary',
			links: ['Add link to watch the full documentary on YouTube'],
		},
	},
];
