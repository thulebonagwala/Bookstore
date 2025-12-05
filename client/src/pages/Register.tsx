import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../components/SignUp';
import { useAuth } from '../context/AuthContext';

export function SignUpPage() {
  const navigate = useNavigate();
  //const { signUp } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (email: string, password: string) => {
    setError(null);
    setSuccess(false);

    // const { error: signUpError } = await signUp(email, password);

    // if (signUpError) {
    //   setError(signUpError);
    // } else {
    //   setSuccess(true);
    //   setTimeout(() => {
    //     navigate('/login');
    //   }, 2000);
    // }
  };

  const handleSwitchToLogin = () => {
    navigate('/login');
  };

  return (
    <SignUp
      onSignUp={handleSignUp}
      onSwitchToLogin={handleSwitchToLogin}
      error={error}
      success={success}
    />
  );
}
