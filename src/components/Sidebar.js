import React from 'react';
import PageListItem from './PageListItem'

import './Sidebar.css';

export default function Sidebar(props) {
  const {
    addPage,
    pages,
    currentPageId,
    selectPage
  } = props;

  const clickNewPageHandler = () => {
    const title = prompt('Enter the title for the new page');

    if ( ! title ) {
      return;
    }

    addPage( title );
  };

  return (
    <div className="sidebar">
      <button onClick={clickNewPageHandler}>New page</button>
      <hr/>
      <ul>
        {pages.map( ( page, index ) => (
          <PageListItem
            key={index}
            page={page}
            isCurrentPage={page.id === currentPageId}
            selectPage={selectPage}
          />
        ) ) }
      </ul>
    </div>
  );
}
