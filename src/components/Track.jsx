import React from 'react';

function Track({ track }) {
    return (
        <div className="Track">
            <h3>{track.name}</h3>
            <p>{track.artist} - {track.album}</p>
            <button className="Track-action">+ ADD</button>
        </div>
    );
}

export default Track;
