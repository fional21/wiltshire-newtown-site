import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export default function NewTownExperience() {
  const [route, setRoute] = useState("loading");
  const [videoToPlay, setVideoToPlay] = useState(null);
  useEffect(() => { const timer = setTimeout(() => setRoute("home"), 2500); return () => clearTimeout(timer); }, []);
  const fade = { initial:{opacity:0}, animate:{opacity:1}, exit:{opacity:0} };
  const goToExplore = () => setRoute("explore");
  const playVideo = (file) => { setVideoToPlay(file); setRoute("video"); };
  const returnToExplore = () => { setVideoToPlay(null); setRoute("explore"); };
  return (<div className='min-h-screen bg-cream text-charcoal overflow-hidden'>
    <AnimatePresence mode='wait'>
      {route==='loading' && (<motion.div key='loading' {...fade} className='flex flex-col items-center justify-center h-screen space-y-6'>
        <div className='animate-spin rounded-full h-24 w-24 border-t-4 border-main-green border-opacity-75'></div>
        <p className='text-xl font-medium text-charcoal opacity-80'>Loading Wiltshire New Town…</p>
      </motion.div>)}
      {route==='home' && (<motion.div key='home' {...fade} className='flex flex-col items-center justify-center p-12 space-y-10 text-center'>
        <div className='flex space-x-10 items-center'>
          <img src='/logo1.png' alt='Logo 1' className='h-24'/>
          <img src='/logo2.png' alt='Logo 2' className='h-24'/>
        </div>
        <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className='text-6xl font-extrabold tracking-tight text-main-green'>Wiltshire Council New Town</motion.h1>
        <p className='text-2xl text-charcoal max-w-3xl leading-relaxed opacity-90'>Creation of a beautifully designed new town in Wiltshire, blending sustainability, community and timeless design into a vibrant, thriving & healthy place.</p> 
<motion.video
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  src="/intro.mp4"
  className="w-full max-w-4xl rounded-xl shadow-xl border border-soft-green"
  controls
  playsInline
  onEnded={goToExplore}
/>
``
      </motion.div>)}
      {route==='explore' && (<motion.div key='explore' {...fade} className='flex flex-col items-center p-10 text-center space-y-10'>
        <h2 className='text-5xl font-bold text-main-green'>Explore the Vision</h2>
        <p className='text-lg text-charcoal max-w-2xl opacity-90'>Select an area to learn more about the future of Wiltshire’s New Town.</p>
        <div className='relative w-full max-w-5xl'>
          <img src='/concept-image.jpg' className='rounded-xl shadow-xl w-full border border-soft-green'/>
          <button className='absolute top-10 left-10 bg-main-green text-white px-6 py-3 rounded-full shadow hover:bg-charcoal transition' onClick={()=>playVideo('transport.mp4')}>Transport</button>
          <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-blue text-white px-6 py-3 rounded-full shadow hover:bg-charcoal transition' onClick={()=>playVideo('greenspaces.mp4')}>Green Spaces</button>
          <button className='absolute bottom-10 right-10 bg-main-green text-white px-6 py-3 rounded-full shadow hover:bg-charcoal transition' onClick={()=>playVideo('housing.mp4')}>Housing</button>
          <button className='absolute top-1/4 right-1/3 bg-accent-blue text-white px-6 py-3 rounded-full shadow hover:bg-charcoal transition' onClick={()=>playVideo('towncentre.mp4')}>Town Centre</button>
          <button className='absolute bottom-1/4 left-1/3 bg-main-green text-white px-6 py-3 rounded-full shadow hover:bg-charcoal transition' onClick={()=>playVideo('mobilityhub.mp4')}>Mobility Hub</button>
        </div>
      </motion.div>)}
      {route==='video' && (<motion.div key='video' {...fade} className='flex flex-col items-center p-10 space-y-10 text-center'>
        <video src={`/${videoToPlay}`} className='w-full max-w-5xl rounded-xl shadow-xl border border-main-green' autoPlay onEnded={returnToExplore}/>
        <button onClick={returnToExplore} className='px-8 py-4 bg-charcoal text-white rounded-full shadow hover:bg-main-green transition text-lg'>Back to Overview</button>
      </motion.div>)}
    </AnimatePresence>
  </div>);
}

