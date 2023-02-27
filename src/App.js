import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
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
