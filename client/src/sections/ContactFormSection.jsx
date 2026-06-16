import SectionTitle from "../components/SectionTitle";

export default function ContactFormSection() {
return (
<section className="py-24">

<div className="max-w-3xl mx-auto px-4">

<SectionTitle
title="Send Us A Message"
/>

<form className="space-y-4">

<input
placeholder="Full Name"
className="w-full border p-4 rounded-xl"
/>

<input
placeholder="Phone Number"
className="w-full border p-4 rounded-xl"
/>

<textarea
rows="5"
placeholder="Message"
className="w-full border p-4 rounded-xl"
/>

<button
className="bg-green-700 text-white px-8 py-3 rounded-xl"
>
Submit
</button>

</form>

</div>

</section>
);
}
