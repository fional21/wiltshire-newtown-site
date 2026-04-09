import React from "react";

export default function App() {
return (
<div 
style={{ 
background: "#eee", 
minHeight: "100vh", 
paddingTop: "80px", 
textAlign: "center",
}}
>
<h1>UI rebuild</h1>

<div 
style={{ 
maxWidth: "900px", 
margin: "40px auto", 
position: "relative" 
}}
>
<img
src="/laptop.jpg"
alt="Laptop"
style={{ width: "100%, display: "block" }}
/>
</div>
</div>
);
}