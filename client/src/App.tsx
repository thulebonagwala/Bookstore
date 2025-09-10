import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';




const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
]);

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  )
}

export default App
