import { LoginForm } from 'components/LoginForm';
import { Container } from './Login.styled';

export default function Login() {
  return (
    <Container>
      <h2>Log in</h2>
      <LoginForm />
    </Container>
  );
}
