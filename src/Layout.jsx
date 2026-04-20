import { Outlet } from 'react-router-dom';
import Bar from './Navbar.jsx';

export default function Layout() {
  return (
    <>
      <Bar />
      <Outlet />
    </>
  );
}