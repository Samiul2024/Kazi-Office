import { testimonials } from "../data/siteData";

export default function TestimonialsSection() {
return (
<section className="bg-slate-50 py-24">

<div className="max-w-7xl mx-auto px-4">

<h2 className="text-4xl font-bold text-center mb-12">
Client Feedback
</h2>

<div className="grid md:grid-cols-3 gap-8">

{testimonials.map(item=>(
<div key={item.name} className="bg-white rounded-xl p-8 shadow">

<p>"{item.review}"</p>

<h4 className="mt-4 font-bold">
{item.name}
</h4>

</div>
))}

</div>

</div>

</section>
);
}
