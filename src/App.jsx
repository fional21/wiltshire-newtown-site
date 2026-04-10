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
position: "relative", 
}}
>
{/* Laptop image */}
<img
src="/laptop.jpg"
alt+"Laptop"
style={{ width: "100%", display: "block" }}
/>

{/* Screen overlay */}
<div
style={{
position: "absolute",
top: "32%",
left: "22%",
width: "56%",
height: "36%",
background: "black",
overflow: "hidden",
}}
>
<video
src="/intro.mp4"
autoplay
muted
PlaysInline
style={{ width= "100%", height: "100%", objectFit: "cover" }}
/>
</div>
</div>
</div>
);
}