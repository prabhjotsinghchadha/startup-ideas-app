/**
 * Centralized branding configuration
 * Update company name and branding from this single file
 */

export const BRANDING = {
  // Company name and variations
  COMPANY_NAME: 'StartupIdeas',
  COMPANY_DOMAIN: 'StartupIdeas.com',
  COMPANY_SHORT: 'SI',

  // Brand description
  COMPANY_DESCRIPTION:
    'Discover, validate, and launch your next big idea with our curated startup opportunities and comprehensive business insights.',

  // Copyright year (can be updated annually)
  COPYRIGHT_YEAR: '2024',

  // Brand colors (if needed for future use)
  BRAND_COLORS: {
    primary: '#2563eb', // blue-600
    secondary: '#7c3aed' // purple-600
  }
} as const;

// Type for branding config
export type BrandingConfig = typeof BRANDING;
