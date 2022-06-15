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
        } px-3 py-2 text-md rounded-md hover:text-sky-500 dark:hover:text-sky-400`}
      >
        {name}
      </a>
    </Link>
  );
}

export default NavLink;
