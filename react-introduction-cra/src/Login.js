import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function loginHandler(event) {
    event.preventDefault();

    const checkLogin = true;

    if (checkLogin) {
      navigate('/dashboard');
    }
  }

  return (
    <>
      <form style={{ textAlign: 'center', margin: 10 }} onSubmit={loginHandler}>
        <input type="text" name="username" />
        <br />
        <input type="password" name="password" />
        <br />
        <button>LOGIN</button>
      </form>
    </>
  );
}

export default Login;
