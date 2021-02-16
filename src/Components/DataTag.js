import React from 'react'
import Canvas from './Canvas';

const DataTag = ({ color, fontFamily, image, thought, author, fontSize }) => {
    const i = String(image);
    return (
        <div>
            <Canvas color={color} fontFamily={fontFamily} image={i} thought={thought} author={author} fontSize={fontSize} />
        </div>
    )
}

export default DataTag;
