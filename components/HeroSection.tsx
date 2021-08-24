import React from 'react';

export default function HeroSection() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl px-4 py-16 mx-auto text-center bg-gray-100 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="py-4 text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-blue-900 to-blue-500">
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
