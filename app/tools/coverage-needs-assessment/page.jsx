import CoverageNeedsAssessmentContent from './CoverageNeedsAssessmentContent';

export const metadata = {
  title: 'Coverage Needs Assessment for Architecture Firms',
  description: 'Find out exactly what insurance coverage your architecture firm needs. Select your practice type and firm size to see recommended coverages, limits, and costs.',
  alternates: {
    canonical: 'https://alkemeins.com/architecture/tools/coverage-needs-assessment/',
  },
  openGraph: {
    title: 'Coverage Needs Assessment | ALKEME Insurance Services',
    description: 'Interactive tool to determine your architecture firm insurance requirements based on practice type and firm size.',
    url: 'https://alkemeins.com/architecture/tools/coverage-needs-assessment/',
    type: 'website',
  },
};

export default function CoverageNeedsAssessmentPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Coverage Needs Assessment for Architecture Firms',
      url: 'https://alkemeins.com/architecture/tools/coverage-needs-assessment/',
      applicationCategory: 'BusinessApplication',
      provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: 'Interactive tool to determine insurance requirements for architecture firms by practice type and firm size.',
    },
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <CoverageNeedsAssessmentContent />
    </>
  );
}
