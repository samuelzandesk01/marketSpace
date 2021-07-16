import React, { useState } from 'react';


const Name = (props) => {
    const [name, setName] = useState("Samuel Seniga");

    return (
        <div>
            {props.sam}
        </div>
    )
}

export default Name;