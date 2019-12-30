import React from 'react';

import './DrawingSpace.css';

export default function DrawingSpace( { page } ) {
  return (
    <div className="drawing-space">
      {page && page.title}
    </div>
  );
}
