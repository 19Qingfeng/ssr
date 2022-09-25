import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Hello Home!</p>
      <p>Counter is {count}!</p>
      <Button onClick={() => setCount(count + 1)}>Add Counter</Button>
    </div>
  );
};

export default HomePage;
