import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-container padding-container flex flex-col md:flex-row justify-center items-center text-center">
        <p className="text-sm">
          © 2025 TabooTrip. All rights reserved.
        </p>
        <p className="text-sm mt-2 md:mt-0 md:ml-4">
          Made with ❤️ for happy travelers around the world
        </p>
      </div>
    </footer>
  );
};

export default Footer;
