import appReducer from './app';
import Page from '../domain/Page';

test( 'adding a first page adds it to the state', () => {
  const newState = appReducer( {
    pages: []
  }, {
    type: 'ADD_PAGE',
    payload: {
      title: 'Test 1'
    }
  } );

  expect( newState.pages[ 0 ].title ).toBe( 'Test 1' );
} );

test( 'adding a second page adds it to the state', () => {
  const newState = appReducer( {
    pages: [
      new Page( 0, 'Test 1' )
    ]
  }, {
    type: 'ADD_PAGE',
    payload: {
      title: 'Test 2'
    }
  } );

  expect( newState.pages[0].title ).toBe( 'Test 1' );
  expect( newState.pages[1].title ).toBe( 'Test 2' );
} );

test( 'adding a line to a page adds the line', () => {
  const newState = appReducer( {
    pages: [
      new Page( 0, 'Test 1' )
    ]
  }, {
    type: 'ADD_LINE_TO_PAGE',
    payload: {
      line: [ { x: 0, y: 1 } ],
      pageId: 0
    }
  } );

  expect( newState.pages[0].lines.length ).toBe( 1 );
} );

test( 'adding a line segment to a line', () => {
  const page = new Page( 0, 'Test 1' );
  page.lines.push( [] );
  const newState = appReducer( {
    pages: [ page ]
  }, {
    type: 'ADD_LINE_SEGMENT_TO_PAGE',
    payload: {
      pageId: 0,
      segment: { x: 0, y: 1 }
    }
  } );

  expect( newState.pages[ 0 ].lines[ 0 ].length ).toBe( 1 );
  expect( newState.pages[ 0 ].lines[ 0 ][ 0 ].x ).toBe( 0 );
  expect( newState.pages[ 0 ].lines[ 0 ][ 0 ].y ).toBe( 1 );
} );
