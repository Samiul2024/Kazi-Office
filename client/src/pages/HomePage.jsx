const services = [
  {
    title: "Muslim Marriage Registration",
    description:
      "Official registration and certificate processing."
  },
  {
    title: "Hindu Marriage Registration",
    description:
      "Registration support and legal documentation."
  },
  {
    title: "Certificate Reissue",
    description:
      "Lost or damaged certificate assistance."
  }
];

const faqs = [
  {
    q: "What documents are required?",
    a: "NID, photographs and necessary supporting documents."
  },
  {
    q: "How long does registration take?",
    a: "Usually completed according to legal requirements and document readiness."
  },
  {
    q: "Can both Muslim and Hindu marriages be registered?",
    a: "Yes."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-28">

          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl">
            Trusted Marriage Registration Services in Boyra, Khulna
          </h1>

          <p className="mt-6 text-lg max-w-2xl">
            Official marriage registration support for Muslim and Hindu communities.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="tel:+8801XXXXXXXXX"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold"
            >
              Call Now
            </a>

            <a
              href="#services"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Explore Services
            </a>
          </div>

        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-4 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item) => (
            <div
              key={item.title}
              className="border rounded-xl p-6 shadow-sm"
            >
              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Registration Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              Submit Documents
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Verification
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Registration
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Certificate Delivery
            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border rounded-xl">
            Experienced Service
          </div>

          <div className="p-6 border rounded-xl">
            Legal Documentation
          </div>

          <div className="p-6 border rounded-xl">
            Trusted Registration Process
          </div>

        </div>

      </section>

      <section className="bg-slate-50 py-20">

        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            {faqs.map((item) => (
              <div
                key={item.q}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-bold mb-2">
                  {item.q}
                </h3>

                <p>{item.a}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="bg-green-700 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl font-bold mb-6">
            Need Marriage Registration Assistance?
          </h2>

          <p>
            Contact Kazi Office Boyra today.
          </p>

        </div>

      </section>

      <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </>
  );
}
