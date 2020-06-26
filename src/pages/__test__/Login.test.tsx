import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Login from '../Login';

beforeEach(() => cleanup);

describe('Login components test', () => {
  it("should doesn't crash on created", () => {
    const { getByTestId } = render(<Login />);
    const linkElement = getByTestId('login-form');
    expect(linkElement).toBeInTheDocument();
  });

  it('should return an error if password and email was empty', () => {
    const { getByTestId, getByText } = render(<Login />);
    const form = getByTestId('login-form');
    fireEvent.submit(form);
    const alertText = getByText(/Os campos E-Mail e Senha estão vazios/i);
    expect(alertText).toBeInTheDocument();
  });
});
