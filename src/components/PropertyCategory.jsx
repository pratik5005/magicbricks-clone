import React from "react";

const categories = [
  {
    title: "Trumph Projects",
    count: "55,204",
    img:
      "https://img.staticmb.com/mbimages/project/Photo_h470_w1080/2025/03/18/Project-Photo-5-RG-Orchids-Gardenia-Bangalore-5429367_1125_2000_470_1080.jpg.webp",
    location: "Bangalore",
    price: "₹1.5 Cr",
  },
  {
    title: "Projects",
    count: "999",
    img:
      "https://img.staticmb.com/mbimages/project/Photo_h470_w1080/2025/03/18/Project-Photo-6-RG-Orchids-Gardenia-Bangalore-5429367_1126_2000_470_1080.jpg.webp",
    location: "Bangalore",
    price: "₹1.7 Cr",
  },
  {
    title: "Ready to move-in",
    count: "48,293",
    img:
      "https://img.staticmb.com/mbimages/project/Photo_h470_w1080/2024/04/08/Project-Photo-1-ENGRACE-VISTA-Bangalore-5420047_345_1366_470_1080.jpg.webp",
    location: "Bangalore",
    price: "₹2.1 Cr",
  },
  {
    title: "Budget Homes",
    count: "1,528",
    img:
      "https://img.staticmb.com/mbimages/project/Photo_h470_w1080/2024/04/08/Project-Photo-14-ENGRACE-VISTA-Bangalore-5420047_1105_1600_470_1080.jpg.webp",
    location: "Bangalore",
    price: "₹2.3 Cr",
  },
];

const PropertyCategory = () => {
  return (
    <section className="p-6 max-w-7xl mx-auto">
<h3 className="text-3xl mb-8 relative inline-block pb-4">
  <span className="absolute left-0 bottom-1 h-1 bg-red-600 rounded-sm w-16 md:w-20" />
  We've got <span className="ml-1">properties for everyone</span>
</h3>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
          >
            {/* Property Image */}
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Info Section */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h4 className="text-lg font-semibold">{cat.title}</h4>
              <p className="text-sm">{cat.location}</p>
              <p className="text-sm font-medium mt-1">{cat.price}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                View Property
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCategory;
