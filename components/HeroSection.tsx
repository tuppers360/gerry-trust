import React from 'react';

export default function HeroSection() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-5xl tracking-tight font-extrabold sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-500 py-4">
          Our Mission
        </h2>
        <p className="mt-4 text-lg leading-loose text-gray-800">
          The trust seeks to promote youth development by supporting young
          people, aged 25 or under, to attend courses and activities of an
          educational, cultural, sporting, adventuresome or character-building
          nature. It is willing to entertain written applications for financial
          assistance from young people living or working within 15 miles of the
          town hall in Blackpool, Lancashire.
        </p>
      </div>
    </div>
  );
}
