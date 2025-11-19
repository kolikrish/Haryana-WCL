'use client';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BannerComponent from '@/components/BannerComponent';
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

// Video data (single category for now)
const tvCategories = {
  'Best Raids & Tackles of the Season': [
    { 
      video: '/assets/video/vid1.mp4',
      thumbnail: '/assets/video/thumb1.JPG'
    },
    { 
      video: '/assets/video/vid2.mp4',
      thumbnail: '/assets/video/thumb2.JPG'
    },
    { 
      video: '/assets/video/vid3.mp4',
      thumbnail: '/assets/video/thumb3.JPG'
    },
    { 
      video: '/assets/video/vid4.mp4',
      thumbnail: '/assets/video/thumb4.JPG'
    },
    { 
      video: '/assets/video/vid5.mp4',
      thumbnail: '/assets/video/thumb5.JPG'
    },
    { 
      video: '/assets/video/vid6.mp4',
      thumbnail: '/assets/video/thumb6.JPG'
    },
  ],
};

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const videoRefs = useRef({});

  const activeCategory = 'Best Raids & Tackles of the Season';
  const currentVideos = tvCategories[activeCategory];

  // Pause all videos except one
  const pauseAllVideosExcept = (videoId) => {
    Object.entries(videoRefs.current).forEach(([key, video]) => {
      if (key !== videoId && video) {
        video.pause();
      }
    });
  };

  // Video Player Card
  const VideoPlayer = ({ item, index }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(false);
    const [hasError, setHasError] = useState(false);

    const videoId = `${activeCategory}-${index}`;

    // Register video ref on mount/unmount
    useEffect(() => {
      videoRefs.current[videoId] = videoRef.current;
      return () => { delete videoRefs.current[videoId]; };
    }, [videoId]);

    const handlePlayPause = () => {
      if (!videoRef.current) return;
      if (isPlaying) {
        videoRef.current.pause();
        setCurrentlyPlaying(null);
      } else {
        pauseAllVideosExcept(videoId);
        videoRef.current.play().catch(() => setHasError(true));
        setCurrentlyPlaying(videoId);
      }
      setIsPlaying((prev) => !prev);
    };

    const handleMuteToggle = (e) => {
      e.stopPropagation();
      if (!videoRef.current) return;
      videoRef.current.muted = !isMuted;
      setIsMuted((m) => !m);
    };

    // Ensure only one plays
    useEffect(() => {
      if (currentlyPlaying !== videoId && isPlaying) {
        setIsPlaying(false);
      }
    }, [isPlaying, videoId]);

    return (
      <div
        className="relative bg-black rounded-xl shadow-2xl overflow-hidden group aspect-9/16 cursor-pointer"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={item.video}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onClick={handlePlayPause}
          onEnded={() => { setIsPlaying(false); setCurrentlyPlaying(null); }}
          onLoadedData={() => setHasError(false)}
          onError={() => setHasError(true)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => { setIsPlaying(true); setCurrentlyPlaying(videoId); }}
        />

        {/* Error overlay */}
        {hasError && (
          <div className="absolute inset-0 z-30 bg-gray-800 flex items-center justify-center flex-col p-4 text-center">
            <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-300 text-sm">Video unavailable</p>
          </div>
        )}

        {/* Thumbnail overlay (if not playing & no error) */}
        {/* 
          You can import images in Next.js by putting the image in the `public` folder 
          and then referencing it with `/path/to/image.jpg` as the src,
          or by importing static assets (when using the `next/image` component).

          Example with `next/image`:
              import Image from 'next/image';
              import placeholderImg from '/public/my-placeholder.jpg'

          You could use it here like:
              <Image src={placeholderImg} alt="..." ... />

          If you want to use a local static import for the fallback image, 
          first put an image, say `fallback-thumbnail.jpg`, in your `/public` folder.
        */}
        {!isPlaying && !hasError && (
          <div className="absolute inset-0 z-10">
            {/* Example using standard <img> with imported fallback in /public */}
            <Image
              src={item.thumbnail}
              alt={`Video Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              fill
              onError={e => {
                // Use public fallback. E.g. /fallback-thumbnail.jpg (put this in /public)
                e.target.src = '/fallback-thumbnail.jpg';
              }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
          </div>
        )}

        {/* Controls overlay */}
        {!hasError && (showControls || !isPlaying) && (
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-4">
            {/* Top: Mute toggle */}
            <div className="flex justify-end">
              <button
                onClick={handleMuteToggle}
                className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-all"
                tabIndex={-1}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  // Muted Icon
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  // Unmuted Icon
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a9 9 0 010 12m-4.5-9.5L12 3v18l-4.5-4.5H4a1 1 0 01-1-1v-7a1 1 0 011-1h3.5z" />
                  </svg>
                )}
              </button>
            </div>
            {/* Bottom: Play/Pause toggle */}
            <div className="flex justify-center">
              <button
                onClick={e => { e.stopPropagation(); handlePlayPause(); }}
                className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-all"
                tabIndex={-1}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  // Pause Icon
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  // Play Icon
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Skeleton loading
  const SkeletonGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {[...Array(4)].map((_, index) => (
        <div 
          key={index}
          className="bg-gray-200 rounded-xl shadow-xl overflow-hidden aspect-9/16 animate-pulse"
        >
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <div className="text-gray-400">Loading Video...</div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>

      <BannerComponent title={"IWKL - TV"}/>

      {/* Header */}
      <section className=" py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-[Koba] text-black-90 mb-6 md:mb-8">
              Your Official Kabaddi Streaming Hub
            </h1>
            <p className="text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed font-sub">
              Dive into the world of professional kabaddi with IWKL TV. Watch live matches, exclusive 
              interviews, behind-the-scenes content, and the most thrilling moments from the season.
            </p>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="pt-8 pb-24 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <SkeletonGrid />
          ) : currentVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {currentVideos.map((item, index) => (
                <VideoPlayer key={index} item={item} index={index} />
              ))}
            </div>
          ) : (
            <div className="col-span-full py-16 md:py-24 text-center">
              <div className="max-w-2xl mx-auto px-4">
                <div className="mb-8">
                  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-main text-gray-600 mb-4">
                  Videos Coming Soon
                </h3>
                <p className="text-lg text-gray-500 font-sub max-w-md mx-auto">
                  We're currently preparing amazing video content.
                  Check back soon for exciting kabaddi action!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;