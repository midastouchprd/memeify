import React, { useState, useEffect } from 'react'

function Likes() {
    
    const [upVotes, setUpvotes] = useState(0);

    useEffect(() => {

    }, [upVotes]);


    return (
        <div>
            <button onClick={() => setUpvotes(upVotes + 1)}
            >Like</button>
            <p>This post has {upVotes} likes!</p>
        </div>
    )
}

export default Likes
