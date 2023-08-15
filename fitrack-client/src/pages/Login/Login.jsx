import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import './login.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading, error }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);

  const [loggedInUser, setLoggedInUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [switchInput, setSwitchInput] = useState(false);

  const handleChange = (e) => {
    setLoggedInUser({
      ...loggedInUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: loggedInUser.username,
      email: loggedInUser.email,
      password: loggedInUser.password,
    };

    try {
      const res = await login({
        username: data.username,
        email: data.email,
        password: data.password,
      }).unwrap();
      toast.success('Successfully logged in!');
      dispatch(setCredentials({ ...res }));
      navigate('/dashboard');
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="login">
      <Toaster position="bottom-right" />
      <div>
        <section className="login__card">
          <div className="login__title-container">
            <h2 className="login__title">Login</h2>
          </div>
          <div className="login__form-container">
            <div className="login__image-container">
              <div className="login__image"></div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              {switchInput ? (
                <div className="login__username-container">
                  <label className="login__username-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="login__username"
                    type="text"
                    name="username"
                    value={loggedInUser.username}
                    onChange={handleChange}
                    id="username"
                  />
                </div>
              ) : (
                <div className="login__email-container">
                  <label className="login__email-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="login__email"
                    type="email"
                    name="email"
                    value={loggedInUser.email}
                    onChange={handleChange}
                    id="email"
                  />
                </div>
              )}
              <div className="login__switch-input-container">
                <p className="login__switch-input">
                  {switchInput
                    ? 'enter your email instead?'
                    : 'enter your username instead?'}{' '}
                </p>
                <button
                  className="login__switch-input-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSwitchInput((prevState) => !prevState);
                  }}
                >
                  Click here
                </button>{' '}
              </div>
              <div className="login__password-container">
                <label className="login__password-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="login__password"
                  type="password"
                  name="password"
                  value={loggedInUser.password}
                  onChange={handleChange}
                  id="password"
                />
              </div>
              <div className="login__button-container">
                {error && (
                  <p
                    style={{
                      color: '#ffffff',
                      border: '1px solid #8f300d',
                      padding: '5px',
                      borderRadius: '4px',
                      background: 'rgba(143, 48, 13,0.8)',
                    }}
                  >
                    {error.data.message}
                  </p>
                )}
                <button className="login__button" type="submit">
                  {isLoading ? 'Loading...' : 'Login'}
                </button>
              </div>
              <div className="login__account-container">
                <p className="login__account">
                  Don't have an account?{' '}
                  <Link className="login__account-link" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export { Login };
