import React from 'react';
import Text from './components/Text';

const App = () => {
  const [name, setName] = React.useState('world');

  const handleChange = e => setName(e.target.value);

  return (
    <main>
      <h1 className="welcome">Hello, {name}</h1>
      <Text onChange={handleChange} />
    </main>
  );
};

export default App;