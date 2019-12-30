import React from 'react';
import Page from './Page';

import './Sidebar.css';

export default function Sidebar() {
  const pages = [
    new Page('My pic 1'),
    new Page('My pic 2'),
    new Page('My pic 3'),
  ];
  const currentPage = pages[2];

  return (
    <div class="sidebar">
      <button>New page</button>
      <hr/>
      <ul>
        {pages.map((page, index) => (
          <li
            key={index}
            class={page === currentPage ? 'current-page' : ''}
          >
            {page.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
