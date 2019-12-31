import Page from '../domain/Page';
import maxBy from 'lodash/maxBy';

const initialState = {
  pages: [],
};

function getStateUpdatedWithPage( state, page ) {
  return {
    ...state,
    pages: [
      ...state.pages.slice( 0, state.pages.indexOf( page ) ),
      page,
      ...state.pages.slice( state.pages.indexOf( page ) + 1 )
    ]
  };
}

function getNewId( pages ) {
  const lastPage = maxBy( pages, x => x.id );

  if ( lastPage === undefined ) {
    return 0;
  }

  return lastPage.id + 1;
}

export default function( state = initialState, action ) {
  switch ( action.type ) {
    case 'ADD_PAGE':
      const { title } = action.payload;
      const newId = getNewId( state.pages );
      const newPage = new Page( newId, title );

      return {
        ...state,
        pages: [
          ...state.pages,
          newPage
        ],
      };
    case 'ADD_LINE_TO_PAGE': {
      const { line, pageId } = action.payload;
      const page = state.pages.find( x => x.id === pageId );

      page.lines.push( line );

      const newState = getStateUpdatedWithPage( state, page );

      return newState
    }
    case 'ADD_LINE_SEGMENT_TO_PAGE': {
      const { pageId, segment } = action.payload;
      const page = state.pages.find( x => x.id === pageId );

      page.lines[ page.lines.length - 1 ].push( segment );

      return getStateUpdatedWithPage( state, page );
    }
    default:
      return state;
  }
};
