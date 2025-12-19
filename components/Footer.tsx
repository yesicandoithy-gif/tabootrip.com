import React from "react";

const Footer = () => {
  const friendLinks = [
    { name: "TripAdvisor", url: "https://www.tripadvisor.com" },
    { name: "Lonely Planet", url: "https://www.lonelyplanet.com" },
    { name: "Booking.com", url: "https://www.booking.com" },
    { name: "Expedia", url: "https://www.expedia.com" },
    { name: "Airbnb", url: "https://www.airbnb.com" },
    { name: "Kayak", url: "https://www.kayak.com" },
    { name: "Skyscanner", url: "https://www.skyscanner.net" },
    { name: "National Geographic Travel", url: "https://www.nationalgeographic.com/travel" },
    { name: "CNN Travel", url: "https://www.cnn.com/travel" },
    { name: "The Points Guy", url: "https://thepointsguy.com" },
  ];

  return (
    <footer className="bg-teal-900 text-white py-12 w-full">
      <div className="max-container padding-container mx-auto text-center">
        {/* 版权文字 */}
        <p className="text-sm mb-6">
          © 2025 TabooTrip. All rights reserved.
        </p>
        <p className="text-sm mb-8">
          Made with ❤️ for happy travelers around the world
        </p>

        {/* 友情链接 */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <span className="text-gray-300">Friendly Links:</span>
          {friendLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
