import React from 'react';
import { Link } from 'react-router-dom';

export default function PageListItem(props) {
  const {
    page,
    isCurrentPage,
  } = props;

  return (
    <li
      className={isCurrentPage ? 'current-page' : ''}
    >
      <Link to={`/${page.id}`}>
        {page.title}
      </Link>
    </li>
  )
}
