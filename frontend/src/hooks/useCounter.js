import React, { useState } from 'react'


export default function useCounter(initial = 0) {
    const [counter, setCounter] = useState(initial)

    function increaseCounter(increment = 1) {
        setCounter(counter + increment)
        console.log(counter + 1)
    }

    return [counter, increaseCounter]
}
