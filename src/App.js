import React from 'react';
import Select from 'react-select';
import { useSpring, animated } from 'react-spring';


const App = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [showExecute, setShowExecute] = useState(false);

    const runbooks = [
        { name: 'Runbook1', webhookUrl: 'http://webhook1.com' },
        { name: 'Runbook2', webhookUrl: 'http://webhook2.com' },
        // ... more runbooks
    ];

    const executeRunbook = (webhookUrl) => {
      fetch(webhookUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ /* any required parameters */ }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => console.error('Error:', error));
  };
  

  const fade = useSpring({
    opacity: showExecute ? 1 : 0,
    transform: showExecute ? 'translateY(0%)' : 'translateY(-50%)',
  });

  const onSelectChange = (option) => {
    setSelectedOption(option);
    setShowExecute(true);
  };

  return (
    <div>
      <div className="title-bar">My PowerShell Runbook Portal</div>
      <div className={showExecute ? 'content-behind' : 'content'}>
        <Select
          options={runbooks}
          onChange={onSelectChange}
          placeholder="Select a Runbook"
        />
      </div>
      <animated.div style={fade}>
        {showExecute && (
          <div className="execute-view">
            <h2>Execute {selectedOption.label}</h2>
            <button className="button button-primary" onClick={() => executeRunbook(selectedOption.value)}>
              Execute
            </button>
          </div>
        )}
      </animated.div>
    </div>
  );
};