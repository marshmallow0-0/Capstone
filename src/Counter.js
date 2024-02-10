import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    }
    const inDecrease = () => {
        setNumber(number - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={inDecrease}>-1</button>
        </div>
    );
}
export default Counter;