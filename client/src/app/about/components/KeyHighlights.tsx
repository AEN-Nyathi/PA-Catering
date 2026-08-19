import React from 'react';
import { IoBusiness, IoPricetag, IoCalendar } from 'react-icons/io5';
import Section from '@/components/ui/layout/Section';

const KeyHighlights = () => {
	return (
		<Section tittle='Why Choose Us' Icon={IoBusiness}>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				<article className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-amber-500/30 transition-all duration-500">
					<div className="flex items-center gap-4 mb-6"><div className="p-3 rounded-full bg-amber-500/10 text-amber-500"><IoBusiness className="text-2xl" /></div><h3 className="text-lg font-bold text-white font-small-caps tracking-wide">Premium Eatery & Photo Experience</h3></div>
					<p className='text-white/60 leading-relaxed font-light'>PA Luxe Creation is a premium destination combining a quality eatery, signature Kotas and a modern 360° Photo Booth and photoshoot experience.</p>
				</article>
				<article className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-amber-500/30 transition-all duration-500">
					<div className="flex items-center gap-4 mb-6"><div className="p-3 rounded-full bg-amber-500/10 text-amber-500"><IoPricetag className="text-2xl" /></div><h3 className="text-lg font-bold text-white font-small-caps tracking-wide">Competitive Value</h3></div>
					<p className='text-white/60 leading-relaxed font-light'>We combine premium service quality with accessible pricing, making great food and memorable photography experiences easier to enjoy.</p>
				</article>
				<article className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-amber-500/30 transition-all duration-500">
					<div className="flex items-center gap-4 mb-6"><div className="p-3 rounded-full bg-amber-500/10 text-amber-500"><IoCalendar className="text-2xl" /></div><h3 className="text-lg font-bold text-white font-small-caps tracking-wide">Seamless Experience</h3></div>
					<p className='text-white/60 leading-relaxed font-light'>Our digital booking and customer systems are designed to provide a smooth experience from ordering and reservations through to memorable photo experiences.</p>
				</article>
			</div>
		</Section>
	);
};

export default KeyHighlights;
