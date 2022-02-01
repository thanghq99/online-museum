import Link from 'next/link';
import React from 'react';

const HighlightLink = ( {title, url} ) => {
  return (
      <Link href={url}>
        <a className='border-b-2'>{title}</a>
      </Link>
  );
};

export default HighlightLink;
