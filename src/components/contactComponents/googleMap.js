
// GoogleMap.jsx
export function GoogleMap({ address = "12+Palm+Ave+Victoria+Island+Lagos" }) {
// The address is URL encoded for the embed src. Replace with your clinic address.
const src = `https://www.google.com/maps?q=${address}&output=embed`;
return (
<div className="rounded-xl overflow-hidden shadow-md h-64 sm:h-80 mt-10">
<iframe
title="Clinic location"
src={src}
className="w-full h-full border-0"
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
/>
</div>
);
}