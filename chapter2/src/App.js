import React, { Fragment } from 'react';

function App() {
  const name = '리액트';
  return (
    <>
      <h1>Hello {name !== '리액트' ? name : <>히히</>}</h1>
      <h2>Start React</h2>
    </>
  );
}

export default App;
