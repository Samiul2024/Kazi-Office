export default function LocationSection() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Find Us
        </h2>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Kazi Office Khulna"
            className="w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1145.5107420185313!2d89.53102346963026!3d22.834845934705534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9b96c5077dc1%3A0x35b455713eee1e95!2sKazi%20Office%20Khulna!5e1!3m2!1sen!2sus!4v1782040415637!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}