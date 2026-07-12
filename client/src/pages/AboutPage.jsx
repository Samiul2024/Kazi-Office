import BusinessInfoSection from "../sections/BusinessInfoSection";
import StatsSection from "../sections/StatsSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen  max-w-7xl mx-auto px-4 py-20">
      <div className="text-center">

        <h1 className="text-5xl font-bold mb-8">
          About Us
        </h1>
        <h2 className="text-3xl font-bold mb-4">
          কাজী অফিস খুলনা
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          Serving marriage registration needs in Boyra, Khulna with professionalism and integrity.
        </p>

      </div>
      <div>

        <BusinessInfoSection />
        <StatsSection />
      </div>
    </div>

  );
}
