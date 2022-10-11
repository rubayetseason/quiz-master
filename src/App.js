import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', 
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')}, 
          element: <Home></Home>
        },
        {
          path: '/statistics', element: <Statistics></Statistics>
        },
        {
          path: '/blog', element: <Blog></Blog>
        },
        {
          path: '/contact', element: <Contact></Contact>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
