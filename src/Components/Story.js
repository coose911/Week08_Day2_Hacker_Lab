import React from 'react'

const Story = ({story}) => {



    return ( 
        <button >
            <a href={story}> Click Me To Go To Link</a>
        </button>
    );
}

export default Story;