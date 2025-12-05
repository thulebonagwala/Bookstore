import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '../components/Signin';
//import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  //const { signIn } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setError(null);
    //const { error: signInError } = await signIn(email, password);

    // if (signInError) {
    //   setError(signInError);
    // } else {
    //   navigate('/');
    // }
  };

  const handleSwitchToSignUp = () => {
    navigate('/signup');
  };

  return (
    <Login
      onLogin={handleLogin}
      onSwitchToSignUp={handleSwitchToSignUp}
      error={error}
    />
  );
}