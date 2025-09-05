import React, { useRef, useState, useEffect } from "react";
import { Twitter, Play, Pause } from "lucide-react";
// @ts-ignore - Using image imports
import titleImage from "../assets/titletext.png";  
// @ts-ignore - Using image imports
import characterMia from "../assets/mia.png";
// @ts-ignore - Using image imports
import characterSia from "../assets/sia.png";
// @ts-ignore - Using image imports
import characterGia from "../assets/gia.png";

function GPUSiteNew() {
  const contractAddress = "95roms6D7e48BHz66JzZLG3ZggnJqsXRcWZVh4aLpump";
  const inputRef = useRef<HTMLInputElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const copyToClipboard = async () => {
    const textToCopy = inputRef.current?.value || contractAddress;
    
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        alert('Text copied to clipboard!');
        return;
      }
      
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          alert('Text copied to clipboard!');
        } else {
          throw new Error('execCommand failed');
        }
      } catch (execError) {
        prompt('Copy this text:', textToCopy);
      } finally {
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      prompt('Copy this text:', textToCopy);
    }
  };

  const buyGPU = () => {
    window.open('https://pump.fun/coin/95roms6D7e48BHz66JzZLG3ZggnJqsXRcWZVh4aLpump', '_blank');
  };

  const openTwitter = () => {
    window.open('https://twitter.com', '_blank');
  };

  const playHoverSound = () => {
    // IMPORTANT: Audio hosting options that WON'T work:
    // ❌ YouTube links (CORS restrictions)
    // ❌ Google Drive links (CORS + authentication issues)
    // ❌ Most cloud storage direct links
    
    // ✅ WORKING audio hosting options:
    // 1. Local files in /public/sounds/ folder (recommended)
    // 2. CDN services like Cloudinary, AWS S3 with public access
    // 3. GitHub raw file links (for small files)
    // 4. Netlify/Vercel static file hosting
    
    // To implement:
    // 1. Download audio from YouTube video: https://www.youtube.com/watch?v=PqIMNE7QBSQ
    // 2. Convert to web format (mp3/ogg/wav)
    // 3. Place in /public/sounds/character-hover.mp3
    // 4. Update audio src to "/sounds/character-hover.mp3"
    
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play().catch(e => {
        console.log('Audio play failed:', e);
        // Fallback: You could show a visual effect instead
      });
    }
  };

  const togglePlayPause = () => {
    if (!isPlayerReady || !iframeRef.current) return;
    
    try {
      if (isPlaying) {
        // Pause the video
        iframeRef.current.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        setIsPlaying(false);
      } else {
        // Play the video
        iframeRef.current.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error controlling YouTube player:', error);
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        if (data.event === 'video-progress') {
          // Player is ready and playing
          setIsPlayerReady(true);
          setIsPlaying(true);
        }
      } catch (error) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Set player as ready after a short delay to ensure iframe loads
    const timer = setTimeout(() => {
      setIsPlayerReady(true);
      setIsPlaying(true); // Start as playing since autoplay=1
    }, 2000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, []);

  const tickerText = "NVIDIA INDEX 6900 ▲ +6900.00";
  const columns = 5;
  
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      
      {/* Hidden YouTube Player */}
      <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/JFtSDf1C_-U?list=PLGqM3xdAg6goegRqGjwKjnj1WVGQZcJVq&enablejsapi=1&autoplay=1&mute=0&loop=1"
        style={{ display: 'none' }}
        allow="autoplay; encrypted-media"
        onLoad={() => setIsPlayerReady(true)}
      />
      
      {/* Hidden Audio Element for Character Hover Sound */}
      {/* 
        AUDIO HOSTING SETUP INSTRUCTIONS:
        
        Google Drive Links DON'T WORK because:
        - CORS restrictions prevent cross-origin audio access
        - Authentication required for file access
        - Content-Type headers not set for direct media playback
        
        RECOMMENDED APPROACH:
        1. Download audio from: https://www.youtube.com/watch?v=PqIMNE7QBSQ
        2. Use online converter to create MP3/OGG formats
        3. Create /public/sounds/ folder in your project
        4. Place files as: /public/sounds/character-hover.mp3
        5. Uncomment the source tags below and update paths
        
        ALTERNATIVE HOSTING OPTIONS:
        - GitHub raw files (for small audio files)
        - Cloudinary (free tier available)
        - AWS S3 with public read access
        - Your hosting provider's static file hosting
      */}
      <audio
        ref={audioRef}
        preload="auto"
        style={{ display: 'none' }}
      >
        {/* Uncomment and update these paths once you host your audio files */}
        {/* <source src="/sounds/character-hover.mp3" type="audio/mpeg" /> */}
        {/* <source src="/sounds/character-hover.ogg" type="audio/ogg" /> */}
        
        {/* Using the UwU sound effect from assets */}
        <source src="../assets/UwU - SOUND EFFECT.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      {/* Play/Pause Button - Top Left */}
      <button 
        className="fixed top-4 left-4 md:top-6 md:left-6 z-20 bg-black border border-white rounded-[12px] p-3 hover:bg-white hover:text-black transition-colors group cursor-pointer disabled:opacity-50"
        onClick={togglePlayPause}
        disabled={!isPlayerReady}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" />
        ) : (
          <Play className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" />
        )}
      </button>
      
      {/* Twitter/X Button - Top Right */}
      <button 
        className="fixed top-4 right-4 md:top-6 md:right-6 z-20 bg-black border border-white rounded-[12px] p-3 hover:bg-white hover:text-black transition-colors group cursor-pointer"
        onClick={openTwitter}
        aria-label="Follow us on X/Twitter"
      >
        <Twitter className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" />
      </button>
      {/* Background Ticker */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: columns }, (_, columnIndex) => {
          const alignmentClass = columnIndex % 3 === 0 ? 'text-left' : columnIndex % 3 === 1 ? 'text-center' : 'text-right';
          const totalItems = 60;
          
          return (
            <div 
              key={`ticker-column-${columnIndex}`}
              className="absolute top-0 h-full px-2 overflow-hidden"
              style={{ 
                left: `${(columnIndex * 100) / columns}%`,
                width: `${100 / columns}%`
              }}
            >
              <div className="ticker-column-scroll">
                {Array.from({ length: totalItems }, (_, i) => (
                  <div 
                    key={`ticker-${columnIndex}-${i}`} 
                    className={`font-['Arial:Italic',_sans-serif] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] text-[rgba(48,143,48,0.4)] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2.5px] uppercase whitespace-nowrap ${alignmentClass} py-3 leading-relaxed`}
                  >
                    {tickerText}
                  </div>
                ))}
                {Array.from({ length: totalItems }, (_, i) => (
                  <div 
                    key={`ticker-dup-${columnIndex}-${i}`} 
                    className={`font-['Arial:Italic',_sans-serif] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] text-[rgba(48,143,48,0.4)] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2.5px] uppercase whitespace-nowrap ${alignmentClass} py-3 leading-relaxed`}
                  >
                    {tickerText}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-16">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-center justify-center max-w-[800px] w-full">
          
          {/* GPU Branding */}
          <div className="flex flex-col gap-6 md:gap-8 items-center justify-center w-full max-w-[728px] mx-auto px-4">
            <div 
              className="aspect-[728/170] bg-[47.26%_38.1%] bg-no-repeat bg-size-[184.62%_451.76%] w-full max-w-[728px]" 
              style={{ backgroundImage: `url('${titleImage}')` }} 
            />
            <div className="font-['Gotham:Bold_Italic',_sans-serif] font-bold italic text-[24px] md:text-[32px] lg:text-[40px] text-center text-white tracking-[3px] md:tracking-[4px] lg:tracking-[5.6px] uppercase w-full" style={{ textShadow: '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff, 0 0 40px #ffffff' }}>
              <p>GYATT Processing Unit</p>
            </div>
          </div>
          
          {/* Contract Address and Action Buttons */}
          <div className="flex flex-col gap-6 md:gap-8 items-center justify-center w-full">
            
            {/* Contract Address Input */}
            <div className="bg-black box-border border border-white rounded-[12px] w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[65vw] overflow-hidden">
              <input
                ref={inputRef}
                type="text"
                defaultValue={contractAddress}
                readOnly
                className="w-full bg-transparent px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 font-['Arial:Italic',_sans-serif] text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-center text-white tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] uppercase leading-tight outline-none border-none cursor-default"
                style={{ wordBreak: 'break-all' }}
              />
            </div>
            
            {/* Action Buttons */}
            <div className="content-stretch flex items-center justify-between relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] gap-2 sm:gap-4">
              
              {/* Copy Button */}
              <div 
                className="bg-black box-border content-stretch flex gap-2 sm:gap-3 md:gap-4 items-center justify-center px-2 py-2 sm:px-3 sm:py-3 relative rounded-[8px] sm:rounded-[12px] shrink-0 hover:bg-white hover:text-black transition-colors group cursor-pointer border border-white" 
                onClick={copyToClipboard}
              >
                <div className="relative shrink-0 size-4 sm:size-5 md:size-6 flex items-center justify-center">
                  <span className="text-white group-hover:text-black transition-colors text-sm sm:text-base md:text-lg">📋</span>
                </div>
                <div className="font-['Gotham_Black:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] sm:text-[20px] md:text-[24px] text-center text-nowrap text-white group-hover:text-black tracking-[1.5px] sm:tracking-[2.5px] md:tracking-[3.36px] uppercase transition-colors">
                  <p className="leading-[normal] whitespace-pre">Copy</p>
                </div>
              </div>
              
              {/* Buy GPU Button */}
              <div 
                className="bg-black box-border content-stretch flex gap-2 sm:gap-3 md:gap-4 items-center justify-center px-2 py-2 sm:px-3 sm:py-3 relative rounded-[8px] sm:rounded-[12px] shrink-0 hover:bg-white hover:text-black transition-colors group cursor-pointer border border-white" 
                onClick={buyGPU}
              >
                <div className="relative shrink-0 size-4 sm:size-5 md:size-6 flex items-center justify-center">
                  <span className="text-white group-hover:text-black transition-colors text-sm sm:text-base md:text-lg">🛒</span>
                </div>
                <div className="font-['Gotham_Black:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] sm:text-[20px] md:text-[24px] text-center text-nowrap text-white group-hover:text-black tracking-[1.5px] sm:tracking-[2.5px] md:tracking-[3.36px] uppercase transition-colors">
                  <p className="leading-[normal] whitespace-pre">Buy GPU</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Character Images - Scaled Down and Bottom Aligned */}
      <div className="absolute bottom-0 left-0 right-0 h-[220px] z-[5]">
        {/* Left Character - Rotated */}
        <div className="absolute bottom-0 left-0 w-[100px] h-[200px] cursor-pointer jiggle-on-hover" onMouseEnter={playHoverSound}>
          <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full h-full">
            <div 
              className="bg-bottom bg-contain bg-no-repeat h-[200px] w-[100px] transition-transform duration-75 hover:scale-105" 
              style={{ backgroundImage: `url('${characterMia}')` }} 
            />
          </div>
        </div>
        
        {/* Right Character */}
        <div className="absolute bottom-0 right-0 w-[100px] h-[200px] cursor-pointer jiggle-on-hover" onMouseEnter={playHoverSound}>
          <div 
            className="bg-bottom bg-contain bg-no-repeat h-[200px] w-[100px] transition-transform duration-75 hover:scale-105" 
            style={{ backgroundImage: `url('${characterMia}')` }} 
          />
        </div>
        
        {/* Middle Left Character */}
        <div className="absolute bottom-0 left-[20%] sm:left-[25%] md:left-[30%] lg:left-[35%] w-[70px] h-[120px] hidden sm:block cursor-pointer jiggle-on-hover" onMouseEnter={playHoverSound}>
          <div 
            className="bg-bottom bg-contain bg-no-repeat h-[120px] w-[70px] transition-transform duration-75 hover:scale-105" 
                          style={{ backgroundImage: `url('${characterSia}')` }}  
          />
        </div>
        
        {/* Middle Right Character */}
        <div className="absolute bottom-0 right-[20%] sm:right-[25%] md:right-[30%] lg:right-[35%] w-[82px] h-[120px] hidden sm:block cursor-pointer jiggle-on-hover" onMouseEnter={playHoverSound}>
          <div 
            className="bg-bottom bg-contain bg-no-repeat h-[120px] w-[82px] transition-transform duration-75 hover:scale-105" 
                          style={{ backgroundImage: `url('${characterGia}')` }}  
          />
        </div>
      </div>
    </div>
  );
}

export default GPUSiteNew;