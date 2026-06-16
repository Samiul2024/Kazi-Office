import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {

const [visible,setVisible] = useState(false);

useEffect(()=>{

const handleScroll=()=>{
setVisible(window.scrollY > 500);
};

window.addEventListener("scroll",handleScroll);

return ()=>{
window.removeEventListener("scroll",handleScroll);
};

},[]);

if(!visible) return null;

return (
<button

onClick={()=>
window.scrollTo({
top:0,
behavior:"smooth"
})
}

className="fixed bottom-5 left-5 z-50 bg-slate-800 text-white p-4 rounded-full shadow-lg"
>

<FaArrowUp />

</button>
);
}
