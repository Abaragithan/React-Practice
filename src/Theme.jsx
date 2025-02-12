import React, { useMemo, useState } from 'react'

const Theme = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const teamStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    }
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);


    return (
        <div>

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => setDark((curr) => (!curr))}>Toggle Theme</button>
            <div style={teamStyle}>{doubleNumber}</div>


        </div>
    )
}

export default Theme

function slowFunction(number) {
    console.log("running slow");
    
    for (let i = 0; i < 1000000000; i++) {

    }
    return number * 2;
}