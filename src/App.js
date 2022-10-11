import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact';
import NF from './components/NF/NF';
import Quiz from './components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {path: '/:QId',
loader: async ({params}) => {
return fetch(`https://openapi.programming-hero.com/api/quiz/${params.QId}`)
},

 element: <Quiz></Quiz>
        },
        {
          path: '/statistics', element: <Statistics></Statistics>
        },
        {
          path: '/blog', element: <Blog></Blog>
        },
        {
          path: '/contact', element: <Contact></Contact>
        },
        { path: '*', element: <NF></NF> }
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
