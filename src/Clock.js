// Here we want to just detail the code used to create clock feature
import React from "react";

class Clock extends React.Component {
    render() {
        return(
            TickingClock()
        )
    }
}

function TickingClock()
{
    return (
        <div>
            It is currently {new Date().toLocaleTimeString()}
        </div>
    )
}

export default Clock