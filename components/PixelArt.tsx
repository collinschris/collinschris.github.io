export const PixelCoin = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-6 h-6 grid grid-cols-6 grid-rows-6 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

export const PixelBlock = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-8 h-8 grid grid-cols-8 grid-rows-8 gap-0">
      {/* Top border */}
      {Array(8).fill(0).map((_, i) => (
        <div key={`top-${i}`} className="bg-black"></div>
      ))}
      
      {/* Second row */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      {/* Third row */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      {/* Fourth row */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      {/* Fifth row */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      {/* Sixth row */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      {/* Seventh row */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      {/* Bottom border */}
      {Array(8).fill(0).map((_, i) => (
        <div key={`bottom-${i}`} className="bg-black"></div>
      ))}
    </div>
  </div>
);

export const PixelStar = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-6 h-6 grid grid-cols-6 grid-rows-6 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

export const PixelArrow = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-8 h-4 grid grid-cols-8 grid-rows-4 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

// NEW ICON SUGGESTIONS:

export const PixelHeart = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-8 h-7 grid grid-cols-8 grid-rows-7 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

export const PixelDiamond = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-6 h-6 grid grid-cols-6 grid-rows-6 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

export const PixelComputer = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-8 h-8 grid grid-cols-8 grid-rows-8 gap-0">
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
    </div>
  </div>
);

export const PixelGear = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-8 h-8 grid grid-cols-8 grid-rows-8 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

export const PixelLightning = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-6 h-8 grid grid-cols-6 grid-rows-8 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

export const PixelRocket = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-6 h-8 grid grid-cols-6 grid-rows-8 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-transparent"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

export const PixelCode = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-8 h-6 grid grid-cols-8 grid-rows-6 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

export const PixelFlag = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-8 h-8 grid grid-cols-8 grid-rows-8 gap-0">
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);

export const PixelTrophy = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-8 h-8 grid grid-cols-8 grid-rows-8 gap-0">
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
    </div>
  </div>
);