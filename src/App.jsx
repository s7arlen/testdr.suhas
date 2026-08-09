import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { LoadingFallback } from './components/common';
import { NotFound } from './components/common';
import SEO from './components/SEO';

/**
 * Route-level code splitting with React.lazy.
 * Each page is a separate JS chunk, loaded only when navigated to.
 * This dramatically reduces initial bundle size and improves LCP.
 */
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The requested page could not be found."
        pathname="/404"
        robots="noindex,nofollow"
      />
      <NotFound />
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
