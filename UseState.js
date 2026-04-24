import React, { useState } from "react";

function App() {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            Person 1 : <input
                type="text"
                placeholder="Enter name"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
            /><br />
            Person 2 : <input
                type="text"
                placeholder="Enter name"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
            /><br />

            <h2>{name1 || "Person A"} : {count1}</h2>
            <h2>{name2 || "Person B"} : {count2}</h2>

            <button onClick={() => setCount1(count1 + 1)}>+</button>
            <button onClick={() => setCount1(count1 - 1)}>-</button><br /><br />
            <button onClick={() => setCount1(0)}>Reset</button><br /><br /><br /><br /><br />

            <button onClick={() => setCount2(count2 + 1)}>+</button>
            <button onClick={() => setCount2(count2 - 1)}>-</button><br /><br />
            <button onClick={() => setCount2(0)}>Reset</button><br /><br /><br /><br /><br />
        </div>
    );
}

export default App;