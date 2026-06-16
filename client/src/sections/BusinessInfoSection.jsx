import { businessInfo } from "../data/businessInfo";

export default function BusinessInfoSection() {
return (
<section className="py-24">

<div className="max-w-7xl mx-auto px-4">

<h2 className="text-4xl font-bold mb-8">
Office Information
</h2>

<div className="grid md:grid-cols-2 gap-10">

<div>

<p className="mb-4">
<b>Office:</b> {businessInfo.name}
</p>

<p className="mb-4">
<b>Location:</b> {businessInfo.location}
</p>

<p className="mb-4">
<b>Phone:</b> {businessInfo.phone}
</p>

<p className="mb-4">
<b>Email:</b> {businessInfo.email}
</p>

</div>

<div>

<h3 className="text-2xl font-bold mb-4">
Services
</h3>

<ul className="space-y-3">

{businessInfo.services.map(service=>(
<li key={service}>
? {service}
</li>
))}

</ul>

</div>

</div>

</div>

</section>
);
}
