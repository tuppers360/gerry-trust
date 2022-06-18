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
        } text-md rounded-md px-3 py-2 hover:text-sky-500 dark:hover:text-sky-400`}
      >
        {name}
      </a>
    </Link>
  );
}

export default NavLink;
