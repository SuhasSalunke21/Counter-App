import React from 'react';
import Counter from './Counter';

function App() {
  const appStyle = {
    backgroundColor: 'maroon',
  };
  return (
    <div style={appStyle}>
      <h1>My App</h1>
      <Counter />
    </div>
  );
}

export default App;
