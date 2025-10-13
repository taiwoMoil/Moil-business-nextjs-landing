/**
 * Utility function to build candidate app URLs with referral parameters
 */

interface UrlParams {
  ref?: string;
  lg?: string;
}

export const buildCandidateUrl = (params: UrlParams = {}): string => {
  const baseUrl = 'https://candidate.moilapp.com/';
  const urlParams = new URLSearchParams();
  
  if (params.ref) {
    urlParams.append('ref', params.ref);
  }
  
  if (params.lg) {
    urlParams.append('lg', params.lg);
  }
  
  const queryString = urlParams.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};

/**
 * Build candidate register URL with referral parameters
 */
export const buildCandidateRegisterUrl = (params: UrlParams = {}): string => {
  const baseUrl = 'https://candidate.moilapp.com/register';
  const urlParams = new URLSearchParams();
  
  if (params.ref) {
    urlParams.append('ref', params.ref);
  }
  
  if (params.lg) {
    urlParams.append('lg', params.lg);
  }
  
  const queryString = urlParams.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
};

/**
 * Opens candidate app URL in a new tab with referral parameters
 */
export const openCandidateApp = (params: UrlParams = {}): void => {
  const url = buildCandidateUrl(params);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Opens candidate register URL in a new tab with referral parameters
 */
export const openCandidateRegister = (params: UrlParams = {}): void => {
  const url = buildCandidateRegisterUrl(params);
  window.open(url, '_blank', 'noopener,noreferrer');
};
