import React from 'react';

function App() {
    const list1 = "MERN";
    const list2 = ['M', 'E', 'R', 'N'];
    const list3 = [
        { letter: 'M', name: 'MongoDB', use: 'Database' },
        { letter: 'E', name: 'Express', use: 'Backend Framework' },
        { letter: 'R', name: 'React', use: 'Frontend Library' },
        { letter: 'N', name: 'Node.js', use: 'Runtime Environment' }
    ];

    return (
        <>
            <h1>List 1:</h1>
            <ul>
                <li>{list1}</li>
            </ul>

            <h1>List 2:</h1>
            <ul>
                {list2.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h1>List 3:</h1>
            <ul>
                {list3.map((item) => (<li key={item.letter}>{item.letter} - {item.name} - {item.use}</li>))}
            </ul>
        </>
    );
}

export default App;