import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import './signup.scss';

const SignUp = () => {
  const [registeredUser, setRegisteredUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  // const [matchPasswordError, setMatchPasswordError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading, error }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  const handleChange = (e) => {
    setRegisteredUser({
      ...registeredUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstname: registeredUser.firstname,
      lastname: registeredUser.lastname,
      username: registeredUser.username,
      email: registeredUser.email,
      password: registeredUser.password,
      confirmPassword: registeredUser.confirmPassword,
    };
    console.log('REGISTER DATA>>>>>>', data);
    // if (registeredUser.password !== registeredUser.confirmPassword) {
    //   toast.error('Passwords do not match');
    //   // setMatchPasswordError(true);
    // } // else {
    try {
      const res = await register({
        firstname: data.firstname,
        lastname: data.lastname,
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }).unwrap();
      toast.success('Successfully logged in!');
      // setMatchPasswordError(false);
      dispatch(setCredentials({ ...res }));
      navigate('/login');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err?.data?.message || err.error);
    }
    // }
  };

  return (
    <div className="signup">
      <Toaster position="bottom-right" />
      <div>
        <section className="signup__card">
          <div className="signup__title-container">
            <h2 className="signup__title">SignUp</h2>
          </div>
          <div className="signup__image-container">
            <div className="signup__image"></div>
          </div>
          <div className="signup__form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="signup__firstname-container">
                <label className="signup__firstname-label" htmlFor="firstname">
                  First Name
                </label>
                <input
                  className="signup__firstname"
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="signup__lastname-container">
                <label className="signup__lastname-label" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  className="signup__lastname"
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="signup__username-container">
                <label className="signup__username-label" htmlFor="username">
                  Username
                </label>
                <input
                  className="signup__username"
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="signup__email-container">
                <label className="signup__email-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="signup__email"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="signup__password-container">
                <label className="signup__password-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="signup__password"
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="signup__confirm-password-container">
                <label
                  className="signup__confirm-password-label"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="signup__confirm-password"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="signup__button-container">
                {/* {matchPasswordError && (
                  <p
                    style={{
                      color: '#ffffff',
                      border: '1px solid #8f300d',
                      padding: '5px',
                      borderRadius: '4px',
                      background: 'rgba(143, 48, 13,0.8)',
                    }}
                  >
                    Passwords do not match
                  </p>
                )} */}
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
                <button className="signup__button" type="submit">
                  {isLoading ? 'Loading...' : 'Signup'}
                </button>
              </div>
              <div>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export { SignUp };
