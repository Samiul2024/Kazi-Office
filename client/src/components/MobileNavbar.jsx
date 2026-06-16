import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function MobileNavbar() {

const [open,setOpen] = useState(false);

const links = [
{ name:"Home", path:"/" },
{ name:"About", path:"/about" },
{ name:"Services", path:"/services" },
{ name:"Appointment", path:"/appointment" },
{ name:"Contact", path:"/contact" }
];

return (
<>
<div className="md:hidden">

<button
onClick={()=>setOpen(!open)}
className="text-3xl"
>
{open ? <HiX /> : <HiMenuAlt3 />}
</button>

</div>

{
open && (

<div className="absolute left-0 top-16 w-full bg-white shadow-xl z-50 md:hidden">

<div className="flex flex-col p-5 gap-5">

{
links.map(link=>(
<Link
key={link.name}
to={link.path}
onClick={()=>setOpen(false)}
>
{link.name}
</Link>
))
}

</div>

</div>

)
}
</>
);
}
