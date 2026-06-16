export default function ServicesPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 py-20">

      <h1 className="text-5xl font-bold mb-8">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border p-6 rounded-xl">
          Muslim Marriage Registration
        </div>

        <div className="border p-6 rounded-xl">
          Hindu Marriage Registration
        </div>

        <div className="border p-6 rounded-xl">
          Certificate Reissue
        </div>

      </div>

    </div>
  );
}
