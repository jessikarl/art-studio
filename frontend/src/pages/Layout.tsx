import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
};