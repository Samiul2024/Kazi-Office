export default function LocationSection() {
return (
<section className="bg-slate-100 py-24">

<div className="max-w-7xl mx-auto px-4">

<h2 className="text-4xl font-bold text-center mb-12">
Find Us
</h2>

<div className="rounded-xl overflow-hidden shadow-lg">

<iframe
title="location"
className="w-full h-[450px]"
loading="lazy"
allowFullScreen
src="https://maps.google.com/maps?q=boyra%20khulna&t=&z=13&ie=UTF8&iwloc=&output=embed"
/>

</div>

</div>

</section>
);
}
