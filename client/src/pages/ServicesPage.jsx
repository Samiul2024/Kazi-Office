import { services } from "../data/siteData";

export default function ServicesPage() {
  return (
  <section className="py-24">
  
  <div className="max-w-7xl mx-auto px-4">
  
  <h2 className="text-4xl font-bold text-center mb-12">
  সেবা সমূহ
  </h2>
  
  <div className="grid md:grid-cols-3 gap-8">
  
  {services.map(service=>(
  <div key={service.title} className="border rounded-xl p-8 shadow-sm hover:shadow-lg transition">
  
  <h3 className="text-xl font-bold mb-4">
  {service.title}
  </h3>
  
  <p>
  {service.description}
  </p>
  
  </div>
  ))}
  
  </div>
  
  </div>
  
  </section>
  );
  }
  