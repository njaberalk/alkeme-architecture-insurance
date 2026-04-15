import HomeContent from './HomeContent';

export const metadata = {
  title: 'Architecture Firm Insurance Solutions',
  description: 'ALKEME Insurance Services provides specialized insurance for architecture firms, including professional liability (E&O), general liability, cyber coverage, and more for design professionals nationwide.',
  openGraph: {
    title: 'Architecture Insurance | ALKEME Insurance Services',
    description: 'Specialized insurance for architecture firms, design professionals, and engineering practices across all 50 states.',
    url: 'https://alkemeins.com/architecture/',
  },
};

export default function HomePage() {
  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'ALKEME Insurance Services',
            url: 'https://alkemeins.com',
            telephone: '+18559255363',
            email: 'info@alkemeins.com',
            description: 'ALKEME Insurance Services provides specialized insurance solutions for architecture firms, design professionals, and engineering practices across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: {
              '@type': 'Organization',
              name: 'ALKEME Insurance Services',
              url: 'https://alkemeins.com',
            },
            foundingDate: '2003',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
            knowsAbout: ['Architecture Insurance', 'Professional Liability', 'Design Professional E&O', 'Construction Defect Coverage'],
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'Licensed Insurance Brokerage' },
            serviceType: [
              'Architecture Firm Insurance',
              'Professional Liability (E&O)',
              'Design Professional Insurance',
              'General Liability',
              'Cyber Liability',
              'Commercial Property Insurance',
              'Project-Specific Insurance',
            ],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Architecture Firm Insurance' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What insurance does an architecture firm need?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At minimum, most architecture firms need professional liability (E&O), general liability, and workers\' compensation. Depending on your practice, you may also need commercial property, cyber liability, commercial auto, umbrella coverage, and employment practices liability. We help you identify exactly what your firm requires based on your project types, firm size, and contractual obligations.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you work with firms of all sizes?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We work with sole practitioners running a one-person studio as well as large multi-office firms with hundreds of employees. Our coverage programs are scaled and customized to match the size and complexity of each practice.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you help with contract and COI requirements?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. We understand the insurance requirements that project owners, developers, and general contractors impose on design firms. We can help ensure your certificates of insurance, additional insured endorsements, and policy provisions align with your contractual obligations.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can I get a quote?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In most cases, we can provide an initial quote within 24 to 48 hours of receiving your completed information. For more complex accounts or large firms, the process may take slightly longer to ensure we explore the best options across our carrier network.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer professional liability and general liability?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Professional liability protects against claims of design errors and omissions, while general liability covers third-party bodily injury and property damage. Both are essential for architecture firms, and we tailor each policy to your specific practice type and project exposure.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can coverage be customized for my practice?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every program we place is built around your specific practice. We consider your project types, firm size, revenue, claims history, and business goals to design a program that provides the right coverage at a competitive price — not a generic package.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Architecture Firm Insurance Solutions',
            datePublished: '2025-06-01',
            dateModified: '2026-04-01',
            author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
