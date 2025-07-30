import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '@components/UI/Checkbox/index';
import styles from './styles.module.scss';
import userEvent from '@testing-library/user-event';

describe('Checkbox component', () => {
  it('should render checkbox with id and label', () => {
    render(
      <Checkbox
        id="custom"
        label="Custom label"
        checked={false}
        onChange={() => {}}
      />
    );

    const input = screen.getByRole('checkbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'checkbox_custom');
    expect(input).not.toBeChecked();

    const label = screen.getByText('Custom label');
    expect(label).toBeInTheDocument();
    expect(label.parentElement).toHaveAttribute('for', 'checkbox_custom');
    expect(input).toHaveClass(styles.checkboxInner__checkbox);
  });

  it('uses name prop as id when id prop is not provided', () => {
    render(
      <Checkbox name="agree" label="Agree" checked={true} onChange={() => {}} />
    );

    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('id', 'checkbox_agree');
  });

  it('calls onChange handler when clicked and reflects checked state', async () => {
    const handleChange = vi.fn((event) => event.currentTarget.checked);

    const { rerender } = render(
      <Checkbox
        id="ctrl"
        label="Control"
        checked={false}
        onChange={handleChange}
      />
    );

    const input = screen.getByRole('checkbox');
    await userEvent.click(input);
    expect(handleChange).toHaveBeenCalledTimes(1);

    rerender(
      <Checkbox
        id="ctrl"
        label="Control"
        checked={true}
        onChange={handleChange}
      />
    );
    expect(input).toBeChecked();
  });
});
