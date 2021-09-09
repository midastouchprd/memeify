import React, { useState, useEffect} from 'react'
import {DislikeTwoTone} from '@ant-design/icons';


// const thumbsDown = {
    
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     width: '85px',
//     height: '30px'
// }

function Dislikes() {
    const [disLikes, setDislikes] = useState(0);
    useEffect(() => {

    }, [disLikes]);

    return (
        <div>
             <button onClick={() => setDislikes(disLikes - 1)}
            ><DislikeTwoTone /></button>
            <p>This post has {disLikes} Dislikes =(</p>
        </div>
    )
}

export default Dislikes
