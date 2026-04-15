export const verticalConfig = {
  id: 'architecture', label: 'Architecture Insurance',
  heading: 'Get an Architecture Insurance Quote',
  subtext: 'Answer a few quick questions and our design professional specialists will build coverage for your firm.',
  businessTypes: [
    { value: 'residential', label: 'Residential Architecture' },
    { value: 'commercial', label: 'Commercial Architecture' },
    { value: 'landscape', label: 'Landscape Architecture' },
    { value: 'interior', label: 'Interior Design' },
    { value: 'multi-discipline', label: 'Multi-Discipline' },
    { value: 'engineering', label: 'Structural Engineering' },
  ],
  customQuestions: [
    { id: 'practice_type', label: 'What type of practice?', type: 'select', options: ['Residential', 'Commercial', 'Landscape', 'Interior Design', 'Multi-discipline'] },
    { id: 'firm_size', label: 'Firm size?', type: 'select', options: ['Solo', '2-10', '11-25', '26-50', '50+'] },
    { id: 'billings', label: 'Annual billings?', type: 'select', options: ['Under $500K', '$500K-$2M', '$2M-$5M', '$5M+'] },
  ],
  coverageOptions: ['Professional Liability (E&O)', 'General Liability', 'Workers\' Compensation', 'Commercial Property', 'Cyber Liability', 'Commercial Auto', 'Umbrella / Excess', 'Employment Practices', 'Project-Specific', 'Valuable Papers'],
};
