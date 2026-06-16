import { useState } from "react";

import {
FaWhatsapp,
FaFacebookF,
FaFacebookMessenger,
FaComments
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContactHub() {

const [open,setOpen] = useState(false);

return (
<div className="fixed bottom-24 right-5 z-50">

<AnimatePresence>

{
open && (

<motion.div

initial={{ opacity:0,y:50 }}
animate={{ opacity:1,y:0 }}
exit={{ opacity:0,y:50 }}

className="flex flex-col gap-3 mb-3"
>

<a
href="https://wa.me/8801700000000"
target="_blank"
className="bg-green-600 text-white p-4 rounded-full shadow-lg"
>
<FaWhatsapp />
</a>

<a
href="https://m.me/yourpage"
target="_blank"
className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
>
<FaFacebookMessenger />
</a>

<a
href="https://facebook.com"
target="_blank"
className="bg-blue-700 text-white p-4 rounded-full shadow-lg"
>
<FaFacebookF />
</a>

</motion.div>

)
}

</AnimatePresence>

<button

onClick={()=>setOpen(!open)}

className="bg-green-700 text-white p-5 rounded-full shadow-xl"
>

<FaComments />

</button>

</div>
);
}
