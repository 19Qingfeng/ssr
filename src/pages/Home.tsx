import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';

const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>++</Button>
    </div>
  );
};

export default HomePage;
