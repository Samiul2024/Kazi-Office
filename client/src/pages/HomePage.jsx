import SEO from "../components/SEO";
import FloatingButtons from "../components/FloatingButtons";

import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";
import ServicesSection from "../sections/ServicesSection";
import DocumentsSection from "../sections/DocumentsSection";
import BusinessInfoSection from "../sections/BusinessInfoSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import GallerySection from "../sections/GallerySection";
import LocationSection from "../sections/LocationSection";
import FaqSection from "../sections/FaqSection";
import CTASection from "../sections/CTASection";
import FloatingContactHub from "../components/FloatingContactHub";
import ScrollToTopButton from "../components/ScrollToTopButton";
import SocialShareBar from "../components/SocialShareBar";



export default function HomePage() {
    return (
        <>
            <SEO
                title="Kazi Office Boyra | Marriage Registration Khulna"
                description="Marriage registration services in Boyra Khulna for Muslim and Hindu communities."
            />

            <HeroSection />

            <StatsSection />

            <ServicesSection />

            <DocumentsSection />

            <BusinessInfoSection />

            <GallerySection />

            <TestimonialsSection />

            <LocationSection />

            <FaqSection />

            <CTASection />

            <FloatingButtons />

            <SocialShareBar />

            <FloatingContactHub />

            <ScrollToTopButton />

        </>
    );
}
