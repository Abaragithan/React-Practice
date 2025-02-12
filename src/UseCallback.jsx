import React, { useCallback, useState } from 'react'
import List from './List';

const UseCallback = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    }

    const getItems = useCallback(() => {
        return [number + 1, number + 2, number + 3];
    },[number]);


    return (
        <div>
            <div style={theme}>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value))}
                />
                <button onClick={() => setDark((curr) => (!curr))}>Toggle Theme</button>
                <List getItems={getItems} />
            </div>

        </div>
    )
}

export default UseCallback