// LazyVideo.jsx
import { useEffect, useRef, useState } from 'react';
import '../styles/lazyvideo.css';

export default function LazyVideo({ src }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const playVideo = async () => {
    if (!videoRef.current || !videoRef.current.currentSrc) return;
    
    try {
      if (videoRef.current.networkState === 3) {
        videoRef.current.load();
      }
      await videoRef.current.play();
    } catch (error) {
      console.error('Error al reproducir:', error);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    
    const video = videoRef.current;
    video.load();
    
    const events = {
      loadeddata: () => {
        if (isVisible) playVideo();
      },
      error: (e) => {
        console.error('Error en el video:', e);
      }
    };

    Object.entries(events).forEach(([event, handler]) => {
      video.addEventListener(event, handler);
    });

    return () => {
      Object.entries(events).forEach(([event, handler]) => {
        video.removeEventListener(event, handler);
      });
    };
  }, [isVisible, src]);

  return (
    <div 
      ref={containerRef}
      class="container-ref"
    >
      <video 
        ref={videoRef}
        muted
        loop
        playsInline
        controls
        preload="auto"
        style={{ 
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          backgroundColor: '#000'
        }}
      >
        <source src={src} type="video/quicktime" />
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>
    </div>
  );
}