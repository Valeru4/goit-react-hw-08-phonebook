import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authentificatedSelector } from 'redux/authSlice/selectors';

const LoginPage = () => {
  const authentificated = useSelector(authentificatedSelector);

  if (authentificated) return <Navigate to="/contacts" />;
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
