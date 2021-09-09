import React, { useState, useEffect } from 'react'
import {LikeTwoTone} from '@ant-design/icons';

// const thumbsUp = {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     width: '85px',
//     height: '25px'
// }

function Likes() {
    
    const [upVotes, setUpvotes] = useState(0);

    useEffect(() => {

    }, [upVotes]);


    return (
        <div>
            <button onClick={() => setUpvotes(upVotes + 1)}
            ><LikeTwoTone /></button>
            <p>This post has {upVotes} likes!</p>
        </div>
    )
}

export default Likes
