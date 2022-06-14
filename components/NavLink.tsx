import Link from 'next/link';
import React from 'react';

interface ILink {
  href: string;
  name: string;
  block?: boolean;
}

function NavLink({ href, name, block }: ILink) {
  return (
    <Link href={href}>
      <a
        className={`${
          block ? 'block' : ''
        } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white`}
      >
        {name}
      </a>
    </Link>
  );
}

export default NavLink;
