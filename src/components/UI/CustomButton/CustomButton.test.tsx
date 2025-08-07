import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomButton } from '@components/UI/CustomButton/index';
import userEvent from '@testing-library/user-event';
import styles from './styles.module.scss';

describe('Custom button', () => {
  it('should renders children correctly', () => {
    render(<CustomButton>Click me</CustomButton>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
  });

  it('should defaults to type="button"', () => {
    render(<CustomButton>Default type</CustomButton>);
    const button = screen.getByRole('button', { name: 'Default type' });
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<CustomButton onClick={handleClick}>Press</CustomButton>);
    const button = screen.getByRole('button', { name: 'Press' });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should applies correct CSS module classes for primary and error colors', async () => {
    const { rerender } = render(
      <CustomButton color="primary">Primary</CustomButton>
    );
    let button = screen.getByRole('button', { name: 'Primary' });
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.button__primary);

    rerender(<CustomButton color="error">Error</CustomButton>);
    button = screen.getByRole('button', { name: 'Error' });
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles.button__error);
  });
});
