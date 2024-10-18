"use client";

import { useState } from "react";

export default function Counter({users}) {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>{users.length}</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}