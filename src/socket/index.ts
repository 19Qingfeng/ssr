import { useEffect } from 'react';
import { io } from 'socket.io-client';

const useSocket = () => {
  useEffect(() => {
    const socket = io('ws://localhost:3001');

    socket.on('refer', () => {
      location.reload();
    });
  }, [])
}

export default useSocket