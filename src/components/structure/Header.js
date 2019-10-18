import React from 'react';

const Instructions = ({comments = []}) => comments.map(
    (comment, index) => (
        <p className="eds-text-bm--fixed"key={index}>• {comment}</p>
    )
)
const Headers = ({
    title,
    comments
}) => (
    title || comments ? 
    (<>
    <h1 className="eds-align--center-vertical">{title}</h1>
        <div className="eds-l-pad-vert-10">
            <Instructions comments={comments}/>
        </div>
    </>): null
)

export default Headers;
