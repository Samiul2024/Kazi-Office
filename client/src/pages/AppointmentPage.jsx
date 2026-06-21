import SEO from "../components/SEO";

export default function AppointmentPage() {
return (
<>
<SEO
title="Appointment | Kazi Office Boyra | কাজী অফিস খুলনা"
description="Book marriage registration consultation."
/>

<div className="max-w-4xl mx-auto px-4 py-24">

<h1 className="text-5xl font-bold mb-8">
Book Appointment
</h1>

<form className="space-y-5">

<input
placeholder="Full Name"
className="w-full border p-4 rounded-xl"
/>

<input
placeholder="Phone Number"
className="w-full border p-4 rounded-xl"
/>

<input
type="date"
className="w-full border p-4 rounded-xl"
/>

<select
className="w-full border p-4 rounded-xl"
>
<option>Muslim Marriage Registration</option>
<option>Hindu Marriage Registration</option>
<option>Certificate Assistance</option>
</select>

<button
className="bg-green-700 text-white px-8 py-3 rounded-xl"
>
Request Appointment
</button>

</form>

</div>
</>
);
}
