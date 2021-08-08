import React, { useState } from 'react'

export default function Posts() {
    const deletePost = () => {
        console.log("Deleting Post");
    };
    return (
        <div>
            <div>James Doe</div>
            <div>iamdoejames</div>
            <div>this's what i've to tell you</div>
            <div>
                <button onClick={deletePost} >Delete Post </button>
                <button >Like Post</button>
            </div>
        </div>
    )
}
