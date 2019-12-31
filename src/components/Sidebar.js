import React from 'react';
import PageListItem from './PageListItem';
import { useParams } from 'react-router-dom';

import './Sidebar.css';

export default function Sidebar(props) {
  const {
    addPage,
    pages,
  } = props;
  const { id } = useParams();
  const pageId = parseInt( id );
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
            isCurrentPage={page.id === pageId}
          />
        ) ) }
      </ul>
    </div>
  );
}
