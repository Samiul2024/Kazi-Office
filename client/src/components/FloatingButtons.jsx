import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
return (
<>
<a
href="tel:+8801714-969697"
className="fixed left-5 bottom-5 z-50 bg-blue-600 text-white p-4 rounded-full shadow-xl"
>
<FaPhone />
</a>

<a
href="https://wa.me/8801714-969697"
target="_blank"
className="fixed right-5 bottom-10 z-50 bg-green-600 text-white p-4 rounded-full shadow-xl"
>
<FaWhatsapp />
</a>
</>
);
}
