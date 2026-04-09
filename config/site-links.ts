export type SiteLink = {
  label: string;
  href: string;
  description?: string;
};

/** Apex domain; always listed first in the UI sitemap. */
export const siteRoot: SiteLink = {
  label: "ettukube.com",
  href: "https://ettukube.com",
};

/**
 * Subdomains and other absolute URLs to surface in the UI sitemap.
 * Example: { label: "blog", href: "https://blog.ettukube.com" }
 */
export const siteSubdomains: SiteLink[] = [];

export function getSiteLinks(): SiteLink[] {
  return [siteRoot, ...siteSubdomains];
}
