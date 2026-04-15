'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const segments = [
  { name: 'Residential Architecture', slug: 'residential-architecture', desc: 'Custom homes, renovations, and multi-family' },
  { name: 'Commercial Architecture', slug: 'commercial-architecture', desc: 'Office, retail, and mixed-use developments' },
  { name: 'Landscape Architecture', slug: 'landscape-architecture', desc: 'Site design, grading, and stormwater systems' },
  { name: 'Interior Design', slug: 'interior-design', desc: 'Space planning and material specification' },
  { name: 'Urban Planning', slug: 'urban-planning', desc: 'Master planning and community design' },
  { name: 'Structural Engineering', slug: 'structural-engineering', desc: 'Structural design and forensic engineering' },
  { name: 'Sustainable Design', slug: 'sustainable-design', desc: 'LEED, net-zero, and green building' },
  { name: 'Historic Preservation', slug: 'historic-preservation', desc: 'Restoration and adaptive reuse' },
  { name: 'Healthcare Design', slug: 'healthcare-design', desc: 'Hospitals, clinics, and medical facilities' },
  { name: 'Educational Design', slug: 'educational-design', desc: 'K-12 schools and university buildings' },
];

export default function WhoWeServe() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="who-we-serve" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Industries Served</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Coverage for Every Design Discipline</h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>We serve architecture and design firms across all practice areas — from sole practitioners to large multi-office firms.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 stagger-children">
          {segments.map((seg) => (
            <Link key={seg.name} href={`/industries/${seg.slug}/`} className="group border-2 border-ash rounded-[2rem] p-6 text-center bg-white/40 no-underline block" style={{ transition: 'all 0.24s' }}>
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold" style={{ transition: 'all 0.24s' }}>
                <svg className="w-6 h-6 text-stone group-hover:text-brand" style={{ transition: 'color 0.24s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-brand font-bold mb-1" style={{ fontSize: '0.9rem' }}>{seg.name}</h3>
              <p className="text-brand/60" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>{seg.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
