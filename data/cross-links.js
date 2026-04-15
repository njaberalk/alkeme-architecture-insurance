// Cross-linking maps for dense internal linking
// Coverage → which industries commonly need this coverage
export const coverageToIndustries = {
  'professional-liability': ['residential-architecture', 'commercial-architecture', 'healthcare-design', 'structural-engineering'],
  'general-liability': ['residential-architecture', 'commercial-architecture', 'landscape-architecture', 'interior-design'],
  'workers-compensation': ['commercial-architecture', 'landscape-architecture', 'structural-engineering', 'historic-preservation'],
  'commercial-property': ['interior-design', 'commercial-architecture', 'residential-architecture'],
  'cyber-liability': ['commercial-architecture', 'healthcare-design', 'urban-planning', 'sustainable-design'],
  'commercial-auto': ['landscape-architecture', 'residential-architecture', 'urban-planning'],
  'umbrella-excess': ['commercial-architecture', 'healthcare-design', 'structural-engineering', 'educational-design'],
  'employment-practices': ['commercial-architecture', 'interior-design', 'urban-planning'],
  'project-specific': ['commercial-architecture', 'healthcare-design', 'structural-engineering', 'educational-design'],
  'valuable-papers': ['historic-preservation', 'interior-design', 'residential-architecture'],
};

// Coverage → which resources are most relevant
export const coverageToResources = {
  'professional-liability': ['professional-liability-guide', 'architecture-insurance-cost', 'contract-risk-transfer'],
  'general-liability': ['certificate-of-insurance-guide', 'architecture-insurance-cost'],
  'workers-compensation': ['architecture-insurance-cost', 'architecture-insurance-glossary'],
  'commercial-property': ['architecture-insurance-cost', 'architecture-insurance-glossary'],
  'cyber-liability': ['bim-technology-liability', 'architecture-insurance-cost'],
  'commercial-auto': ['architecture-insurance-cost', 'architecture-insurance-glossary'],
  'umbrella-excess': ['architecture-insurance-cost', 'contract-risk-transfer'],
  'employment-practices': ['architecture-insurance-cost', 'architecture-insurance-glossary'],
  'project-specific': ['project-specific-insurance-guide', 'professional-liability-guide'],
  'valuable-papers': ['architecture-insurance-cost', 'bim-technology-liability'],
};

// Industry → top states for that industry
export const industryToStates = {
  'residential-architecture': ['california', 'new-york', 'florida', 'texas', 'colorado'],
  'commercial-architecture': ['new-york', 'california', 'texas', 'illinois', 'georgia'],
  'landscape-architecture': ['california', 'florida', 'texas', 'washington', 'colorado'],
  'interior-design': ['new-york', 'california', 'florida', 'texas', 'illinois'],
  'urban-planning': ['california', 'new-york', 'texas', 'massachusetts', 'washington'],
  'structural-engineering': ['california', 'new-york', 'texas', 'illinois', 'florida'],
  'sustainable-design': ['california', 'washington', 'colorado', 'massachusetts', 'new-york'],
  'historic-preservation': ['new-york', 'massachusetts', 'pennsylvania', 'virginia', 'illinois'],
  'healthcare-design': ['california', 'texas', 'new-york', 'florida', 'pennsylvania'],
  'educational-design': ['california', 'texas', 'new-york', 'florida', 'illinois'],
};

// Industry → relevant resources
export const industryToResources = {
  'residential-architecture': ['architecture-insurance-cost', 'professional-liability-guide', 'contract-risk-transfer'],
  'commercial-architecture': ['architecture-insurance-cost', 'project-specific-insurance-guide', 'contract-risk-transfer'],
  'landscape-architecture': ['architecture-insurance-cost', 'professional-liability-guide', 'certificate-of-insurance-guide'],
  'interior-design': ['architecture-insurance-cost', 'professional-liability-guide', 'architecture-insurance-glossary'],
  'urban-planning': ['architecture-insurance-cost', 'professional-liability-guide', 'contract-risk-transfer'],
  'structural-engineering': ['architecture-insurance-cost', 'project-specific-insurance-guide', 'architecture-claims-guide'],
  'sustainable-design': ['bim-technology-liability', 'professional-liability-guide', 'architecture-insurance-cost'],
  'historic-preservation': ['architecture-insurance-cost', 'professional-liability-guide', 'contract-risk-transfer'],
  'healthcare-design': ['project-specific-insurance-guide', 'architecture-insurance-cost', 'contract-risk-transfer'],
  'educational-design': ['architecture-insurance-cost', 'certificate-of-insurance-guide', 'contract-risk-transfer'],
};
