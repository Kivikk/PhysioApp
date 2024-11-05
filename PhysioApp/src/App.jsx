import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Header from './Components/Header.jsx';
import Home from './Pages/Home.jsx';
import Workout from './Pages/Workout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='workout' element={<Workout />} />
      </Route>
    </>
  ),
);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
