import { Helmet } from "react-helmet-async";

export default function SEO({
title,
description
}) {
return (
<Helmet>

<title>{title}</title>

<meta
name="description"
content={description}
/>

<script type="application/ld+json">
{JSON.stringify({
"@context":"https://schema.org",
"@type":"LocalBusiness",
name:"Kazi Office Boyra",
address:{
"@type":"PostalAddress",
addressLocality:"Khulna",
addressCountry:"Bangladesh"
}
})}
</script>

</Helmet>
);
}
