import React from 'react';

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 text-center sm:py-20 sm:px-6 lg:px-8">
      <h2 className="bg-gradient-to-r from-sky-900 to-sky-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
        Our Mission
      </h2>
      <p className="prose pt-8 text-lg leading-loose dark:prose-invert">
        The trust seeks to promote youth development by supporting young people,
        aged 25 or under, to attend courses and activities of an educational,
        cultural, sporting, adventuresome or character-building nature. It is
        willing to entertain written applications for financial assistance from
        young people living or working within 15 miles of the town hall in
        Blackpool, Lancashire.
      </p>
    </div>
  );
}
