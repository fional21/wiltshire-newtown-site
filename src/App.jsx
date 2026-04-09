import { useState, useEffect } from &quot;react&quot;;
import { motion, AnimatePresence } from &quot;framer-motion&quot;;

export default function NewTownExperience() {
  const [route, setRoute] = useState(&quot;loading&quot;);
  const [videoToPlay, setVideoToPlay] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() =&gt; {
    const timer = setTimeout(() =&gt; {
      setIsPlaying(false);
      setRoute(&quot;home&quot;);
    }, 2500);
    return () =&gt; clearTimeout(timer);
  }, []);

  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const goToExplore = () =&gt; setRoute(&quot;explore&quot;);

  const playVideo = (file) =&gt; {
    setVideoToPlay(file);
    setRoute(&quot;video&quot;);
  };

  const returnToExplore = () =&gt; {
    setVideoToPlay(null);
    setRoute(&quot;explore&quot;);

  };

  return (
    &lt;div className=&quot;min-h-screen bg-cream text-charcoal&quot;&gt;
      &lt;AnimatePresence mode=&quot;wait&quot;&gt;

        {/* LOADING */}
        {route === &quot;loading&quot; &amp;&amp; (
          &lt;motion.div
            key=&quot;loading&quot;
            {...fade}
            className=&quot;flex flex-col items-center justify-center h-screen space-y-6&quot;
          &gt;
            &lt;div className=&quot;animate-spin rounded-full h-24 w-24 border-t-4 border-main-green&quot;
/&gt;
            &lt;p className=&quot;text-xl&quot;&gt;Loading Wiltshire New Town…&lt;/p&gt;
          &lt;/motion.div&gt;
        )}

        {/* HOME */}
        {route === &quot;home&quot; &amp;&amp; (
          &lt;motion.div key=&quot;home&quot; {...fade} className=&quot;relative min-h-screen&quot;&gt;

            {/* Header */}
            &lt;div className=&quot;fixed top-0 left-0 right-0 h-20 bg-black z-20 flex items-center justify-
center space-x-10&quot;&gt;
              &lt;img src=&quot;/logo1.png&quot; alt=&quot;Logo 1&quot; className=&quot;h-10&quot; /&gt;
              &lt;img src=&quot;/logo2.png&quot; alt=&quot;Logo 2&quot; className=&quot;h-10&quot; /&gt;
            &lt;/div&gt;

            {/* Laptop */}
            &lt;div className=&quot;relative max-w-6xl mx-auto pt-28&quot;&gt;
              &lt;img

                src=&quot;/laptop.jpg&quot;
                alt=&quot;Laptop on desk&quot;
                className=&quot;w-full h-auto&quot;
              /&gt;

              {/* Screen */}
              &lt;div
                className=&quot;absolute&quot;
                style={{
                  top: &quot;32%&quot;,
                  left: &quot;22%&quot;,
                  width: &quot;56%&quot;,
                  height: &quot;36%&quot;,
                }}
              &gt;
                &lt;motion.video
                  ref={(video) =&gt; video &amp;&amp; isPlaying &amp;&amp; video.play()}
                  src=&quot;/intro.mp4&quot;
                  className=&quot;w-full h-full object-cover rounded-sm&quot;
                  muted
                  playsInline
                  onEnded={goToExplore}
                /&gt;

                {!isPlaying &amp;&amp; (
                  &lt;div className=&quot;absolute inset-0 flex flex-col items-center justify-center bg-
black/40&quot;&gt;
                    &lt;button
                      onClick={() =&gt; setIsPlaying(true)}
                      className=&quot;bg-white px-8 py-4 rounded-full font-semibold&quot;
                    &gt;
                      ▶ Play vision film

                    &lt;/button&gt;
                    &lt;button
                      onClick={goToExplore}
                      className=&quot;mt-4 text-white underline&quot;
                    &gt;
                      Skip intro
                    &lt;/button&gt;
                  &lt;/div&gt;
                )}
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/motion.div&gt;
        )}

        {/* EXPLORE */}
        {route === &quot;explore&quot; &amp;&amp; (
          &lt;motion.div key=&quot;explore&quot; {...fade} className=&quot;p-10 text-center&quot;&gt;
            &lt;h2 className=&quot;text-5xl font-bold&quot;&gt;Explore the Vision&lt;/h2&gt;

            &lt;div className=&quot;relative max-w-5xl mx-auto mt-10&quot;&gt;
              &lt;img
                src=&quot;/concept-image.jpg&quot;
                alt=&quot;Concept image&quot;
                className=&quot;w-full rounded-xl&quot;
              /&gt;
              &lt;button
                className=&quot;absolute top-10 left-10 bg-main-green text-white px-6 py-3 rounded-
full&quot;
                onClick={() =&gt; playVideo(&quot;transport.mp4&quot;)}
              &gt;
                Transport
              &lt;/button&gt;
            &lt;/div&gt;

          &lt;/motion.div&gt;
        )}

        {/* VIDEO */}
        {route === &quot;video&quot; &amp;&amp; (
          &lt;motion.div key=&quot;video&quot; {...fade} className=&quot;p-10 text-center&quot;&gt;
            &lt;video
              src={`/${videoToPlay}`}
              autoPlay
              controls
              className=&quot;w-full max-w-5xl mx-auto&quot;
              onEnded={returnToExplore}
            /&gt;
          &lt;/motion.div&gt;
        )}

      &lt;/AnimatePresence&gt;
    &lt;/div&gt;
  );
}