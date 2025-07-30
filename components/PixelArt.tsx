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

export const PixelCoffee = ({ className = "" }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <div className="w-8 h-8 grid grid-cols-8 grid-rows-8 gap-0">
      {/* Steam */}
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      {/* Mug top */}
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      {/* Mug body with handle start */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      {/* Mug body with handle */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      {/* Mug body with handle */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      
      {/* Mug body with handle end */}
      <div className="bg-black"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      {/* Mug bottom */}
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      
      {/* Base/saucer */}
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-transparent"></div>
    </div>
  </div>
);