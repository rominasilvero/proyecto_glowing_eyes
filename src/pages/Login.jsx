import { useState, useContext } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const Login = () => {

  const { setIsAuth } = useContext(CartContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!email) validationErrors.email = 'Email es requerido';
    if (!password) validationErrors.password = 'Password es requerido';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch('data/users.json');
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setErrors({ email: 'credenciales invalidas' });
      } else {
        if (foundUser.role === 'admin') {
          setIsAuth(true);

          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      setErrors({ email: 'Algo salió mal. Por favor, inténtalo de nuevo más tarde.' });
    }
  };


  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingTop: '4rem' }}>
      <NavLink
        to="/"
        className="navbar-brand logo"
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          fontSize: '1.5rem',
          color: '#000',
          textDecoration: 'none',
        }}
      >
        GE
      </NavLink>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '800px',

        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="formBasicEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Email address
          </label>
          <input
            id="formBasicEmail"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '0.5rem',
              border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
              borderRadius: '0.25rem',
            }}
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {errors.email}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="formBasicPassword" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Password
          </label>
          <input
            id="formBasicPassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '0.5rem',
              border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
              borderRadius: '0.25rem',
            }}
          />
          {errors.password && (
            <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {errors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
