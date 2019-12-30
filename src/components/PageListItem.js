import React from 'react';

export default function PageListItem(props) {
  const {
    page,
    isCurrentPage,
    selectPage,
  } = props;

  const handleClick = (event) => {
    event.preventDefault();
    selectPage(page);
  }

  return (
    <li
      className={isCurrentPage ? 'current-page' : ''}
    >
      <a href="#" onClick={handleClick}>{page.title}</a>
    </li>
  )
}
