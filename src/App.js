import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Order from './pages/Order';
import About from './pages/About';
import Error from './pages/Error';
import Routes from './Routes';

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: < Home />,
    errorElement: < Error />
  },
  {
    path: Routes.ORDER,
    element: < Order />
  },
  {
    path: Routes.RESERVE,
    element: < Reservation />
  },
  {
    path: Routes.ABOUT,
    element: < About />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
