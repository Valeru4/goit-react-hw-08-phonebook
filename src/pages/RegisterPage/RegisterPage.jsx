import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authentificatedSelector } from 'redux/authSlice/selectors';

const RegisterPage = () => {
  const authentificated = useSelector(authentificatedSelector);

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
