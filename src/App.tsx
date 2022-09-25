import { useRoutes } from 'react-router-dom';
import routes from './router/router-config';
import useSocket from './socket';

const App = () => {
  useSocket();
  return useRoutes(routes);
};

export default App;
