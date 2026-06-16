export default function Button({
children,
href="#",
className=""
}) {
return (
<a
href={href}
className={`inline-flex items-center justify-center px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:scale-105 transition ${className}`}
>
{children}
</a>
);
}
