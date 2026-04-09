
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewTownExperience() {
  const [route, setRoute] = useState("loading");
  const [videoToPlay, setVideoToPlay] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(false);
      setRoute("home");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const goToExplore = () => setRoute("explore");

  const playVideo = (file) => {
    setVideoToPlay(file);
    setRoute("video");
  };

  const returnToExplore = () => {
    setVideoToPlay(null);
    setRoute("explore");
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal overflow-hidden">
      <AnimatePresence mode="wait">

        {/* LOADING */}
        {route === "loading" && (
          <motion.div
            key="loading"
            {...fade}
            className="flex flex-col items-center justify-center h-screen space-y-6"
          >
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-main-green border-opacity-75"></div>
            <p className="text-xl font-medium opacity-80">
              Loading Wiltshire New Town…
            </p>
          </motion.div>
        )}

        {/* HOME */}
        {route === "home" && (
          <motion.div key="home" {...fade} className="relative min-h-screen overflow-hidden">

            {/* Fixed black bar */}
            <div className="fixed top-0 left-0 right-0 h-20 bg-black z-20 flex items-center justify-center">
              <div className="flex items-center space-x-10">
                <img src="/logo1.png" alt="Logo 1" className="h-10" />
                <img src="/logo2.png" alt="Logo 2" className="h-10" />
              </div>
            </div>

            {/* Laptop background */}
            <div className="relative w-full pt-20 aspect-[3/2]">
              <img
                src="/laptop.jpg"
                alt="Laptop on desk"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Video inside laptop screen */}
            
<div
  className="absolute"
  style={{
    top: "32%",
    left: "22%",
    width: "56%",
    height: "28%",
  }}
>

                <motion.video
                  ref={(video) => {
                    if (video && isPlaying) {
                      video.play();
                    }
                  }}
                  src="/intro.mp4"
                  className="w-full h-full object-cover rounded-sm"
                  playsInline
                  onEnded={goToExplore}
                />

                {!isPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="bg-white text-charcoal px-8 py-4 rounded-full text-lg font-semibold shadow hover:bg-cream transition"
                    >
                      ▶ Play vision film
                    </button>

                    <button
                      onClick={goToExplore}
                      className="mt-4 text-white underline text-sm hover:text-cream"
                    >
                      Skip intro
                    </button>
                  </div>
                )}
              </div>

              {/* Caption */}
              <p className="absolute bottom-16 left-1/2 -translate-x-1/2 text-lg bg-white/70 px-6 py-3 rounded text-center max-w-xl">
                A short film introducing the vision for a new, sustainable town in Wiltshire.
              </p>
            </div>
          </motion.div>
        )}

        {/* EXPLORE */}
        {route === "explore" && (
          <motion.div key="explore" {...fade} className="flex flex-col items-center p-10 text-center space-y-10">
            <h2 className="text-5xl font-bold text-main-green">Explore the Vision</h2>
            <p className="text-lg max-w-2xl opacity-90">
              Select an area to learn more about the future of Wiltshire’s New Town.
            </p>

            <div className="relative w-full max-w-5xl">
              <img
                src="/concept-image.jpg"
                alt="Concept"
                className="rounded-xl shadow-xl w-full border border-soft-green"
              />

              <button className="absolute top-10 left-10 bg-main-green text-white px-6 py-3 rounded-full shadow" onClick={() => playVideo("transport.mp4")}>
                Transport
              </button>

              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-blue text-white px-6 py-3 rounded-full shadow" onClick={() => playVideo("greenspaces.mp4")}>
                Green Spaces
              </button>

              <button className="absolute bottom-10 right-10 bg-main-green text-white px-6 py-3 rounded-full shadow" onClick={() => playVideo("housing.mp4")}>
                Housing
              </button>

              <button className="absolute top-1/4 right-1/3 bg-accent-blue text-white px-6 py-3 rounded-full shadow" onClick={() => playVideo("towncentre.mp4")}>
                Town Centre
              </button>

              <button className="absolute bottom-1/4 left-1/3 bg-main-green text-white px-6 py-3 rounded-full shadow" onClick={() => playVideo("mobilityhub.mp4")}>
                Mobility Hub
              </button>
            </div>
          </motion.div>
        )}

        {/* VIDEO */}
        {route === "video" && (
          <motion.div key="video" {...fade} className="flex flex-col items-center p-10 space-y-10 text-center">
            <video
              src={`/${videoToPlay}`}
              className="w-full max-w-5xl rounded-xl shadow-xl border border-main-green"
              autoPlay
              onEnded={returnToExplore}
            />
            <button
              onClick={returnToExplore}
              className="px-8 py-4 bg-charcoal text-white rounded-full shadow hover:bg-main-green transition text-lg"
            >
              Back to Overview
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
``
