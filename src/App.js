import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainPage = loadable(() => import('./main/pages/MainPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default App;
