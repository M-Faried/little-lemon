import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: < Home />,
    errorElement: < Error />
  },
  {
    path: '/about',
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
