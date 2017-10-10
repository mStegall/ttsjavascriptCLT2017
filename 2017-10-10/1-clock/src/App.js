import React from 'react';

import Clock from './Clock';

function App() {
  return (
    <div>
      <Clock date={new Date()}/>
    </div>
  );
}

export default App;
