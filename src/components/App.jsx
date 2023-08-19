import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { HomeLink, Navigation, NavigationLink, Wrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk, refreshUserThunk } from 'redux/authSlice/operations';
import {
  TokenSelector,
  authentificatedSelector,
} from 'redux/authSlice/selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(TokenSelector);
  const navigate = useNavigate();
  const authentificated = useSelector(authentificatedSelector);
  useEffect(() => {
    if (!token || authentificated) {
      return;
    }

    dispatch(refreshUserThunk());
  }, [token, authentificated, dispatch]);

  const HandleLogOut = () => {
    dispatch(logoutUserThunk());
    if (!authentificated) {
      navigate('/');
    }
  };

  return (
    <div>
      <header>
        <nav>
          {authentificated ? (
            <Navigation>
              <HomeLink to="/contacts">Contacts</HomeLink>
              <NavigationLink onClick={HandleLogOut} type="button">
                Log out
              </NavigationLink>
            </Navigation>
          ) : (
            <>
              <Navigation>
                <HomeLink to="/">PhoneBook</HomeLink>
                <Wrapper>
                  <NavigationLink to="/login">Log In</NavigationLink>
                  <NavigationLink to="/register">Register</NavigationLink>
                </Wrapper>
              </Navigation>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
