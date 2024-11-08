import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Header from './Components/Header.jsx';
import Home from './Pages/Home.jsx';
import AllExercises from './Pages/Categories/AllExercises.jsx';
import BackExercises from './Pages/Categories/BackExercises.jsx';
import ShoulderExercises from './Pages/Categories/ShoulderExercises.jsx';
import HipExercises from './Pages/Categories/HipExercises.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<Home />} />
      <Route path='all-exercises' element={<AllExercises />} />
      <Route path='back-exercises' element={<BackExercises />} />
      <Route path='shoulder-exercises' element={<ShoulderExercises />} />
      <Route path='hip-exercises' element={<HipExercises />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
