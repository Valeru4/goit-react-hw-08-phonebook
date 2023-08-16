import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { NavigationLink } from './App.styled';

const HomePage = lazy(() => import('pages/HomePages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/contacts">Contacts</NavigationLink>
          <NavigationLink to="/login">Login</NavigationLink>
          <NavigationLink to="/register">Register</NavigationLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
