import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handledata = () => {
        console.log(name);
        console.log(age);
    };

    return (
        <div>
            <h1>Contact page</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Enter age"
            />
            <button onClick={handledata}>Add user</button>
        </div>
    );
}

export default Contact;
