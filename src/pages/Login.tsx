import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import InputText from '../components/InputText/InputText';
import Button from '../components/button/Button';

const Login : React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);

  function checkEmptyFields(emailTxt:string, passwordTxt:string) {
    if (!emailTxt && !passwordTxt) {
      setErrorText('Os campos E-Mail e Senha estão vazios, favor preencher!');
      setError(true);
    }
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkEmptyFields(email, password);
  };

  return (
    <>
      <Form data-testid="login-form" onSubmit={handleSubmit}>
        <InputText data-testid="form-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputText data-testid="form-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" data-testid="form-button" text="Logar" />
      </Form>
      {
        error
          && (
          <Alert variant="danger" data-testid="alert" onClose={() => setError(false)} dismissible>
            <Alert.Heading>Erro ao efetuar Login!</Alert.Heading>
            <p>
              { errorText }
            </p>
          </Alert>
          )
      }
    </>
  );
};

export default Login;
