import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const OnHandlerSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userDataFinal = {
      name,
      email,
      password,
    };

    dispatch(registerUserThunk(userDataFinal));
  };

  return (
    <div>
      <h1> Registration form</h1>
      <form onSubmit={OnHandlerSubmit}>
        <label>
          <p>Name</p>
          <input name="userName" type="text" required minLength={2} />
        </label>
        <br />
        <label>
          <p>Email</p>
          <input name="userEmail" type="email" required />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
