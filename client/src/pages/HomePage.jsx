import SEO from "../components/SEO";
import FloatingButtons from "../components/FloatingButtons";

import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import ServicesSection from "../sections/ServicesSection";
import GallerySection from "../sections/GallerySection";
import TestimonialsSection from "../sections/TestimonialsSection";
import LocationSection from "../sections/LocationSection";
import CTASection from "../sections/CTASection";

export default function HomePage() {
return (
<>

<SEO
title="Kazi Office Boyra | Marriage Registration in Khulna"
description="Trusted marriage registration services in Boyra, Khulna."
/>

<HeroSection />

<StatsSection />

<ServicesSection />

<GallerySection />

<TestimonialsSection />

<LocationSection />

<CTASection />

<FloatingButtons />

</>
);
}
