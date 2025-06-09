import React, { useState, useRef, useEffect } from "react";
import AdBanner from "./AdBanner";
import { MapPin, Home, IndianRupee, Search } from "lucide-react";

const HeroSection = () => {
  const tabs = [
    "Buy",
    "Rent",
    "New Projects",
    "PG",
    "Plot",
    "Commercial",
    "Post Free Property Ad",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const containerRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, top: 0, width: 0 });

  useEffect(() => {
    const index = hoverIndex !== null ? hoverIndex : activeIndex;
    const container = containerRef.current;
    if (!container) return;

    const button = container.children[index];
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const parentRect = container.getBoundingClientRect();

    setUnderlineStyle({
      left: rect.left - parentRect.left,
      top: rect.bottom - parentRect.top,
      width: rect.width,
    });
  }, [activeIndex, hoverIndex]);

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Banner and Overlay */}
      <div className="absolute inset-0 z-0">
        <AdBanner />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-12 text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-center">
          Find a home you’ll <span className="italic text-red-600">love</span>
        </h2>

        {/* Tabs */}
        <div
          ref={containerRef}
          className="relative flex flex-wrap justify-center gap-4 text-sm font-medium mb-6"
        >
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`relative px-2 py-1 ${
                i === activeIndex
                  ? "text-red-400"
                  : "text-gray-200 hover:text-red-300"
              }`}
            >
              {tab}
            </button>
          ))}
          {/* Responsive Underline */}
          <span
            className="absolute h-0.5 bg-red-400 transition-all duration-300"
            style={{
              left: underlineStyle.left,
              top: underlineStyle.top,
              width: underlineStyle.width,
            }}
          />
        </div>

        {/* Search Box */}
        <div className="bg-white/90 backdrop-blur-md text-gray-800 shadow-xl rounded-2xl px-6 py-4 flex items-center flex-wrap gap-4 w-full max-w-4xl border border-gray-200">
          {/* Location */}
          <div className="flex items-center bg-red-50 px-4 py-2 rounded-full">
            <MapPin size={18} className="text-red-600 mr-2" />
            <span className="text-sm font-medium">Varanasi</span>
          </div>
          <input
            type="text"
            placeholder="Add more..."
            className="text-sm outline-none w-30 sm:w-48 bg-transparent"
          />

          {/* Flat Type */}
          <div className="border-l pl-4 flex items-center gap-2">
            <Home size={16} className="text-red-600" />
            <select className="text-sm  outline-none font-medium bg-transparent">
     <option disabled selected value="">
      Select Flat Type
    </option>
    <option value="1bhk">1 BHK Flat</option>
    <option value="2bhk">2 BHK Flat</option>
    <option value="3bhk">3 BHK Flat</option>
    <option value="4plusbhk">4+ BHK Flat</option>
            </select>
          </div>

          {/* Budget */}
          <div className="border-l pl-4 flex items-center gap-2">
            <IndianRupee size={16} className="text-red-600" />
            <select className="text-sm outline-none font-medium bg-transparent">
    <option disabled selected value="">
      Select Budget
    </option>
    <option value="under-10000">Under ₹10,000</option>
    <option value="10000-25000">₹10,000 - ₹25,000</option>
    <option value="25000-50000">₹25,000 - ₹50,000</option>
    <option value="50000-100000">₹50,000 - ₹1,00,000</option>
    <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
    <option value="200000-plus">Above ₹2,00,000</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="ml-auto bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 px-6 py-2 rounded-2xl text-sm font-semibold">
            <Search size={20} />
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
