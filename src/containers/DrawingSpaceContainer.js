import DrawingSpace from '../components/DrawingSpace';
import { connect } from 'react-redux';

const mapStateToProps = function( state ) {
  const page = !! state.app.pages
               && state.app.pages.find( x => x.id === state.app.currentPageId );

  return {
    page
  };
};

const mapDispatchToProps = function( dispatch ) {
  return {
    addLineToPage: ( pageId, line ) => dispatch( {
      type: 'ADD_LINE_TO_PAGE',
      payload: { pageId, line }
    } ),
    addLineSegmentToPage: ( pageId, segment ) => dispatch( {
      type: 'ADD_LINE_SEGMENT_TO_PAGE',
      payload: { pageId, segment }
    } )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( DrawingSpace );
