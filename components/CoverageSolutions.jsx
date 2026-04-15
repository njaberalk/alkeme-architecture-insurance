'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coverages = [
  { title: 'Professional Liability (E&O)', slug: 'professional-liability', desc: 'Protects against claims of design errors, omissions, and professional negligence arising from your architecture services.' },
  { title: 'General Liability', slug: 'general-liability', desc: 'Covers third-party bodily injury, property damage, and personal injury claims at your office and project sites.' },
  { title: 'Workers\' Compensation', slug: 'workers-compensation', desc: 'Provides wage replacement and medical benefits to employees injured in the course of their work duties.' },
  { title: 'Commercial Property', slug: 'commercial-property', desc: 'Protects your office, equipment, models, drawings, and business personal property against damage and loss.' },
  { title: 'Cyber Liability', slug: 'cyber-liability', desc: 'Covers data breaches, ransomware attacks, and technology-related liability from BIM models and digital files.' },
  { title: 'Commercial Auto', slug: 'commercial-auto', desc: 'Liability and physical damage coverage for vehicles used for site visits, client meetings, and transporting materials.' },
  { title: 'Umbrella / Excess Liability', slug: 'umbrella-excess', desc: 'Extends the limits of your underlying liability policies for catastrophic claims and contractual requirements.' },
  { title: 'Employment Practices Liability', slug: 'employment-practices', desc: 'Covers claims of wrongful termination, discrimination, harassment, and wage disputes from employees.' },
  { title: 'Project-Specific Insurance', slug: 'project-specific', desc: 'Dedicated professional liability coverage for individual high-value, complex, or high-risk design projects.' },
  { title: 'Valuable Papers & Records', slug: 'valuable-papers', desc: 'Covers the cost of recreating lost or damaged architectural drawings, plans, and project documentation.' },
];

export default function CoverageSolutions() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="coverage" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Coverage Solutions</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Comprehensive Coverage for Every Practice</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>From professional liability to cyber protection, we provide the coverage lines that keep your architecture firm protected and compliant.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {coverages.map((item) => (
            <Link key={item.title} href={`/coverage/${item.slug}/`} className="block border-2 border-ash/30 rounded-[2rem] p-8 group no-underline" style={{ background: 'rgba(255,255,255,0.04)', transition: 'all 0.24s' }}>
              <h3 className="text-stone font-bold mb-3 group-hover:text-gold" style={{ fontSize: '1.25rem', lineHeight: '1.5', transition: 'color 0.24s' }}>{item.title}</h3>
              <p className="text-cream font-light" style={{ fontSize: '0.85rem', lineHeight: '22px' }}>{item.desc}</p>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.16em] mt-4 inline-block opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.24s' }}>Learn More →</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand no-underline" style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>
            Discuss Your Coverage Needs
          </Link>
        </div>
      </div>
    </section>
  );
}
