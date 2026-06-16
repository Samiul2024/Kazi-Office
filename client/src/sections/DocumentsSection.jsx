export default function DocumentsSection() {
return (
<section className="bg-slate-50 py-24">

<div className="max-w-7xl mx-auto px-4">

<h2 className="text-4xl font-bold text-center mb-12">
Required Documents
</h2>

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-xl shadow">

<h3 className="font-bold text-xl mb-4">
Muslim Marriage
</h3>

<ul className="space-y-2">
<li>NID Card</li>
<li>Passport Size Photo</li>
<li>Witness Information</li>
<li>Required Legal Documents</li>
</ul>

</div>

<div className="bg-white p-8 rounded-xl shadow">

<h3 className="font-bold text-xl mb-4">
Hindu Marriage
</h3>

<ul className="space-y-2">
<li>NID Card</li>
<li>Photographs</li>
<li>Witness Information</li>
<li>Required Registration Documents</li>
</ul>

</div>

</div>

</div>

</section>
);
}
