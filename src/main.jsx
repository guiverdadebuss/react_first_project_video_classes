import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css'; // 👈 Aqui é onde o Tailwind entra
import { createBrowserRouter, RouterProvider } from 'react-router';
import TaskPage from './pages/TaskPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/task',
    element: <TaskPage />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
