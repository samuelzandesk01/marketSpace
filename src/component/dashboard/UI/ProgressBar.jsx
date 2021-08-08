import React from 'react'

const ProgressBar = (props) => {
    const { bgColor, completed } = props;

    const containerStyles = {
        height: 30,
        width: "100%",
        backgroundColor: "blue",
        borderRadius: 50,
        margin: 40,
    }

    const fillerStyles = {
        height: "100%",
        height: `${completed}%`,
        backgroundColor: bgColor,
        borderRadius: 'inherit',
        textAlign: 'left'
    }
    const labelStyles = {
        padding: 5,
        color: "white",
        fontWeight: "bolder"
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div >
    )
}


const testData = [
    { bgColor: "#6a1b9a", completed: 60 },
    { bgColor: "#00695c", completed: 30 },
    { bgColor: "#ef6c00", completed: 53 },
]


export const Bar = () => {
    return (
        <div>
            {testData.map(itemId => <ProgressBar key={itemId} bgcolor={itemId.bgColor} completed={itemId.completed} />)}
        </div>
    )
}