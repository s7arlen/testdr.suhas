import { Helmet } from 'react-helmet-async';
import { siteSettings } from '../config/siteSettings';

const SITE_NAME = siteSettings.name;
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80';
const DEFAULT_DESCRIPTION = `Dr. Suhas S Kumar is a Consultant General & Laparoscopic Surgeon in Bengaluru, specialising in hernia, gallbladder, thyroid, breast and emergency surgery.`;

/**
 * SEO - Enterprise SEO component using react-helmet-async.
 * Manages dynamic <head> tags per page: title, meta, OG, Twitter, JSON-LD.
 *
 * @param {string}   title       - Page title (appended with | Site Name)
 * @param {string}   description - Meta description for this page
 * @param {string}   image       - OG/Twitter image URL
 * @param {string}   pathname    - Route pathname for canonical URL
 * @param {object[]} schema      - Array of JSON-LD schema objects
 * @param {string}   robots      - Robots meta directive
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  pathname = '/',
  schema = [],
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Consultant Surgeon in Bengaluru`;
  const canonicalUrl = `${siteSettings.siteUrl}${pathname !== '/' ? `/#${pathname}` : ''}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {schema.map((entry, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
