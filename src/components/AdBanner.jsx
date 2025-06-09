import React, { useState, useEffect } from "react";

const images = [
  "https://img.staticmb.com/mbimages/project/Photo_h470_w1080/2025/03/18/Project-Photo-5-RG-Orchids-Gardenia-Bangalore-5429367_1125_2000_470_1080.jpg.webp",
  "https://img.staticmb.com/mbimages/project/Photo_h470_w1080/2025/03/18/Project-Photo-6-RG-Orchids-Gardenia-Bangalore-5429367_1126_2000_470_1080.jpg.webp",
  "https://img.staticmb.com/mbimages/project/Photo_h470_w1080/2024/04/08/Project-Photo-1-ENGRACE-VISTA-Bangalore-5420047_345_1366_470_1080.jpg.webp",
  "https://img.staticmb.com/mbimages/project/Photo_h470_w1080/2024/04/08/Project-Photo-14-ENGRACE-VISTA-Bangalore-5420047_1105_1600_470_1080.jpg.webp",
];

const AdBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Ad ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots for current slide indication */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-red-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AdBanner;
