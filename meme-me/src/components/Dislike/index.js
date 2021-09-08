import React, { useState, useEffect } from 'react'

function Dislikes() {
    const [disLikes, setDislikes] = useState(0);
    useEffect(() => {

    }, [disLikes]);

    return (
        <div>
             <button onClick={() => setDislikes(disLikes - 1)}
            >Dislike</button>
            <p>This post has {disLikes} Dislikes =(</p>
        </div>
    )
}

export default Dislikes
