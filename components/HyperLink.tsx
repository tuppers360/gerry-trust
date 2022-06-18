import React from 'react';

interface IHyperLinkProps {
  id: string;
  name: string;
}

function HyperLink({ id, name }: IHyperLinkProps): JSX.Element {
  return (
    <li>
      <a
        href={id}
        className="text-sky-700 no-underline hover:text-sky-500 hover:underline dark:text-sky-300 dark:hover:text-sky-500"
      >
        {name}
      </a>
    </li>
  );
}

export default HyperLink;
