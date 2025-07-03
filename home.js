import { useState } from 'react';

function Home() {
    let [count, setCount] = useState(0);

    return (
        <div>
            <h1>Home page</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => setCount(count - 1)}>-</button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
}

export default Home;
