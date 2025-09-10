import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import Home from './pages/Home';



const router = createBrowserRouter([
  { path: '/', element: <Home /> }
]);

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  )
}

export default App
