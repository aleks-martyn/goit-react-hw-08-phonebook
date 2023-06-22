import { RegisterForm } from 'components/RegisterForm';
import { Container } from './Register.styled';

export default function Register() {
  return (
    <Container>
      <h2>Registration</h2>
      <RegisterForm />
    </Container>
  );
}
