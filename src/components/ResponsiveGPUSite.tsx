import React from "react";
import imgImage39 from "figma:asset/6e84c71762e69bad9eddac7fd093d5fb97df0758.png";
import imgImage42 from "figma:asset/3b4f2dfeb7ca5d76d8278d424cd6ee303eb0836a.png";
import imgImage41 from "figma:asset/8cee4256a1b6c998ccf6dbeae6d8fe9e397f2439.png";
import imgImage46 from "figma:asset/30ac075e7be31ca16fb99bd3e833178444692d89.png";

export default function ResponsiveGPUSite() {
  const contractAddress = "95roms6D7e48BHz66JzZLG3ZggnJqsXRcWZVh4aLpump";
  
  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(contractAddress);
        alert('Contract address copied to clipboard!');
        return;
      }
      
      const textArea = document.createElement('textarea');
      textArea.value = contractAddress;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          alert('Contract address copied to clipboard!');
        } else {
          throw new Error('execCommand failed');
        }
      } catch (execError) {
        prompt('Copy this contract address:', contractAddress);
      } finally {
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      prompt('Copy this contract address:', contractAddress);
    }
  };

  const handleBuyGPU = () => {
    alert('Buy GPU functionality would be implemented here');
  };

  const tickerText = "NVIDIA INDEX 6900 ▲ +6900.00";
  const columns = 5;
  
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
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
              style={{ backgroundImage: `url('${imgImage39}')` }} 
            />
            <div className="[text-shadow:#ffffff_0px_4px_19.5px] font-['Gotham:Bold_Italic',_sans-serif] text-[24px] md:text-[32px] lg:text-[40px] text-center text-white tracking-[3px] md:tracking-[4px] lg:tracking-[5.6px] uppercase w-full">
              <p>GYATT Processing Unit</p>
            </div>
          </div>
          
          {/* Contract Address and Action Buttons */}
          <div className="flex flex-col gap-6 md:gap-8 items-center justify-center w-full">
            
            {/* Contract Address */}
            <div className="bg-black box-border border border-white rounded-[12px] px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[65vw] overflow-hidden">
              <div className="font-['Arial:Italic',_sans-serif] text-[10px] xs:text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-center text-white tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.5px] uppercase break-all leading-tight">
                {contractAddress}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="content-stretch flex items-center justify-between relative w-full max-w-[500px]">
              
              {/* Copy Button */}
              <button 
                className="bg-black box-border content-stretch flex gap-4 items-center justify-center px-3 py-3 relative rounded-[12px] shrink-0 hover:bg-white hover:text-black transition-colors group cursor-pointer border border-white" 
                onClick={handleCopy}
              >
                <div className="relative shrink-0 size-6 flex items-center justify-center">
                  <span className="text-white group-hover:text-black transition-colors text-lg">📋</span>
                </div>
                <div className="font-['Gotham_Black:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white group-hover:text-black tracking-[3.36px] uppercase transition-colors">
                  <p className="leading-[normal] whitespace-pre">Copy</p>
                </div>
              </button>
              
              {/* Buy GPU Button */}
              <button 
                className="bg-black box-border content-stretch flex gap-4 items-center justify-center px-3 py-3 relative rounded-[12px] shrink-0 hover:bg-white hover:text-black transition-colors group cursor-pointer border border-white" 
                onClick={handleBuyGPU}
              >
                <div className="relative shrink-0 size-6 flex items-center justify-center">
                  <span className="text-white group-hover:text-black transition-colors text-lg">🛒</span>
                </div>
                <div className="font-['Gotham_Black:Italic',_sans-serif] leading-[0] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white group-hover:text-black tracking-[3.36px] uppercase transition-colors">
                  <p className="leading-[normal] whitespace-pre">Buy GPU</p>
                </div>
              </button>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Character Images */}
      <div className="absolute bottom-[2vh] left-[1vw] md:left-[2vw] hidden md:block">
        <div className="rotate-180 scale-y-[-100%]">
          <div 
            className="bg-center bg-cover bg-no-repeat w-[8vw] h-[20vh] max-w-[166px] max-h-[345px] min-w-[96px] min-h-[200px]" 
            style={{ backgroundImage: `url('${imgImage42}')` }} 
          />
        </div>
      </div>
      
      <div className="absolute bottom-[2vh] right-[1vw] md:right-[2vw] hidden md:block">
        <div 
          className="bg-center bg-cover bg-no-repeat w-[8vw] h-[20vh] max-w-[166px] max-h-[345px] min-w-[96px] min-h-[200px]" 
          style={{ backgroundImage: `url('${imgImage42}')` }} 
        />
      </div>
      
      <div className="absolute bottom-[2vh] left-1/2 -translate-x-[12vw] hidden sm:block">
        <div 
          className="bg-center bg-cover bg-no-repeat w-[6vw] h-[15vh] max-w-[117px] max-h-[197px] min-w-[72px] min-h-[120px]" 
          style={{ backgroundImage: `url('${imgImage41}')` }} 
        />
      </div>
      
      <div className="absolute bottom-[2vh] right-1/2 translate-x-[12vw] hidden sm:block">
        <div 
          className="bg-center bg-cover bg-no-repeat w-[7vw] h-[15vh] max-w-[137px] max-h-[200px] min-w-[82px] min-h-[120px]" 
          style={{ backgroundImage: `url('${imgImage46}')` }} 
        />
      </div>
    </div>
  );
}