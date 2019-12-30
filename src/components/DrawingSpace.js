import React, { useRef, useEffect } from 'react';

import './DrawingSpace.css';

function drawLineStart( ctx, position ) {
  ctx.fillRect( position.x, position.y, 1, 1 );
  ctx.beginPath();
  ctx.moveTo( position.x, position.y );
}

function drawLineSegment( ctx, position ) {
  ctx.lineTo( position.x, position.y );
  ctx.stroke();
}

export default function DrawingSpace( props ) {
  const { page, addLineToPage, addLineSegmentToPage } = props;
  const canvasRef = useRef( null );
  let drawing = false;

  useEffect( () => {
    if ( ! page ) {
      return;
    }

    const ctx = getContext();

    ctx.clearRect( 0, 0, canvasRef.current.width, canvasRef.current.height );

    page.lines.forEach( line => {
      drawLineStart( ctx, line[0] );
      line.slice( 1 ).forEach( position => drawLineSegment( ctx, position ) );
    } );
  }, [ page ] )

  const getPosition = ( e ) => {
    const bounds = canvasRef.current.getBoundingClientRect();

    return {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top
    };
  }

  const getContext = () => canvasRef.current.getContext( '2d' );

  const handleOnMouseDown = e => {
    drawing = true;

    const position = getPosition( e );

    addLineToPage( page.id, [ position ] );
    drawLineStart( getContext(), position );
  };
  const handleOnMouseMove = e => {
    if ( ! drawing ) {
      return;
    }

    const position = getPosition( e );
    const ctx = getContext();

    addLineSegmentToPage( page.id, position );
    drawLineSegment( ctx, position );
  };
  const handleOnMouseUp = e => {
    drawing = false;
  };

  return (
    <div className="drawing-space">
      {page &&
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          onMouseDown={handleOnMouseDown}
          onMouseMove={handleOnMouseMove}
          onMouseUp={handleOnMouseUp}
        />
      }
      {!page && <span>Create a new page using the New Page button on the left</span>}
    </div>
  );
}
