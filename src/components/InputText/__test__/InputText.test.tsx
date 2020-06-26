import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import InputText from '../InputText';

beforeEach(() => cleanup);

describe('InputText Renders test', () => {
  it("should ensure that InputText doesn't crash", () => {
    const { getByTestId } = render(<InputText type="text" value="default" onChange={(e) => e} />);
    const linkElement = getByTestId('input');
    expect(linkElement).toBeInTheDocument();
  });

  it('should trigger event on change', () => {
    let mockValue = 'default';
    const { getByTestId, rerender } = render(
      <InputText
        type="text"
        value={mockValue}
        onChange={(e) => { mockValue = e.target.value; }}
      />,
    );

    const linkElement = getByTestId('input');
    fireEvent.change(linkElement, { target: { value: 'testing' } });
    rerender(
      <InputText
        type="text"
        value={mockValue}
        onChange={(e) => { mockValue = e.target.value; }}
      />,
    );

    expect((linkElement as HTMLInputElement).value).toEqual('testing');
  });
});
