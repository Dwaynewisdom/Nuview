import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import WebDesign from './Pages/webdesign.jsx';
import Contact from './Pages/contact.jsx';
import SEO from './Pages/seo.jsx';
import WebDevelopment from './Pages/webdevelopment.jsx';
import Services from './Pages/services.jsx';
import Privacy from './Pages/Privacy.jsx';
import Terms from './Pages/Terms.jsx';
import { createHashRouter,RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/webdesign", element: <WebDesign /> },
  { path: "/contact", element: <Contact /> },
  { path: "/seo", element: <SEO /> },
  {path: "/development", element: <WebDevelopment /> },
  {path: "/services", element: <Services /> },
  {path: "/privacy", element: <Privacy /> },
  {path: "/terms", element: <Terms /> },



]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);