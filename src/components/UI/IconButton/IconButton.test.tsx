import { describe } from 'vitest';
import { IconButton } from '@components/UI/IconButton/index';
import { render, screen } from '@testing-library/react';
import styles from './styles.module.scss';
import userEvent from '@testing-library/user-event';

describe('IconButton component', () => {
  it('renders img icon when icon prop is string with default rotation', () => {
    render(<IconButton icon="icon.png" alt="Test icon" />);
    const img = screen.getByAltText('Test icon') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain('icon.png');
    expect(img).toHaveStyle({
      transform: 'rotate(0deg)',
      transformOrigin: 'center',
    });
  });

  it('applies rotation from iconProps when provided', () => {
    render(
      <IconButton
        icon="icon.svg"
        iconProps={{ rotate: 45 }}
        alt="Rotated icon"
      />
    );
    const img = screen.getByAltText('Rotated icon');
    expect(img).toHaveStyle({
      transform: 'rotate(45deg)',
      transformOrigin: 'center',
    });
  });

  it('forwards className to button and supports onClick event', async () => {
    const handleClick = vi.fn();
    render(
      <IconButton icon="icon.png" className="my-btn" onClick={handleClick} />
    );
    const btn = screen.getByRole('button');
    expect(btn).toHaveClass(styles.iconButton, 'my-btn');
    await userEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
