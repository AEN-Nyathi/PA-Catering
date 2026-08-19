import Section from '@/components/ui/layout/Section';
import { IoRocketOutline } from 'react-icons/io5';

const MilestonesAndVision: React.FC = () => {
	const milestones = [
		{ year: '2024', title: 'Inception', desc: 'PA Luxe Creation PTY Ltd established, bringing together a premium eatery and modern customer experiences.' },
		{ year: '2025', title: 'Expansion', desc: 'Expanded into a flagship facility in Evander and introduced the 360° Photo Booth experience.' },
	];

	return (
		<Section heading='Our journey began with a vision to transform everyday convenience in Evander through quality food, photography and innovation.' tittle='Milestones & Future Vision'>
			<div className="flex flex-col md:flex-row gap-16 md:gap-24">
				<div className="w-full md:w-1/2 relative">
					<div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 md:left-1/2"></div>
					<div className="space-y-12">
						{milestones.map((m, i) => (
							<div key={i} className={`relative flex items-center md:justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
								<div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 md:left-1/2"></div>
								<div className="pl-20 md:pl-0 md:w-[42%]"><span className="text-amber-500 font-bold font-mono text-lg mb-1 block">{m.year}</span><h3 className="text-white text-xl font-bold font-small-caps">{m.title}</h3><p className="text-white/60 text-sm mt-2">{m.desc}</p></div>
							</div>
						))}
					</div>
				</div>
				<div className="w-full md:w-1/2 flex items-center">
					<div className='p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm relative overflow-hidden group'>
						<IoRocketOutline className="text-4xl text-amber-500 mb-6" />
						<h3 className="text-2xl font-bold text-white font-small-caps mb-4">Our Future Horizon</h3>
						<p className='text-white/80 leading-relaxed font-light'>Our vision is to become Evander&apos;s premier destination for premium food, photography and 360° Photo Booth experiences, driven by innovation, quality and community trust.</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default MilestonesAndVision;
