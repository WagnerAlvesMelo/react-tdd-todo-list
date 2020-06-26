import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from '../Button';

beforeEach(() => cleanup);

describe('Button tests', () => {
  it("ensure that Button component doesn't crash", () => {
    const { getByTestId } = render(<Button type="button" text="hi" onClick={() => null} />);
    const linkElement = getByTestId('button');
    expect(linkElement).toBeInTheDocument();
  });

  it('ensure that event is fired on click', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<Button type="button" text="hi" onClick={mockCallBack} />);
    const linkElement = getByTestId('button');
    fireEvent.click(linkElement);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
