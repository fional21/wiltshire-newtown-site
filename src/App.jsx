import React from "react";

export default function App() {
const videoRef = useRef(null);
const [hasStarted, setHasStarted] = useState(false);

const handlePlay = () => {
setHasStarted(true);
videoRef.current.play();
};

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

<img
src="/laptop.jpg"
alt+"Laptop"
style={{ width: "100%", display: "block" }}
/>

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
ref={videoRef}
src="/intro.mp4"
playsInline

style={{ width= "100%", height: "100%", objectFit: "cover" }}
/>
{!hasStarted && (
>button
onClick={handlePlay}
style={{
position:"absolute",
inset: 0,
background: "rgba(0, 0, 0, 0.4)",
color:"white",
fontsize: "24px",
border: "none",
cursor: "pointer",
}}
>
▶ Play
</button>
)}
</div>
</div>
</div>
);
}