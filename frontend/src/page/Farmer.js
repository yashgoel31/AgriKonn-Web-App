import React from "react";

const Farmer = () => {
  const techniques = [
    {
      name: "Hydroponics Farming",
      description:
        "A soil-less farming technique using nutrient-rich water to grow plants efficiently.",
      image: "https://via.placeholder.com/300x200?text=Hydroponics",
      link: "https://www.agriculture.com/hydroponics",
    },
    {
      name: "Vertical Farming",
      description:
        "Vertical cultivation, also known as vertical farming, is the practice of growing crops in stacked layers, often indoors.",
      image: "https://via.placeholder.com/300x200?text=Vertical+Farming",
      link: "https://www.verticalfarming.com/",
    },
    {
      name: "Aquaponics",
      description:
        "A combination of aquaculture and hydroponics, using fish waste to fertilize crops.",
      image: "https://via.placeholder.com/300x200?text=Aquaponics",
      link: "https://www.aquaponicsassociation.org/",
    },
    {
      name: "Cover Cropping",
      description:
        "Planting cover crops to improve soil health, reduce erosion, and control weeds.",
      image: "https://via.placeholder.com/300x200?text=Cover+Cropping",
      link: "https://www.sare.org/cover-cropping",
    },
    {
      name: "Climate-Smart Agriculture",
      description:
        "Techniques like drought-resistant crops to adapt to changing climates.",
      image: "https://via.placeholder.com/300x200?text=Climate+Smart+Agriculture",
      link: "https://www.climate-smartagriculture.org/",
    },
    {
      name: "Agroforestry",
      description:
        "Integrating trees with crops to enhance biodiversity and soil fertility.",
      image: "https://via.placeholder.com/300x200?text=Agroforestry",
      link: "https://www.worldagroforestry.org/",
    },
    {
      name: "Integrated Pest Management",
      description:
        "Managing pests with minimal pesticide use for healthier crops.",
      image: "https://via.placeholder.com/300x200?text=Integrated+Pest+Management",
      link: "https://www.ipmcenters.org/",
    },
    {
      name: "Mulching",
      description:
        "Using organic material to cover the soil, conserve moisture, and suppress weeds.",
      image: "https://via.placeholder.com/300x200?text=Mulching",
      link: "https://www.fao.org/mulching/",
    },
  ];

  const schemes = [
    {
      name: "PM-KISAN",
      description: "Direct income support for farmers.",
      link: "https://pmkisan.gov.in/",
    },
    {
      name: "Soil Health Card",
      description: "Monitoring soil quality for better yields.",
      link: "https://soilhealth.dac.gov.in/",
    },
    {
      name: "Subsidy on Farm Machinery",
      description: "Financial aid for farm machinery.",
      link: "https://agrimachinery.nic.in/",
    },
    {
      name: "PM Fasal Bima Yojana",
      description: "Crop insurance for farmers.",
      link: "https://pmfby.gov.in/",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to Farmer's Friend by AGRIKONN</h1>
        <p className="mt-2 text-lg">
          Empowering farmers with modern techniques and government resources.
        </p>
      </header>

      {/* New Farming Techniques Section */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-6">
          New Farming Techniques
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techniques.map((technique, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <img
                src={technique.image}
                alt={technique.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-green-600">
                  {technique.name}
                </h3>
                <p className="text-sm mt-2">{technique.description}</p>
                <a
                  href={technique.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">
            Government Schemes for Farmers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {schemes.map((scheme, index) => (
              <div
                key={index}
                className="bg-green-100 text-green-800 shadow-md rounded-md p-4 flex flex-col items-center"
              >
                <h3 className="text-lg font-bold">{scheme.name}</h3>
                <p className="text-sm mt-2 text-center">{scheme.description}</p>
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4 text-center">
        <p>&copy; 2024 Farmer's Friend by AGRIKONN. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Farmer;
