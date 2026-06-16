import {
FaFacebookF,
FaWhatsapp,
FaLinkedinIn
} from "react-icons/fa";

export default function SocialShareBar() {

const url = window.location.href;

return (

<div className="flex gap-4 justify-center py-10">

<a
href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
target="_blank"
className="p-3 rounded-full bg-blue-700 text-white"
>
<FaFacebookF />
</a>

<a
href={`https://api.whatsapp.com/send?text=${url}`}
target="_blank"
className="p-3 rounded-full bg-green-600 text-white"
>
<FaWhatsapp />
</a>

<a
href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
target="_blank"
className="p-3 rounded-full bg-blue-500 text-white"
>
<FaLinkedinIn />
</a>

</div>
);
}
