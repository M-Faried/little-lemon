import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/About';
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
