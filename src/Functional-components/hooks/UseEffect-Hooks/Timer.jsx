import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);
        //set interval creates a timer that runs every 1000 milliseconsd (1 seconds)

        //clean up function//

        return () => clearInterval(interval);

    }, []);  //empty dependency =  run once on mount
    return (
        <div>
            <p>Timer: {seconds} seconds </p>
        </div>
    )
}

export default Timer
