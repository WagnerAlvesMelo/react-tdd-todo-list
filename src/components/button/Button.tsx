import React from 'react';
import { Button } from 'react-bootstrap';

type InputProps = {
  text: string,
  type: 'button' | 'submit' | 'reset' | undefined,
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void
}

export default function ButtonComponent({ text, onClick, type }: InputProps) {
  return (
    <Button type={type} onClick={onClick} data-testid="button">{text}</Button>
  );
}
