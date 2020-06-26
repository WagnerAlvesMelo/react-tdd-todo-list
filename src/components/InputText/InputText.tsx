import React from 'react';
import { Form } from 'react-bootstrap';

type InputProps = {
  value:string,
  onChange(event: React.ChangeEvent<HTMLInputElement>): void,
  type: string
}

export default function InputText({ value, onChange, type }:InputProps) {
  return (
    <Form.Control data-testid="input" type={type} value={value} onChange={onChange} />
  );
}
