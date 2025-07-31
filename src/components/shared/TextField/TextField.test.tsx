import { fireEvent, render, screen } from '@testing-library/react';
import { TextField } from '@components/shared/TextField/index';
import styles from './styles.module.scss';

describe('TextField component', () => {
  it('renders label with htmlFor, required asterisk, and outlined variant by default', () => {
    render(
      <TextField
        label="Username"
        required={true}
        value=""
        onChange={() => {}}
      />
    );

    const input = screen.getByLabelText(/Username/);
    expect(input).toBeInTheDocument();

    const label = screen.getByText(/Username/).closest('label');
    expect(label).toHaveTextContent('*');

    const id = input.getAttribute('id')!;
    expect(id).toMatch(/^input_/);
    expect(label).toHaveAttribute('for', id);
    expect(input).toHaveClass(styles.inputWrapper__input);
  });

  it('opens date picker when clicking on input type=date if showPicker available', () => {
    render(
      <TextField
        type="date"
        value="2025-07-30"
        label="Date picker"
        onChange={() => {}}
      />
    );
    const input = screen.getByLabelText(/Date picker/) as HTMLInputElement;

    const showPickerMock = vi.fn();
    input.showPicker = showPickerMock;
    fireEvent.click(input);
    expect(showPickerMock).toHaveBeenCalledTimes(1);
  });

  it('forwards inputProps and renders endAdornment at correct position', () => {
    render(
      <TextField
        value="abc"
        onChange={() => {}}
        inputProps={{
          maxLength: 5,
          inputMode: 'numeric',
          endAdornment: <span data-testid="adornment">$</span>,
        }}
      />
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input).toHaveAttribute('maxLength', '5');
    expect(input).toHaveAttribute('inputmode', 'numeric');

    const adornment = screen.getByTestId('adornment');
    expect(adornment).toBeInTheDocument();

    const wrapper = adornment.parentElement!;
    expect(wrapper).toHaveStyle({ left: 'calc(3ch + 0.5ch)' });
  });
});
