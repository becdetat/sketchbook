import React from 'react';
import { useParams } from 'react-router-dom';
import DrawingSpaceContainer from '../containers/DrawingSpaceContainer';

export default function DrawingSpaceRouting() {
  const { id } = useParams();

  return (
    <DrawingSpaceContainer pageId={parseInt( id )}/>
  );
}
