import React from 'react';

const App = () => {
    const runbooks = [
        { name: 'Runbook1', webhookUrl: 'http://webhook1.com' },
        { name: 'Runbook2', webhookUrl: 'http://webhook2.com' },
        // ... more runbooks
    ];

    const executeRunbook = (webhookUrl) => {
        // Implement POST request logic here
    };

    return (
        <div>
            <h1>My PowerShell Runbook Portal</h1>
            <ul>
                {runbooks.map((runbook, index) => (
                    <li key={index}>
                        {runbook.name}
                        <button onClick={() => executeRunbook(runbook.webhookUrl)}>Execute</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
