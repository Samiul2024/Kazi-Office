export default function SectionTitle({
title,
subtitle=""
}) {
return (
<div className="text-center mb-12">

<h2 className="text-4xl md:text-5xl font-bold">
{title}
</h2>

{subtitle && (
<p className="mt-4 text-slate-600">
{subtitle}
</p>
)}

</div>
);
}
