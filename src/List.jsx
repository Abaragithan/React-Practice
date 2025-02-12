import React, { useEffect, useState } from 'react'

const List = ({ getItems }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("setting items");
        setItems(getItems());
    }, [getItems]);


    return (
        <div>
            {items.map((item, index) => {
               return <p key={index}>{item}</p>
            })}

        </div>
    )
}

export default List